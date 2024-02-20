'use client';

import { useLanguage } from '@/hooks/useLanguage';

import { ProjectCard } from './ProjectCard';

const projects = ['ecommFrontend', 'ecommBackend', 'taskify', 'auth', 'pokemonReview', 'obfBackend', 'obfFrontend'];

export const ProjectsSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='mt-24 text-white max-w-screen-lg mx-auto'>
			<h1 className='font-semibold text-3xl md:text-5xl text-center'>
				{language === 'pt' ? 'Projetos' : 'Projects'}
			</h1>
			<div className='flex gap-8 flex-wrap mt-12'>
				{projects.map((projectName: string) => (
					<ProjectCard
						project={projectName}
						key={projectName}
					/>
				))}
			</div>
		</section>
	);
};
