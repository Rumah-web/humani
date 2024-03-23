import { FC, useState } from "react";

export const OpenCloseCS: FC<{}> = () => {
	const [openCS, setOpenCS] = useState(false);

	const onClick = () => {
		setOpenCS(!openCS);
	};

	return (
		<div
			className={`flex my-4 cursor-pointer hover:opacity-85 z-40 items-center fixed bottom-1/3  p-2 drop-shadow-2xl text-green-500 w-full`}
			onClick={() => {
				onClick();
			}}>
			<div
				className={`absolute bg-white  ${
					openCS
						? `-right-0 rounded-tl-full rounded-bl-full`
						: `-right-14 rounded-full w-1/3`
				} `}>
				{openCS ? (
					<div className='my-2 ml-3 relative flex flex-row'>
						<svg
							width='50'
							height='50'
							viewBox='0 0 16 16'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='currentColor'
								d='M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z'
							/>
						</svg>
						<div className='text-xs px-4 text-center text-[#88171d] hover:underline self-center'>
							<div>Butuh bantuan ?</div>
							<div className='font-bold'>Klik disini</div>
						</div>
					</div>
				) : (
					<div className='my-2 ml-3 relative'>
						<svg
							width='50'
							height='50'
							viewBox='0 0 16 16'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='currentColor'
								d='M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z'
							/>
						</svg>
					</div>
				)}
			</div>
		</div>
	);
};