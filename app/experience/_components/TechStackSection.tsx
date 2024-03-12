'use client';

import { AvailableIcons, TechIcon } from '@/components/icons';
import { useLanguage } from '@/hooks/useLanguage';

const techIcons: AvailableIcons[] = [
	'html',
	'css',
	'javascript',
	'react',
	'typescript',
	'node',
	'postgres',
	'next',
	'tailwind',
	'csharp',
];

export const TechStackSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<section className='px-4 mx-auto max-w-screen-lg w-full mt-20 text-white'>
			<h1 className='font-semibold text-3xl md:text-5xl text-center'>
				{language === 'pt' ? 'Tecnologias' : 'Tech Stack'}
			</h1>
			<div className='flex items-center justify-center flex-wrap gap-4 mt-12'>
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
			<p className='text-justify mt-8'>
				{language === 'en' ? (
					<>
						As a developer, my tech stack is a well-rounded combination of web development technologies. I
						have hands-on experience with front-end technologies such as{' '}
						<span className='highlighted'>HTML</span>, <span className='highlighted'>CSS</span>,{' '}
						<span className='highlighted'>SASS</span>, <span className='highlighted'>BootStrap</span>, and{' '}
						<span className='highlighted'>Tailwind</span>, allowing me to craft visually appealing and
						responsive user interfaces. In the realm of <span className='highlighted'>JavaScript</span>, I'm
						proficient with both <span className='highlighted'>vanilla JavaScript</span> and{' '}
						<span className='highlighted'>TypeScript</span>, and I specialize in building interactive web
						applications using the <span className='highlighted'>React</span> library. For version control,
						I'm used to work with <span className='highlighted'>Git & GitHub</span>. On the back end, I'm
						well-versed in <span className='highlighted'>NodeJS</span> and have worked with both NoSQL
						databases like <span className='highlighted'>MongoDB</span> and relational databases{' '}
						<span className='highlighted'>(MySQL and PostgreSQL)</span> using NodeJS, providing me with a
						full-stack development capability. I've also been studying{' '}
						<span className='highlighted'>WebAPIs development with C# and .NET</span>.
					</>
				) : (
					<>
						Como desenvolvedor, minha tech stack é uma combinação abrangente de tecnologias de
						desenvolvimento web. Tenho experiência prática com tecnologias front-end como{' '}
						<span className='highlighted'>HTML</span>, <span className='highlighted'>CSS</span>,{' '}
						<span className='highlighted'>SASS</span>, <span className='highlighted'>BootStrap</span> e{' '}
						<span className='highlighted'>Tailwind</span>, permitindo-me criar interfaces de usuário
						visualmente atraentes e responsivas. No universo do{' '}
						<span className='highlighted'>JavaScript</span>, sou proficiente tanto em{' '}
						<span className='highlighted'>JavaScript puro</span> quanto em{' '}
						<span className='highlighted'>TypeScript</span>, e especializo-me na construção de aplicações
						web interativas usando a biblioteca <span className='highlighted'>React</span>. Quanto ao
						controle de versão, estou acostumado a trabalhar com{' '}
						<span className='highlighted'>Git & GitHub</span>. No back end, tenho proficiência em{' '}
						<span className='highlighted'>NodeJS</span> e trabalhei tanto com bancos de dados NoSQL como{' '}
						<span className='highlighted'>MongoDB</span> quanto com bancos de dados relacionais{' '}
						<span className='highlighted'>(MySQL and PostgreSQL)</span> usando NodeJS, proporcionando-me uma
						capacidade de desenvolvimento full-stack. Também venho estudando{' '}
						<span className='highlighted'>desenvolvimento de WebAPIs com C# e .NET</span>.
					</>
				)}
			</p>
		</section>
	);
};
