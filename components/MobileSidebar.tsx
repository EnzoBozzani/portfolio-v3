'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CodeIcon, GitHubLogoIcon, HamburgerMenuIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useLanguage } from '@/hooks/useLanguage';

export const MobileSidebar = () => {
	const pathname = usePathname();
	const language = useLanguage((state) => state.language);
	const onLanguageChange = useLanguage((state) => state.onLanguageChange);
	const [isMounted, setIsMounted] = useState(false);

	const onOpen = useMobileSidebar((state) => state.onOpen);
	const onClose = useMobileSidebar((state) => state.onClose);
	const isOpen = useMobileSidebar((state) => state.isOpen);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		onClose();
	}, [pathname, onClose]);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<button
				onClick={onOpen}
				className='block md:hidden absolute left-4 top-4 p-1'
			>
				<HamburgerMenuIcon className='w-6 h-6 text-white' />
			</button>
			<Sheet
				open={isOpen}
				onOpenChange={onClose}
			>
				<SheetContent
					side='left'
					className='p-2 pt-10 bg-gradient-to-b from-neutral-900 to-neutral-800 border-none text-white'
				>
					<div className='flex flex-col items-center justify-between gap-y-20'>
						<div>
							<Link
								className='flex items-center group'
								href='/'
							>
								<CodeIcon className='h-8 w-8 md:w-12 md:h-12 text-green-500 mr-2' />
								<p className='group-hover:text-white/70 text-lg md:text-2xl text-white'>Enzo Bozzani</p>
							</Link>
						</div>
						<div className='flex flex-col gap-y-12 ml-4'>
							<Link
								className='text-center border-b border-b-green-500 pb-2 hover:text-white/80'
								href={'/experience'}
							>
								{language === 'pt' ? 'Experiência' : 'Experience'}
							</Link>
							<Link
								className='text-center border-b border-b-green-500 pb-2 hover:text-white/80'
								href={'/projects'}
							>
								{language === 'pt' ? 'Projetos' : 'Projects'}
							</Link>
							<Link
								className='text-center border-b border-b-green-500 pb-2 hover:text-white/80'
								href={'/contact'}
							>
								{language === 'pt' ? 'Contato' : 'Contact'}
							</Link>
							<Button
								variant='custom'
								onClick={() => onLanguageChange(language)}
							>
								<p className='mr-2'>{language === 'pt' ? 'EN 🇺🇸' : 'PT 🇧🇷'}</p>
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
						<footer className='fixed bottom-0 py-6 flex items-center justify-center gap-x-6 w-3/4 sm:w-[385px] border-t border-t-white/30'>
							<a
								href='https://github.com/EnzoBozzani'
								target='_blank'
								className='hover:text-white text-white/30'
							>
								<GitHubLogoIcon className='w-10 h-10' />
							</a>
							<a
								href='https://www.linkedin.com/in/enzo-bozzani-812a7322a/'
								target='_blank'
								className='hover:text-white text-white/30'
							>
								<LinkedInLogoIcon className='w-10 h-10' />
							</a>
						</footer>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
};
