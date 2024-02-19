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
			<Carousel className='mx-auto w-[70%] sm:w-[500px] mt-3'>
				<CarouselContent>
					<CertificateCard
						imgSrc='/FullStackJS.png'
						title={
							language === 'pt'
								? 'Certificado de Conclusão do curso Full Stack JavaScript'
								: 'Conclusion Certificate of Full Stack JavaScript course'
						}
						description={
							language === 'pt'
								? 'Certificado concedido pela conclusão do curso Full Stack JavaScript, o qual ensina a utilizar ferramentas no desenvolvimento web FullStack, como HTML, CSS, BootStrap, SASS, JavaScript, TypeScript, ReactJS, NextJS, NodeJS, ExpressJS, PostgreSQL. Concedido por OneBitCode'
								: 'Certificate awarded upon completion of the Full Stack JavaScript course, which teaches the use of tools in FullStack web development, such as HTML, CSS, BootStrap, SASS, JavaScript, TypeScript, ReactJS, NextJS, NodeJS, ExpressJS, PostgreSQL. Granted by OneBitCode.'
						}
						date='11/2023'
						givenBy='OneBitCode'
					/>
					<CertificateCard
						imgSrc='/FEI.png'
						title={
							language === 'pt'
								? 'Certificado de Melhor colocação no Processo Seletivo da FEI'
								: "Certificate of Best Placement in FEI's Selection Process"
						}
						description={
							language === 'pt'
								? "Certificate granted by University Center of FEI for the best placement in FEI's 2022 First Semester Selection Process"
								: 'Certificado concedido pelo Centro Universitário FEI pela melhor colocação no Processo Seletivo da FEI no Primeiro Semestre de 2022'
						}
						date='03/2022'
						givenBy='FEI'
					/>
					<CertificateCard
						imgSrc='/DecolaTech.png'
						title={
							language === 'pt'
								? 'Certificado de Conclusão do Bootcamp DecolaTech'
								: 'Conclusion Certificate of DecolaTech Bootcamp'
						}
						description={
							language === 'pt'
								? 'Certificado de conclusão do Bootcamp DecolaTech 2024, o qual ensina diversos conceitos e fundamentos do desenvolvimento utilizando C# e .NET. Concedido por Avanade.'
								: 'Certificate of completion of the DecolaTech 2024 Bootcamp, which teaches various concepts and fundamentals of development using C# and .NET. Granted by Avanade.'
						}
						date='12/2023'
						givenBy='Avanade'
					/>
				</CarouselContent>
				<CarouselPrevious className='bg-neutral-900' />
				<CarouselNext className='bg-neutral-900' />
			</Carousel>
		</section>
	);
};
