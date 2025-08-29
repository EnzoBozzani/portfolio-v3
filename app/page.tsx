import { TitleSection } from '../components/TitleSection';
import { AboutSection } from '../components/AboutSection';
import { Metadata } from 'next';
import { TechStackSection } from '../components/TechStackSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { ResumeSection } from '../components/ResumeSection';

export const metadata: Metadata = {
	title: 'Home',
};

const HomePage = () => {
	return (
		<main className='flex-1'>
			<TitleSection />
			<AboutSection />
			<ExperienceSection />
			<TechStackSection />
			<ContactSection />
			<ResumeSection />
		</main>
	);
};

export default HomePage;
