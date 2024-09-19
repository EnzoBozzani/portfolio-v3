'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { experiences } from '@/constants/experiences';

import { ExperienceRow } from './ExperienceRow';

export const ExperienceSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-lg w-full mt-24 text-white'>
			<h1 className='font-semibold text-3xl md:text-5xl text-center mb-12'>
				{language === 'pt' ? 'Experiência' : 'Experience'}
			</h1>
			<div className='bg-neutral-800 mx-auto w-full px-6 py-3 rounded-xl'>
				{Object.keys(experiences).map((experience) => (
					<ExperienceRow
						key={experience}
						experience={experience}
					/>
				))}
			</div>
			<p className='text-justify mt-12'>
				{language === 'en' ? (
					<>
						Before even entering college, my interest in programming had already been awakened, what made me
						watch courses on YouTube, specially about web development and programming logic. This initial
						passion was the foundation that propelled me to the next step: college. In university, my
						enthusiasm only grew as I delved deeper into the world of programming. Every challenge I
						overcame increased my certainty that I was on the right path.{' '}
						<span className='highlighted'>
							Software development wasn&apos;t just a career I was pursuing, it was my passion.
						</span>
					</>
				) : (
					<>
						Antes mesmo de entrar na faculdade, meu interesse em programação já havia sido despertado, o que
						me levou a assistir cursos no YouTube, especialmente sobre desenvolvimento web e lógica de
						programação. Essa paixão inicial foi a base que me impulsionou para o próximo passo: a
						faculdade. Na universidade, meu entusiasmo só cresceu à medida que mergulhei mais fundo no mundo
						da programação. Cada desafio superado aumentava minha certeza de que eu estava no caminho certo.{' '}
						<span className='highlighted'>
							O desenvolvimento de software não era apenas uma carreira que eu estava seguindo, era minha
							paixão.
						</span>
					</>
				)}
			</p>
		</section>
	);
};
