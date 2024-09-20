import { Metadata } from 'next';

import { ExperienceSection } from './_components/ExperienceSection';
import { TechStackSection } from './_components/TechStackSection';

export const metadata: Metadata = {
	title: 'Experience',
};

const ExperiencePage = () => {
	return (
		<main className='flex-1'>
			<ExperienceSection />
			<TechStackSection />
		</main>
	);
};

export default ExperiencePage;
