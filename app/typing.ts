import { Decimal } from "@prisma/client/runtime/library";

export interface IData {
	prefix: null | string;
	title: string;
	description: string;
	imagePath: null | string;
}

export interface IMenu {
	description: string;
	m_menu_category_id: number;
	m_menu_files: any;
	name: string;
}

export interface IPriceMenu {
	id: number;
	name: string;
	slug: string;
	categories: {
		id: number;
		name: string;
		slug: string;
		cover: string;
		description: string;
		menus: {
			id: number;
			uuid: string;
			name: string;
			description: string;
			price: Decimal;
			price_promo: Decimal;
			status: string;
			m_menu_category_id: number;
			min_qty: number;
			max_qty: number;
			m_menu_files: {
				id: number;
				m_menu_id: number;
				m_files_id: number;
				m_files: {
					path: string;
					uuid: string;
				};
			}[];
			m_menu_item: {
				id: number;
				m_menu_id: number;
				m_item_id: number;
				order: number;
				status: string;
				m_item: {
					id: number;
					uuid: string;
					name: string;
					status: string;
					description: string;
				};
			}[];
		}[];
	}[];
}
