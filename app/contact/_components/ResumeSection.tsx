'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export const ResumeSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-sm w-full mt-12 text-white'>
			<hr />
			<h1 className='text-3xl sm:text-5xl text-center mt-6'>{language === 'pt' ? 'Currículo' : 'Resume'}</h1>
			<div className='py-6 flex items-center justify-center flex-wrap gap-6 mt-6'>
				<Button
					variant={'custom'}
					size={'lg'}
					className='w-full sm:w-auto'
					onClick={() => {
						window.open('/EnzoBozzaniPT.pdf');
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 mr-2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
						/>
					</svg>
					{language === 'pt' ? 'Currículo' : 'Resume'} - PT 🇧🇷
				</Button>
				<Button
					variant={'custom'}
					size={'lg'}
					className='w-full sm:w-auto'
					onClick={() => {
						window.open('/EnzoBozzani.pdf');
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 mr-2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
						/>
					</svg>
					{language === 'pt' ? 'Currículo' : 'Resume'} - EN 🇺🇸
				</Button>
			</div>
		</section>
	);
};
