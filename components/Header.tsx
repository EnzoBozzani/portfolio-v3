import { CodeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from './ui/button';

export const Header = () => {
	return (
		<header className='w-full p-6 flex items-center justify-between'>
			<Link
				className='flex items-center group'
				href='/'
			>
				<CodeIcon className='w-12 h-12 text-green-500 mr-2' />
				<p className='group-hover:text-white/70 text-2xl text-white'>Enzo Bozzani</p>
			</Link>
			<div className='space-x-6 hidden md:block'>
				<Link
					href='/experience'
					className='text-lg text-white border-b-2 border-transparent pb-2 transition duration-200 hover:border-b-green-500 hover:text-white/70'
				>
					Experience
				</Link>
				<Link
					href='/projects'
					className='text-lg text-white border-b-2 border-transparent pb-2 transition duration-200 hover:border-b-green-500 hover:text-white/70'
				>
					Projects
				</Link>
				<Link
					href='/contact'
					className='text-lg text-white border-b-2 border-transparent pb-2 transition duration-200 hover:border-b-green-500 hover:text-white/70'
				>
					Contact
				</Link>
				<Button variant='custom'>
					<p className='mr-2'>Language</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
						/>
					</svg>
				</Button>
			</div>
		</header>
	);
};
