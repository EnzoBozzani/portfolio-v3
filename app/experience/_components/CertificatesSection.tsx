'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';

export const CertificatesSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-lg w-full mt-20 text-white'>
			<h1 className='font-semibold text-3xl md:text-5xl text-center'>
				{language === 'pt' ? 'Certificados' : 'Certificates'}
			</h1>
			<Carousel className='mx-auto w-[80%] sm:w-[600px] mt-12'>
				<CarouselContent>
					<CarouselItem className='flex items-center justify-center'>
						<Image
							src={'/profile.jpg'}
							alt='certificate'
							width={300}
							height={300}
							className='w-[85%] sm:w-[400px] h-auto'
						/>
					</CarouselItem>
					<CarouselItem className='flex items-center justify-center'>
						<Image
							src={'/profile.jpg'}
							alt='certificate'
							width={300}
							height={300}
							className='w-[85%] sm:w-[400px] h-auto'
						/>
					</CarouselItem>
					<CarouselItem className='flex items-center justify-center'>
						<Image
							src={'/profile.jpg'}
							alt='certificate'
							width={300}
							height={300}
							className='w-[85%] sm:w-[400px] h-auto'
						/>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious
					className='bg-neutral-900'
					onClick={() => {}}
				/>
				<CarouselNext className='bg-neutral-900' />
			</Carousel>
			<p>TODO: ADICIONAR MAIS UM TEXTO QUE TROCA DE ACORDO COM O CERTIFICADO</p>
		</section>
	);
};
