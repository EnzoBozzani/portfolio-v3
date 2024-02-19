import { ProjectCard } from './_components/ProjectCard';

const projects = ['ecommFrontend', 'ecommBackend', 'taskify', 'auth', 'pokemonReview', 'obfBackend', 'obfFrontend'];

const ProjectsPage = () => {
	return (
		<main className='flex-1'>
			<section className='mt-24 text-white max-w-screen-lg mx-auto flex gap-x-4 flex-wrap'>
				{projects.map((projectName: string) => (
					<ProjectCard project={projectName} />
				))}
			</section>
		</main>
	);
};

export default ProjectsPage;
