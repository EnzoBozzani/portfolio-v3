import { TitleSection } from './_components/TitleSection';
import { AboutSection } from './_components/AboutSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home',
};

const HomePage = () => {
	return (
		<main className='flex-1'>
			<TitleSection />
			<AboutSection />
		</main>
	);
};

export default HomePage;
