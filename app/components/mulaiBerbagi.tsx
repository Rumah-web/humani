import { FC, useState } from "react";

export const MulaiBerbagi: FC<{}> = () => {
	return (
		<div
			className={`z-20 flex flex-row fixed justify-between bottom-0 bg-gradient-to-r from-[#88171d] to-[#d83831] w-full py-4 text-center text-white`}>
			<div className='font-bold text-center w-full'>Mulai Berbagi Sekarang</div>
			<div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='25'
					height='25'
					viewBox='0 0 208 456'>
					<path
						fill='currentColor'
						d='M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34z'
					/>
				</svg>
			</div>
		</div>
	);
};
