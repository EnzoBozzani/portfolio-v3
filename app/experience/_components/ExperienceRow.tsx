'use client';

import { AvailableIcons, TechIcon } from '@/components/icons';
import { experiences } from '@/constants/experiences';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export const ExperienceRow = ({ experience }: { experience: string }) => {
	const language = useLanguage((state) => state.language);

	const experienceData = experiences[experience];

	return (
		<div
			className={cn('w-full text-white flex gap-x-6 p-4', !experienceData.last && 'border-b border-neutral-700')}
		>
			<div className='shrink-0'>{experienceData.logo}</div>
			<div className='space-y-3'>
				<h6 className='text-sm sm:text-base'>
					{language === 'pt' ? experienceData.title.pt : experienceData.title.en}
				</h6>
				<div className='space-y-4'>
					<div className='w-full flex flex-wrap'>
						{experienceData.icons.map((icon) => (
							<TechIcon
								key={icon}
								color='green'
								selectedIcon={icon as AvailableIcons}
								className='w-8 h-8'
							/>
						))}
					</div>
				</div>
				<div className='text-white/50 text-xs sm:text-sm'>
					{language === 'pt' ? experienceData.time.pt : experienceData.time.en}
				</div>
			</div>
		</div>
	);
};
