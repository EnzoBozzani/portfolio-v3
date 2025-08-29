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
							Hi, my name is <span className='highlighted'>Enzo Bozzani</span>, and I&apos;m passionate
							about technology, specially software engineering. Currently, I&apos;m working as a software
							engineer intern at <span className='highlighted'>IBM</span> and studying{' '}
							<span className='highlighted'>Computer Science</span> at Centro Universitário FEI. I&apos;m
							from Brazil, so my native language is portuguese, but I also speak english.
						</>
					) : (
						<>
							Olá, meu nome é <span className='highlighted'>Enzo Bozzani</span> e sou um apaixonado por
							tecnologia, especialmente engenharia de software. Atualmente, estou trabalhando como
							estagiário em desenvolvimento de software na <span className='highlighted'>IBM</span> e
							cursando <span className='highlighted'>Ciência da Computação</span> no Centro Universitário
							FEI. Sou do Brasil, então minha língua nativa é o português, mas também falo inglês.
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
