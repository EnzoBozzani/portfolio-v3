'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { HomeIcon } from '@radix-ui/react-icons';

import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	const router = useRouter();
	const language = useLanguage((state) => state.language);

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className='flex-1 flex flex-col gap-y-4 justify-center items-center text-white'>
			<h2 className='text-3xl px-3 text-center'>
				{language === 'pt' ? 'Algo deu errado! :(' : 'Something went wrong! :('}
			</h2>
			<Button
				variant={'custom'}
				onClick={() => router.push('/')}
				size={'lg'}
			>
				<HomeIcon className='w-6 h-6 mr-3' />
				Home
			</Button>
			<Button
				variant={'custom'}
				onClick={() => reset()}
				size={'lg'}
			>
				{language === 'pt' ? 'Tente novamente' : 'Try again'}
			</Button>
		</div>
	);
}
