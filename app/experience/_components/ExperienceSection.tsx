'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='w-full mt-32 text-white'>
			<h1 className='font-semibold text-3xl md:text-5xl text-center'>
				{language === 'pt' ? 'Experiência' : 'Experience'}
			</h1>
			<ExperienceCard />
		</section>
	);
};
