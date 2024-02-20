'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { TechIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
	project: string;
}

interface Projects {
	[key: string]: {
		title: string;
		pt: string;
		en: string;
		icons: string[] | null;
		techs: string[] | null;
		githubUrl: string;
	};
}

//adicionar também taskify, auth, pokemon review C#, onebitflix-backend, onebitflix frontend
const projects: Projects = {
	ecommFrontend: {
		title: 'Ecommerce - Frontend',
		pt: 'O Frontend da Plataforma de Comércio Eletrônico é uma solução centrada no usuário que abrange todos os recursos essenciais de uma loja online, construída utilizando React, TypeScript, NextJS e Tailwind.',
		en: 'The Ecommerce Platform Frontend is a user-centric solution that encompasses all essential features of an online store, built using React, TypeScript, NextJS and Tailwind.',
		icons: ['react', 'typescript', 'next', 'tailwind'],
		techs: null,
		githubUrl: '/ecommerce-frontend',
	},
	ecommBackend: {
		title: 'Ecommerce - Backend',
		pt: 'Backend de um site de comércio eletrônico contendo uma API construída com Express, Node, TypeScript e Sequelize, acessando um banco de dados PostgreSQL.',
		en: 'Ecommerce website backend containing API built with Express, Node, TypeScript, Sequelize accessing PostgreSQL database.',
		icons: ['node', 'typescript', 'postgres'],
		techs: ['Sequelize', 'ExpressJS'],
		githubUrl: '/ecommerce-backend',
	},
	taskify: {
		title: 'Taskify',
		pt: 'Taskify é um clone completo do Trello de pilha completa, impulsionado pelo Next.js 14, React, Prisma, Stripe, Tailwind e MySQL. Simplifique a gestão de projetos com uma interface intuitiva e recursos robustos.',
		en: 'Taskify is a fullstack Trello clone, powered by Next.js 14, React, Prisma, Stripe, Tailwind, and MySQL. Streamline project management with an intuitive interface and robust features.',
		icons: ['next', 'react', 'typescript', 'tailwind'],
		techs: ['Prisma', 'MySQL'],
		githubUrl: '/taskify-trello-clone',
	},
	auth: {
		title: 'Auth',
		pt: 'Construído com Next.js, TypeScript e React, este projeto concentra-se na criação de um sistema de autenticação altamente seguro. Ele oferece suporte ao login e registro tradicionais, assim como integração com serviços externos como Google e GitHub. O sistema prioriza a segurança com Autenticação de Dois Fatores durante o login.',
		en: 'Built with Next.js, TypeScript, and React, this project focuses on creating a highly secure authentication system. It supports traditional credentials login and registration, as well as integration with external services like Google and GitHub. The system prioritizes security with Two-Factor Authentication during login.',
		icons: ['next', 'typescript', 'react', 'tailwind'],
		techs: ['AuthJS'],
		githubUrl: '/auth',
	},
	pokemonReview: {
		title: 'Pokemon Review',
		pt: 'Criação de uma WebAPI utilizando .NET e C#. É minha primeira WebAPI desenvolvida utilizando tais tecnologias, as quais estou estudando atualmente',
		en: 'Creation of a WebAPI using .NET and C#. This is my first WebAPI developed using these technologies, which I am currently studying.',
		icons: ['postgres'],
		techs: ['C#', '.NET'],
		githubUrl: '/pokemon-review',
	},
	obfBackend: {
		title: 'OneBitFlix - Backend',
		pt: 'Desenvolvimento de uma WebAPI utilizando NodeJS. Todos os endpoints necessários para o funcionamento do FrontEnd foram desenvolvidos nessa aplicação.',
		en: 'Development of a WebAPI using Node.js. All necessary endpoints for the FrontEnd functionality have been implemented in this application.',
		icons: ['node', 'typescript', 'postgres'],
		techs: ['Sequelize', 'ExpressJS', 'AdminJS'],
		githubUrl: '/onebitflix-backend',
	},
	obfFrontend: {
		title: 'OneBitFlix - Frontend',
		pt: 'Desenvolvimento de uma plataforma de cursos online. Usuários, quando autenticados, podem acessar diversos cursos e recursos.',
		en: 'Online courses platform development. Users, when logged in, can access several courses and features.',
		icons: ['next', 'react', 'typescript', 'sass'],
		techs: null,
		githubUrl: '/onebitflix-frontend',
	},
};

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
						currentProject.techs.map((tech: string) => <p className='text-green-400'>{tech}</p>)}
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
