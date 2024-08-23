interface Projects {
	[key: string]: {
		title: string;
		pt: string;
		en: string;
		icons: string[] | null;
		techs: string[] | null;
		githubUrl: string | null;
		liveUrl: string | null;
	};
}

export const projects: Projects = {
	finnancia: {
		title: 'Finnancia',
		pt: 'Finnancia é um SaaS (Software as a Service) que permite que seus usuários controlem suas finanças de maneira simples, prática e totalmente personálizavel. Por meio do uso de planilhas, categorias, análises e IA, o Finnancia proporciona o gerenciamento financeiro. Utiliza tecnologias como Next.js, React, Prisma, Stripe, Tailwind e PostgreSQL.',
		en: 'Finnancia is a SaaS (Software as a Service) that allows its users to control their finances in a simple, practical and fully customizable way. Through the use of spreadsheets, categories, analysis and AI, Finnancia provides financial management. It uses technologies such as Next.js, React, Prisma, Stripe, Tailwind and PostgreSQL.',
		icons: ['next', 'react', 'typescript', 'tailwind', 'postgres'],
		techs: ['Prisma'],
		githubUrl: '/finnancia',
		liveUrl: 'https://finnancia.tech',
	},
	lingo: {
		title: 'Lingo',
		pt: 'O Lingo é um clone do Duolingo, construído com Next.js, React, Prisma, Stripe, Tailwind e PostgreSQL. Aprenda novos idiomas de forma divertida e eficaz com um design moderno e recursos avançados. Utiliza Clerk para autenticação dos usuários',
		en: 'Lingo is a Duolingo clone, built with Next.js, React, Prisma, Stripe, Tailwind, and PostgreSQL. Learn new languages in a fun and effective way with a modern design and advanced features. Uses Clerk for user authentication',
		icons: ['react', 'typescript', 'next', 'tailwind'],
		techs: null,
		githubUrl: '/duolingo-clone',
		liveUrl: 'https://lingo-enzobozzani.vercel.app/',
	},
	ecommBackend: {
		title: 'Ecommerce - Backend',
		pt: 'Backend de um site de comércio eletrônico contendo uma API construída com Express, Node, TypeScript e Sequelize, acessando um banco de dados PostgreSQL.',
		en: 'Ecommerce website backend containing API built with Express, Node, TypeScript, Sequelize accessing PostgreSQL database.',
		icons: ['node', 'typescript', 'postgres'],
		techs: ['Sequelize', 'ExpressJS'],
		githubUrl: '/ecommerce-backend',
		liveUrl: null,
	},
	taskify: {
		title: 'Taskify',
		pt: 'Taskify é um clone completo do Trello, impulsionado pelo Next.js 14, React, Prisma, Stripe, Tailwind e MySQL. Simplifique a gestão de projetos com uma interface intuitiva e recursos robustos.',
		en: 'Taskify is a fullstack Trello clone, powered by Next.js 14, React, Prisma, Stripe, Tailwind, and MySQL. Streamline project management with an intuitive interface and robust features.',
		icons: ['next', 'react', 'typescript', 'tailwind'],
		techs: ['Prisma', 'MySQL'],
		githubUrl: '/taskify-trello-clone',
		liveUrl: 'https://taskify-enzobozzani.vercel.app',
	},
	auth: {
		title: 'Auth',
		pt: 'Construído com Next.js, TypeScript e React, este projeto concentra-se na criação de um sistema de autenticação altamente seguro. Ele oferece suporte ao login e registro tradicionais, assim como integração com serviços externos como Google e GitHub. O sistema prioriza a segurança com Autenticação de Dois Fatores durante o login.',
		en: 'Built with Next.js, TypeScript, and React, this project focuses on creating a highly secure authentication system. It supports traditional credentials login and registration, as well as integration with external services like Google and GitHub. The system prioritizes security with Two-Factor Authentication during login.',
		icons: ['next', 'typescript', 'react', 'tailwind'],
		techs: ['AuthJS', 'Prisma', 'MySQL'],
		githubUrl: '/auth',
		liveUrl: null,
	},
	stockWebAPI: {
		title: 'Stock Platform WebAPI',
		pt: 'Desenvolvimento de uma WebAPI utilizando C# e .NET. Essa WebAPI possue todos os endpoints (protegidos usando Identity JWT) necessários numa "rede social de ações", utilizando Entity Framework para trabalhar com o banco de dados PostgreSQL.',
		en: 'Development of WebAPI using C# and .NET. This WebAPI contains all endpoints (protected using Identity JWT) needed in a "stock social media platform", using Entity Framework to work with the PostgreSQL database.',
		icons: ['postgres'],
		techs: ['C#', '.NET'],
		githubUrl: '/stock-platform-webapi',
		liveUrl: null,
	},
	obfBackend: {
		title: 'OneBitFlix - Backend',
		pt: 'Desenvolvimento de uma WebAPI utilizando NodeJS. Todos os endpoints necessários para o funcionamento do FrontEnd foram desenvolvidos nessa aplicação.',
		en: 'Development of a WebAPI using Node.js. All necessary endpoints for the FrontEnd functionality have been implemented in this application.',
		icons: ['node', 'typescript', 'postgres'],
		techs: ['Sequelize', 'ExpressJS', 'AdminJS'],
		githubUrl: '/onebitflix-backend',
		liveUrl: null,
	},
	obfFrontend: {
		title: 'OneBitFlix - Frontend',
		pt: 'Desenvolvimento de uma plataforma de cursos online. Usuários, quando autenticados, podem acessar diversos cursos e recursos.',
		en: 'Online courses platform development. Users, when logged in, can access several courses and features.',
		icons: ['next', 'react', 'typescript'],
		techs: null,
		githubUrl: '/onebitflix-frontend',
		liveUrl: null,
	},
};
