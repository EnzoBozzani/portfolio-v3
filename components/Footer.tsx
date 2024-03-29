'use client';

import { ChatBubbleIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import { useLanguage } from '@/hooks/useLanguage';
import { useContactModal } from '@/hooks/useContactModal';

export const Footer = () => {
	const language = useLanguage((state) => state.language);
	const onOpen = useContactModal((state) => state.onOpen);

	return (
		<footer className='mt-12 p-6 w-full flex items-center justify-center gap-x-8 backdrop-blur border-t border-t-white/20'>
			<a
				href='https://github.com/EnzoBozzani'
				target='_blank'
				className='hover:text-white text-white/30 hidden md:block'
			>
				<GitHubLogoIcon className='w-12 h-12' />
			</a>
			<a
				href='https://www.linkedin.com/in/enzo-bozzani-812a7322a/'
				target='_blank'
				className='hover:text-white text-white/30 hidden md:block'
			>
				<LinkedInLogoIcon className='w-12 h-12' />
			</a>
			<div
				role='button'
				onClick={() => onOpen()}
				className='text-white font-semibold hover:text-white/80 flex gap-x-2 items-center'
			>
				<p>{language === 'pt' ? 'Entre em contato' : 'Get in Touch'}</p>
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
						d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
					/>
				</svg>
				<ChatBubbleIcon className='w-6 h-6' />
			</div>
		</footer>
	);
};
