'use client';

import { AvailableIcons, TechIcon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';

const techIcons: AvailableIcons[] = ['python', 'javascript', 'react', 'typescript', 'node', 'next'];

const hardSkills =
	'HTML, CSS, SASS, SCSS, TailwindCSS, JavaScript,TypeScript, React, Next.js, SSR, Node.js, Express.js, NestJS, PostgreSQL, MySQL, MongoDB, Git, REST, WebAPI, Prisma, Stripe, Python, FastAPI, Web Sockets, RabbitMQ, Redis, Docker, Rancher, Containerization,Cloud solutions, IBM Cloud, Serverless, LLMs, AI'.split(
		','
	);

const softSkills = 'Teamwork, Problem solving, Communication, Adaptability, Proactiveness, Self-learning'.split(',');

export const TechStackSection = () => {
	const lang = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-lg w-full mt-12 text-white'>
			<h1
				className='font-semibold text-3xl md:text-5xl text-center'
				id='skills'
			>
				{lang === 'pt' ? 'Habilidades' : 'Skills'}
			</h1>
			<div className='flex items-center justify-center flex-wrap gap-4 mt-8'>
				{techIcons.map((techIcon) => (
					<TechIcon
						isAnimated
						selectedIcon={techIcon}
						color='grey'
						className='w-[80px] h-[80px]'
						key={techIcon}
					/>
				))}
			</div>
			<p className='text-white text-justify font-medium mt-8'>
				{lang === 'en' ? (
					<>
						I have experience and familiarity, mainly, with <span className='highlighted'>Python</span>,{' '}
						<span className='highlighted'>JavaScript</span>, <span className='highlighted'>TypeScript</span>
						, <span className='highlighted'>ReactJS</span> and <span className='highlighted'>NodeJS</span>,
						but I am highly adaptable to new techonologies and stacks.
					</>
				) : (
					<>
						Tenho experiência e familiaridade, principalmente, com{' '}
						<span className='highlighted'>Python</span>, <span className='highlighted'>JavaScript</span>,{' '}
						<span className='highlighted'>TypeScript</span>, <span className='highlighted'>ReactJS</span> e{' '}
						<span className='highlighted'>NodeJS</span>, mas sou totalmente adaptável a novas tecnologias.
					</>
				)}
			</p>
			<div className='mt-8'>Hard skills</div>
			<div className='flex flex-wrap gap-2 py-2'>
				{hardSkills.map((skill) => (
					<Badge
						className='bg-green-700 hover:bg-green-500'
						key={skill}
					>
						{skill}
					</Badge>
				))}
			</div>
			<div className='mt-8'>Soft skills</div>
			<div className='flex flex-wrap gap-2 py-2'>
				{softSkills.map((skill) => (
					<Badge
						className='bg-green-700 hover:bg-green-500'
						key={skill}
					>
						{skill}
					</Badge>
				))}
			</div>
		</section>
	);
};
