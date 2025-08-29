'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { experiences } from '@/constants/experiences';

import { ExperienceRow } from './ExperienceRow';

export const ExperienceSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-lg w-full mt-12 text-white'>
			<h1
				className='font-semibold text-3xl md:text-5xl text-center mb-12'
				id='experience'
			>
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
		</section>
	);
};
