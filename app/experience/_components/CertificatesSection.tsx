'use client';

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
						<CertificateCard
							imgSrc='/FEI.png'
							title={
								language === 'pt'
									? 'Certificado de Melhor colocação no Processo Seletivo da FEI'
									: "Certificate of Best Placement in FEI's Selection Process"
							}
							description={language === 'pt' ? 'xsmdniumd' : 'demdim'}
							date='03/2022'
						/>
					</CarouselItem>
					<CarouselItem className='flex items-center justify-center'>
						<CertificateCard
							imgSrc='/FullStackJS.png'
							title={language === 'pt' ? '' : "Certificate of Best Placement in FEI's Selection Process"}
							description={language === 'pt' ? 'xsmdniumd' : 'demdim'}
							date='03/2022'
						/>
					</CarouselItem>
					<CarouselItem className='flex items-center justify-center'>
						<CertificateCard
							imgSrc='/DecolaTech.png'
							title={language === 'pt' ? '' : "Certificate of Best Placement in FEI's Selection Process"}
							description={language === 'pt' ? 'xsmdniumd' : 'demdim'}
							date='03/2022'
						/>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className='bg-neutral-900' />
				<CarouselNext className='bg-neutral-900' />
			</Carousel>
		</section>
	);
};
