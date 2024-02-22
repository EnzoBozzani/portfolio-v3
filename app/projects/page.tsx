import { Metadata } from 'next';
import { ProjectsSection } from './_components/ProjectsSection';

export const metadata: Metadata = {
	title: 'Projects',
};

const ProjectsPage = () => {
	return (
		<main className='flex-1'>
			<ProjectsSection />
		</main>
	);
};

export default ProjectsPage;
