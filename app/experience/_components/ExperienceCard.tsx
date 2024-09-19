'use client';

import { AvailableIcons, TechIcon } from '@/components/icons';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { experiences } from '@/constants/experiences';
import { useLanguage } from '@/hooks/useLanguage';

export const ExperienceCard = ({ experience }: { experience: string }) => {
	const language = useLanguage((state) => state.language);

	const experienceData = experiences[experience];

	return (
		<Card className='w-full sm:w-[580px] bg-neutral-800 text-white mx-auto mt-12 led-effect border-green-400'>
			<CardHeader className='text-base sm:text-lg px-6 sm:px-12 text-center'>
				{language === 'pt' ? experienceData.title.pt : experienceData.title.en}
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='w-full flex items-center justify-center'>
					{experienceData.icons.map((icon) => (
						<TechIcon
							key={icon}
							color='green'
							selectedIcon={icon as AvailableIcons}
							className='w-12 h-12'
						/>
					))}
				</div>
			</CardContent>
			<CardFooter className='flex justify-center text-white/50'>
				{language === 'pt' ? experienceData.time.pt : experienceData.time.en}
			</CardFooter>
		</Card>
	);
};
