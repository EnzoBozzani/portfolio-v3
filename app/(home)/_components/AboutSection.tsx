'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLanguage } from '@/hooks/useLanguage';

export const AboutSection = () => {
	const lang = useLanguage((state) => state.language);

	return (
		<section className='mx-auto max-w-screen-lg flex flex-col-reverse justify-center items-center mt-16 gap-8'>
			<article className='px-8 w-full flex flex-col justify-center items-center'>
				<p className='text-white text-justify font-medium'>
					{lang === 'en' ? (
						<>
							Hello, my name is <span className='highlighted'>Enzo Bozzani</span>, I&apos;m 20 years old,
							and I&apos;m passionate about technology, specially software development. Currently,
							I&apos;m working as a software developer intern at <span className='highlighted'>IBM</span>{' '}
							and studying <span className='highlighted'>Computer Science</span> at Centro Universitário
							FEI. I&apos;m from Brazil, so my native language is portuguese, but I also speak english.
						</>
					) : (
						<>
							Olá, meu nome é <span className='highlighted'>Enzo Bozzani</span>, tenho 20 anos e sou
							apaixonado por tecnologia, especialmente desenvolvimento de software. Atualmente, estou
							trabalhando como estagiário em desenvolvimento de software na{' '}
							<span className='highlighted'>IBM</span> e cursando{' '}
							<span className='highlighted'>Ciência da Computação</span> no Centro Universitário FEI. Sou
							do Brasil, então minha língua nativa é o português, mas também falo inglês.
						</>
					)}
				</p>
				<br />
				<p className='text-white text-justify font-medium'>
					{lang === 'en' ? (
						<>
							I&apos;ve experience and familiarity, mainly, with{' '}
							<span className='highlighted'>Python</span>, <span className='highlighted'>JavaScript</span>
							, <span className='highlighted'>TypeScript</span>,{' '}
							<span className='highlighted'>ReactJS</span> and <span className='highlighted'>NodeJS</span>
							. For more information on my tech stack, go to{' '}
							<Link
								href={'/experience'}
								className='text-green-400 underline'
							>
								Experience
							</Link>
							.
						</>
					) : (
						<>
							Tenho experiência e familiaridade, principalmente, com{' '}
							<span className='highlighted'>Python</span>, <span className='highlighted'>JavaScript</span>
							, <span className='highlighted'>TypeScript</span>,{' '}
							<span className='highlighted'>ReactJS</span> e <span className='highlighted'>NodeJS</span>.
							Para obter mais informações sobre minha tech stack, acesse{' '}
							<Link
								href={'/experience'}
								className='text-green-400 underline'
							>
								Experiência
							</Link>
							.
						</>
					)}
				</p>
			</article>
			<div className='w-full flex justify-center items-center'>
				<Image
					src='/coding.gif'
					alt='gif'
					width={638}
					height={380}
					className='w-2/3 h-auto rounded-2xl led-effect'
				/>
			</div>
		</section>
	);
};
