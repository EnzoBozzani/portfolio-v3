'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { experiences } from '@/constants/experiences';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-lg w-full mt-24 text-white'>
			<h1 className='font-semibold text-3xl md:text-5xl text-center'>
				{language === 'pt' ? 'Experiência' : 'Experience'}
			</h1>
			{Object.keys(experiences).map((experience) => (
				<ExperienceCard
					key={experience}
					experience={experience}
				/>
			))}
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
			<br />
			<p className='text-justify'>
				{language === 'en' ? (
					<>
						Over time, I looked for courses to increase my knowledge, that&apos;s why I started studying
						development with JavaScript, which led me to TypeScript, ReactJS and NodeJS. In fact,{' '}
						<span className='highlighted'>
							this portfolio was developed using ReactJS, TypeScript, Tailwind and NextJS
						</span>
						, stack which, nowadays, is the one I use the most.
					</>
				) : (
					<>
						Ao longo do tempo, procurei por cursos para aumentar meu conhecimento, por isso comecei a
						estudar desenvolvimento com JavaScript, o que me levou ao TypeScript, ReactJS e NodeJS.
						Inclusive,{' '}
						<span className='highlighted'>
							este portfólio foi desenvolvido usando ReactJS, TypeScript, Tailwind e NextJS
						</span>
						, stack que, atualmente, é a que eu mais utilizo.
					</>
				)}
			</p>
		</section>
	);
};
