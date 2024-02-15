'use client';

import { useLanguage } from '@/hooks/useLanguage';

export const AboutSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='max-w-screen-lg flex flex-col-reverse justify-center items-center mt-12 gap-8'>
			TODO: same code in the portfolio-v2
		</section>
	);
};
