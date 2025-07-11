import db from "@/prisma/lib/db";
import { m_files, m_menu_category } from "@prisma/client";

type ResponseData = {
  message: string;
};

export async function POST(request: Request) {
  const assets_api = process.env.API_ASSETS_HOST + "/view";

  let datas = [] as Partial<
    m_menu_category & {
      m_files: { path: string; uuid: string } | null;
    }
  >[];
  const parent = await db.m_menu_category.findFirst({
    where: {
      slug: "produk-ready-to-eat",
    },
  });

  if (parent) {
    datas = await db.m_menu_category.findMany({
      include: {
        m_files: {
          select: {
            path: true,
            uuid: true,
          },
        },
      },
      where: {
        status: "published",
        parent_id: parent.id,
      },
      orderBy: {
        order: "asc",
      },
    });

    if (datas) {
      datas = datas.map((item, i) => {
        if (item?.m_files) {
          item.m_files = {
            ...item.m_files,
            path: assets_api + "/" + item?.m_files.uuid + "?width=400",
          };
        }
        return item;
      });
    }
  }

  return Response.json({
    data: datas,
  });
}
