'use client';

import { useContactModal } from '@/hooks/useContactModal';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from './ui/button';
import { ChatBubbleIcon, CopyIcon } from '@radix-ui/react-icons';

export const ContactModal = () => {
	const isOpen = useContactModal((state) => state.isOpen);
	const onClose = useContactModal((state) => state.onClose);
	const language = useLanguage((state) => state.language);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}
		>
			<DialogContent className='bg-neutral-900 p-3 sm:p-6 text-white max-w-md oveflow-hidden border border-neutral-600'>
				<DialogHeader>
					<DialogTitle className='text-3xl'>{language === 'pt' ? 'Contato' : 'Contact'}</DialogTitle>
					<DialogDescription>
						{language === 'pt'
							? 'Entre em contato por WhatsApp ou Email'
							: 'Get in touch through WhatsApp or Email'}
					</DialogDescription>
				</DialogHeader>
				<div className='py-6 flex items-center justify-center gap-x-6'>
					<Button
						variant={'custom'}
						onClick={() => {
							window.open('https://wa.me/13996440301/?text=');
						}}
					>
						<ChatBubbleIcon className='w-6 h-6 mr-2' />
						Whatsapp
					</Button>
					<Button
						variant={'custom'}
						onClick={() => {
							window.open('mailto:bozzanienzo@gmail.com');
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
						Email
					</Button>
				</div>
				<p className='w-full text-center text-white/50'>or</p>
				<div className='space-y-6 w-full'>
					<div className='flex items-center justify-between gap-x-2 sm:gap-x-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 sm:w-8 sm:h-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
							/>
						</svg>

						<p className='text-sm sm:text-xl'>bozzanienzo@gmail.com</p>
						<Button
							variant={'custom'}
							className='py-6 px-2'
						>
							<CopyIcon className='w-6 h-6 sm:w-8 sm:h-8' />
						</Button>
					</div>
					<div className='flex items-center justify-between gap-x-2 sm:gap-x-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 sm:w-8 sm:h-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
							/>
						</svg>
						<p className='text-sm sm:text-xl'>+55 (13) 99644-0301</p>
						<Button
							variant={'custom'}
							className='py-6 px-2'
						>
							<CopyIcon className='w-6 h-6 sm:w-8 sm:h-8' />
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
