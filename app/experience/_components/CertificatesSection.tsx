'use client';

import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/hooks/useLanguage';
import { CertificateCard } from './CertificateCard';

export const CertificatesSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-lg w-full mt-16 text-white'>
			<h1 className='font-semibold text-3xl md:text-5xl text-center'>
				{language === 'pt' ? 'Certificados' : 'Certificates'}
			</h1>
			<Carousel className='mx-auto w-[70%] sm:w-[500px] mt-6'>
				<CarouselContent>
					<CarouselItem className='flex items-center justify-center'>
						<Image
							src={'/FEI.png'}
							alt='certificate'
							width={300}
							height={300}
							className='w-[100%] sm:w-[450px] h-auto'
						/>
					</CarouselItem>
					<CarouselItem className='flex items-center justify-center'>
						<Image
							src={'/FullStackJS.png'}
							alt='certificate'
							width={300}
							height={300}
							className='w-[100%] sm:w-[450px] h-auto'
						/>
					</CarouselItem>
					<CarouselItem className='flex items-center justify-center'>
						<Image
							src={'/DecolaTech.png'}
							alt='certificate'
							width={300}
							height={300}
							className='w-[100%] sm:w-[450px] h-auto'
						/>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className='bg-neutral-900' />
				<CarouselNext className='bg-neutral-900' />
			</Carousel>
			<ol className='space-y-3 mt-6'>
				<li>
					<CertificateCard
						title={language === 'pt' ? '' : "Certificate of Best Placement in FEI's Selection Process"}
						description={language === 'pt' ? 'xsmdniumd' : 'demdim'}
						date='03/2022'
					/>
				</li>
				<li>
					<p className='text-justify'>TODO: textos dos certificados</p>
				</li>
				<li>
					<p className='text-justify'>TODO: textos dos certificados</p>
				</li>
			</ol>
		</section>
	);
};
