'use client';

import { HomeIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const NotFoundPage = () => {
	const router = useRouter();
	const language = useLanguage((state) => state.language);

	return (
		<div className='flex-1 flex flex-col gap-y-4 justify-center items-center text-white'>
			<h3 className='text-3xl px-3 text-center'>
				Oops... {language === 'pt' ? 'Página não encontrada' : 'Page not found'} :(
			</h3>
			<Button
				variant={'custom'}
				onClick={() => router.push('/')}
				size={'lg'}
			>
				<HomeIcon className='w-6 h-6 mr-3' />
				Home
			</Button>
		</div>
	);
};

export default NotFoundPage;
