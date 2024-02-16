import { Metadata } from 'next';

import { ExperienceSection } from './_components/ExperienceSection';

export const metadata: Metadata = {
	title: 'Experience',
};

const ExperiencePage = () => {
	return (
		<main className='flex-1'>
			<ExperienceSection />
		</main>
	);
};

export default ExperiencePage;
