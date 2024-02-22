'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ChatBubbleIcon, CopyIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';

export const ContactSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-sm w-full mt-24 text-white'>
			<h1 className='text-3xl sm:text-5xl text-center'>{language === 'pt' ? 'Contato' : 'Contact'}</h1>
			<div className='py-6 flex items-center justify-center flex-wrap gap-6 mt-6'>
				<Button
					variant={'custom'}
					size={'lg'}
					onClick={() => {
						window.open('https://wa.me/13996440301/?text=');
					}}
					className='w-full sm:w-auto'
				>
					<ChatBubbleIcon className='w-6 h-6 mr-2' />
					Whatsapp
				</Button>
				<Button
					variant={'custom'}
					size={'lg'}
					onClick={() => {
						window.open('mailto:bozzanienzo@gmail.com');
					}}
					className='w-full sm:w-auto'
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
			<div className='flex items-center justify-between mt-8'>
				<div className='border-t border-white w-[45%]' />
				<p>{language === 'pt' ? 'Ou' : 'Or'}</p>
				<div className='border-t border-white w-[45%]' />
			</div>
			<div className='space-y-6 w-full mt-8'>
				<div className='flex items-center justify-between gap-x-2 sm:gap-x-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 sm:w-8 sm:h-8 text-green-400'
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
						className='py-3 px-2'
						onClick={() => {
							navigator.clipboard.writeText('bozzanienzo@gmail.com');
							toast.success(
								language === 'pt' ? 'Email copiado com sucesso!' : 'Email copied successfully!'
							);
						}}
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
						className='w-6 h-6 sm:w-8 sm:h-8 text-green-400'
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
						className='py-3 px-2'
						onClick={() => {
							navigator.clipboard.writeText('5513996440301');
							toast.success(
								language === 'pt' ? 'Telefone copiado com sucesso!' : 'Phone copied successfully!'
							);
						}}
					>
						<CopyIcon className='w-6 h-6 sm:w-8 sm:h-8' />
					</Button>
				</div>
			</div>
		</section>
	);
};
