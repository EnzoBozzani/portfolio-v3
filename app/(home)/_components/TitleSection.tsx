'use client';

import Image from 'next/image';

import { useLanguage } from '@/hooks/useLanguage';

export const TitleSection = () => {
	const language = useLanguage((state) => state.language);

	return (
		<>
			<Image
				className='w-[220px] md:w-[320px] h-auto mt-32 z-30 mx-auto rounded-full pulseAnimation'
				alt='profile picture'
				width={320}
				height={297}
				src={'/profile.jpg'}
			/>
			<p className='mt-12 mx-auto text-center text-xl sm:text-2xl md:text-4xl text-white font-black'>
				{language === 'pt' ? (
					<>
						Sou um Desenvolvedor <br />
						JavaScript, TypeScript, ReactJS, NodeJS, C#, .NET
					</>
				) : (
					<>
						I'm a Software Developer <br /> JavaScript, TypeScript, ReactJS, NodeJS, C#, .NET
					</>
				)}
			</p>
		</>
	);
};
