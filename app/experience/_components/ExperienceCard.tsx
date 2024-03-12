'use client';

import { TechIcon } from '@/components/icons';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

export const ExperienceCard = () => {
	const language = useLanguage((state) => state.language);

	return (
		<Card className='w-full sm:w-[580px] bg-neutral-800 text-white mx-auto mt-12 led-effect border-green-400'>
			<CardHeader className='text-base sm:text-lg px-6 sm:px-12 text-center'>
				{language === 'pt'
					? 'Desenvolvedor FrontEnd (Iniciação Tecnológica) em CADFEI: Site Institucional de Carreira Docente'
					: 'FrontEnd Developer (Undergraduate Research) at CADFEI: Professor Career Institucional Website'}
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='w-full flex items-center justify-center'>
					<TechIcon
						color='green'
						selectedIcon='typescript'
						className='w-12 h-12'
					/>
					<TechIcon
						color='green'
						selectedIcon='react'
						className='w-12 h-12'
					/>
					<TechIcon
						color='green'
						selectedIcon='css'
						className='w-12 h-12'
					/>
				</div>
				<p className='text-sm text-justify'>
					{language === 'pt'
						? 'Desenvolvimento FrontEnd do CADFEI, o website institucional dos professores da FEI. As principais ferramentas utilizadas durante o desenvolvimento são React, TypeScript, Redux, CSS & Vite.'
						: "FrontEnd Development of CADFEI, FEI's professor's institucional website. The tech stack used while developing is, mainly, React, TypeScript, Redux, CSS & Vite."}
				</p>
			</CardContent>
			<CardFooter className='flex justify-center text-white/50'>
				{language === 'pt' ? 'Setembro/2023 - Agora' : 'September/2023 - Now'}
			</CardFooter>
		</Card>
	);
};
