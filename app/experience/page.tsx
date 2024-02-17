import { Metadata } from 'next';

import { ExperienceSection } from './_components/ExperienceSection';
import { TechStackSection } from './_components/TechStackSection';
import { CertificatesSection } from './_components/CertificatesSection';

export const metadata: Metadata = {
	title: 'Experience',
};

const ExperiencePage = () => {
	return (
		<main className='flex-1'>
			<ExperienceSection />
			<TechStackSection />
			<CertificatesSection />
		</main>
	);
};

export default ExperiencePage;
