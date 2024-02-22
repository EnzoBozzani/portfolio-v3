import { Metadata } from 'next';

import { ContactSection } from './_components/ContactSection';
import { ResumeSection } from './_components/ResumeSection';

export const metadata: Metadata = {
	title: 'Contact',
};

const ContactPage = () => {
	return (
		<main className='flex-1'>
			<ContactSection />
			<ResumeSection />
		</main>
	);
};

export default ContactPage;
