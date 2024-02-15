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
							Hello, my name is <span className='highlighted'>Enzo Bozzani</span>, I'm 20 years old, and
							I'm passionate about technology, specially software development. Currently, I'm studying{' '}
							<span className='highlighted'>Computer Science</span> at Centro Universitário FEI. I'm from
							Santos (Brazil), so my native language is portuguese, but I also speak english.
						</>
					) : (
						<>
							Olá, meu nome é <span className='highlighted'>Enzo Bozzani</span>, tenho 20 anos e sou
							apaixonado por tecnologia, especialmente desenvolvimento de software. Atualmente, estou
							cursando <span className='highlighted'>Ciência da Computação</span> no Centro Universitário
							FEI. Sou de Santos (Brasil), então minha língua nativa é o português, mas também falo
							inglês.
						</>
					)}
				</p>
				<br />
				<p className='text-white text-justify font-medium'>
					{lang === 'en' ? (
						<>
							I've experience and familiarity with <span className='highlighted'>JavaScript</span>,{' '}
							<span className='highlighted'>TypeScript</span>,{' '}
							<span className='highlighted'>ReactJS</span> and <span className='highlighted'>NodeJS</span>
							, but also worked with Python, C and Java. Recently I've also been studying{' '}
							<span className='highlighted'>WebAPIs development with C# e .NET</span>. For more
							information on my tech stack, go to{' '}
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
							Tenho experiência e familiaridade com <span className='highlighted'>JavaScript</span>,{' '}
							<span className='highlighted'>TypeScript</span>,{' '}
							<span className='highlighted'>ReactJS</span> e <span className='highlighted'>NodeJS</span>,
							mas também trabalhei com Python, C e Java. Ultimamente também tenho estudado desenvolvimento
							de <span className='highlighted'>WebAPIs com C# e .NET</span>. Para obter mais informações
							sobre minha tech stack, acesse{' '}
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
