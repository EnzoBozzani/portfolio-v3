'use client';

import { TechIcon } from '@/components/icons';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

export const ExperienceCard = () => {
	const language = useLanguage((state) => state.language);

	return (
		<Card className='md:w-[480px] bg-neutral-800 text-white mx-auto mt-12 led-effect border-green-400'>
			<CardHeader className='text-lg px-12 text-center'>
				{language === 'pt'
					? 'Desenvolvedor FrontEnd em CADFEI: Site Institucional de Carreira Docente'
					: 'FrontEnd Developer at CADFEI: Professor Career Institucional Website'}
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='w-full flex items-center justify-center'>
					<TechIcon
						color='green'
						selectedIcon='javascript'
						className='w-12 h-12'
					/>
					<TechIcon
						color='green'
						selectedIcon='next'
						className='w-12 h-12'
					/>
				</div>
				<p className='text-sm text-justify'>
					FrontEnd Development using React, TypeScript, Redux, CSS & Vite. CADFEI is FEI professor's
					institucional website.
				</p>
			</CardContent>
		</Card>
	);
};
