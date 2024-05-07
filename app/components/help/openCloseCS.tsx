import { FC, useState } from "react";

export const OpenCloseCS: FC<{
	no: string;
	content: string;
	isFull?: boolean;
}> = ({ no, content, isFull = true }) => {
	const [openCS, setOpenCS] = useState(true);

	let width = "w-full";
	let right = "-right-0";

	if (typeof isFull === "undefined") {
		width = "md:w-fit w-full";
		right = "md:right-4 right-0";
	} else {
		if (!isFull) {
			width = "md:w-fit w-full";
			right = "md:right-4 right-0";
		}
	}

	const onClick = () => {
		if (isFull) {
			setOpenCS(!openCS);
		}
	};

	return (
		<div
			className={`flex my-4 cursor-pointer hover:opacity-100 z-40 items-center fixed bottom-10  p-2 drop-shadow-2xl text-green-500 ${width}`}
			onClick={() => {
				onClick();
			}}>
			<div
				className={`absolute md:-top-10 -top-20 bg-white  ${
					openCS
						? `${right} rounded-tl-full rounded-bl-full`
						: `-right-14 rounded-full md:w-1/12 w-1/3`
				} `}>
				{openCS ? (
					<div className='my-2 ml-3 relative flex flex-row text-[#88171d] items-center'>
						{/* <svg
							width='50'
							height='50'
							viewBox='0 0 16 16'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='currentColor'
								d='M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z'
							/>
						</svg> */}
						{/* <svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 20 20'>
							<path
								fill='currentColor'
								d='m3.219 2.154l6.778 6.773l6.706-6.705c.457-.407.93-.164 1.119.04a.777.777 0 0 1-.044 1.035l-6.707 6.704l6.707 6.702c.298.25.298.74.059 1.014c-.24.273-.68.431-1.095.107l-6.745-6.749l-6.753 6.752c-.296.265-.784.211-1.025-.052c-.242-.264-.334-.72-.025-1.042l6.729-6.732l-6.701-6.704c-.245-.27-.33-.764 0-1.075c.33-.311.822-.268.997-.068Z'
							/>
						</svg> */}
						<svg
							width='40'
							height='40'
							viewBox='0 0 28 28'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='currentColor'
								d='m12.167 17.802l-.006-.014a7.798 7.798 0 0 1-.36-.094l-.009-.003A7.985 7.985 0 0 1 8.708 16a8 8 0 1 1 13.257-6.75c.039.413-.3.75-.715.75c-.414 0-.745-.337-.793-.749A6.5 6.5 0 1 0 11.496 16l.04.017c.2.082.406.154.616.217A2 2 0 0 1 16 17a2 2 0 0 1-3.833.802m-.986 1.272a9.514 9.514 0 0 1-4.53-3.054A3 3 0 0 0 4 19v.715C4 23.433 8.21 26 14 26s10-2.708 10-6.285V19a3 3 0 0 0-3-3h-3.645a3.5 3.5 0 0 1-6.174 3.074M19 10c0-1.512-.67-2.867-1.731-3.784a5 5 0 1 0-5.624 8.195A3.486 3.486 0 0 1 14 13.5a3.49 3.49 0 0 1 2.356.911A5 5 0 0 0 19 10'
							/>
						</svg>
						<div
							className={`text-xs px-4 text-center text-[#88171d] hover:underline self-center w-32`}
							onClick={() => {
								window.open(`https://wa.me/${no}?text=${content}`, "_blank");
							}}>
							<div>Butuh bantuan ?</div>
							<div className='font-bold'>Klik disini</div>
						</div>
					</div>
				) : (
					<div className='my-2 ml-3 relative text-[#88171d]'>
						{/* <svg
							width='50'
							height='50'
							viewBox='0 0 16 16'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='currentColor'
								d='M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z'
							/>
						</svg> */}
						<svg
							width='40'
							height='40'
							viewBox='0 0 28 28'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='currentColor'
								d='m12.167 17.802l-.006-.014a7.798 7.798 0 0 1-.36-.094l-.009-.003A7.985 7.985 0 0 1 8.708 16a8 8 0 1 1 13.257-6.75c.039.413-.3.75-.715.75c-.414 0-.745-.337-.793-.749A6.5 6.5 0 1 0 11.496 16l.04.017c.2.082.406.154.616.217A2 2 0 0 1 16 17a2 2 0 0 1-3.833.802m-.986 1.272a9.514 9.514 0 0 1-4.53-3.054A3 3 0 0 0 4 19v.715C4 23.433 8.21 26 14 26s10-2.708 10-6.285V19a3 3 0 0 0-3-3h-3.645a3.5 3.5 0 0 1-6.174 3.074M19 10c0-1.512-.67-2.867-1.731-3.784a5 5 0 1 0-5.624 8.195A3.486 3.486 0 0 1 14 13.5a3.49 3.49 0 0 1 2.356.911A5 5 0 0 0 19 10'
							/>
						</svg>
					</div>
				)}
			</div>
		</div>
	);
};
