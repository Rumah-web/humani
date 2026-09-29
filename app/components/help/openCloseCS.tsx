import { FC, useState } from "react";

export const OpenCloseCS: FC<{
	no: string;
	content: string;
	isFull?: boolean;
}> = ({ no, content, isFull = false }) => {
	const [openCS, setOpenCS] = useState(true);

	return (
		<div className="fixed bottom-6 right-0 z-50 flex items-center">
			<div
				className="cursor-pointer bg-white shadow-2xl rounded-l-full pl-3 pr-2 py-2 flex items-center border-l border-t border-b border-gray-100"
				onClick={() => {
					if (isFull) {
						setOpenCS(!openCS);
					}
				}}
			>
				<div className="flex flex-row text-[#88171d] items-center">
					<svg
						width="36"
						height="36"
						viewBox="0 0 28 28"
						xmlns="http://www.w3.org/2000/svg"
						className="flex-shrink-0"
					>
						<path
							fill="currentColor"
							d="m12.167 17.802l-.006-.014a7.798 7.798 0 0 1-.36-.094l-.009-.003A7.985 7.985 0 0 1 8.708 16a8 8 0 1 1 13.257-6.75c.039.413-.3.75-.715.75c-.414 0-.745-.337-.793-.749A6.5 6.5 0 1 0 11.496 16l.04.017c.2.082.406.154.616.217A2 2 0 0 1 16 17a2 2 0 0 1-3.833.802m-.986 1.272a9.514 9.514 0 0 1-4.53-3.054A3 3 0 0 0 4 19v.715C4 23.433 8.21 26 14 26s10-2.708 10-6.285V19a3 3 0 0 0-3-3h-3.645a3.5 3.5 0 0 1-6.174 3.074M19 10c0-1.512-.67-2.867-1.731-3.784a5 5 0 1 0-5.624 8.195A3.486 3.486 0 0 1 14 13.5a3.49 3.49 0 0 1 2.356.911A5 5 0 0 0 19 10"
						/>
					</svg>
					<div
						className="text-xs px-3 text-center text-[#88171d] hover:underline self-center w-32 cursor-pointer"
						onClick={(e) => {
							e.stopPropagation();
							window.open(`https://wa.me/${no}?text=${content}`, "_blank");
						}}
					>
						<div>Butuh bantuan ?</div>
						<div className="font-bold">Klik disini</div>
					</div>
				</div>
			</div>
		</div>
	);
};

