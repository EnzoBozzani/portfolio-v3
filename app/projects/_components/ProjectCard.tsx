'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { TechIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { projects } from '@/constants/projects';

interface ProjectCardProps {
	project: string;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const language = useLanguage((state) => state.language);
	const currentProject = projects[project];

	return (
		<Card className='w-[90%] sm:w-[480px] bg-neutral-800 text-white border-green-400 mx-auto'>
			<CardHeader>
				<p className='mb-3'>{currentProject.title}</p>
				<div className='flex gap-2 items-center flex-wrap'>
					{currentProject.icons &&
						currentProject.icons.map((icon: any) => (
							<TechIcon
								key={`${currentProject.title}-${icon}`}
								color='green'
								selectedIcon={icon}
								className='w-10 h-10'
							/>
						))}
					{currentProject.techs &&
						currentProject.techs.map((tech: string) => (
							<p
								key={`${currentProject.title}-${tech}`}
								className='text-green-400'
							>
								{tech}
							</p>
						))}
				</div>
			</CardHeader>
			<CardContent className='text-xs text-white/50'>{currentProject[language]}</CardContent>
			<CardFooter>
				<Button
					asChild
					variant={'custom'}
				>
					<a
						href={`https://github.com/EnzoBozzani${currentProject.githubUrl}`}
						target='_blank'
					>
						{language === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
};
