'use client';

import { useLanguage } from '@/hooks/useLanguage';

interface ProjectCardProps {
	project: string;
}

interface Projects {
	[key: string]: {
		title: string;
		pt: string;
		en: string;
		icons: string | any;
		githubUrl: string;
	};
}

//adicionar também taskify, auth, pokemon review C#, onebitflix-backend, onebitflix frontend
const projects: Projects = {
	ecommFrontend: {
		title: 'Ecommerce - Frontend',
		pt: '',
		en: "The Ecommerce Platform Frontend is a user-centric solution that encompasses all essential features of an online store. It boasts a streamlined product discovery experience with powerful search and filters, ensuring customers easily find what they need. From detailed product views to secure user authentication, the frontend is designed for intuitive navigation, helping users make informed purchase decisions. The seamless shopping experience includes a responsive design for accessibility across devices, and Stripe integration guarantees secure transactions during the checkout process. On the administrative side, the robust dashboard empowers administrators with tools for comprehensive order management, product oversight, and insightful data analysis. It's a cohesive platform that seamlessly combines user-friendly elements for customers and efficient management features for administrators, creating a well-rounded Ecommerce solution.",
		icons: '', //passar os nomes das techs e usar techicon component
		githubUrl: '',
	},
	ecommBackend: {
		title: 'Ecommerce - Backend',
		pt: '',
		en: '',
		icons: '', //passar os nomes das techs e usar techicon component
		githubUrl: '',
	},
	taskify: {
		title: 'Taskify',
		pt: '',
		en: '',
		icons: '', //passar os nomes das techs e usar techicon component
		githubUrl: '',
	},
	auth: {
		title: 'Auth',
		pt: '',
		en: '',
		icons: '', //passar os nomes das techs e usar techicon component
		githubUrl: '',
	},
	pokemonReview: {
		title: 'Pokemon Review',
		pt: '',
		en: '',
		icons: '', //passar os nomes das techs e usar techicon component
		githubUrl: '',
	},
	obfBackend: {
		title: 'OneBitFlix - Backend',
		pt: '',
		en: '',
		icons: '', //passar os nomes das techs e usar techicon component
		githubUrl: '',
	},
	obfFrontend: {
		title: 'OneBitFlix - Frontend',
		pt: '',
		en: '',
		icons: '', //passar os nomes das techs e usar techicon component
		githubUrl: '',
	},
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const language = useLanguage((state) => state.language);
	const currentProject = projects[project];

	return (
		<div className='w-full sm:w-[500px] bg-neutral-800 text-white mx-auto mt-12 led-effect border-green-400'>
			{currentProject.title}
		</div>
	);
};
