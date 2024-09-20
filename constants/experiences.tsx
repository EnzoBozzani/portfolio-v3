import { ReactNode } from 'react';
import Image from 'next/image';
import { SiIbm } from 'react-icons/si';

interface Experiences {
	[key: string]: {
		title: {
			pt: string;
			en: string;
		};
		time: {
			pt: string;
			en: string;
		};
		icons: string[];
		logo: ReactNode;
		last?: boolean;
	};
}

export const experiences: Experiences = {
	ibm: {
		title: {
			pt: 'Estagiário em desenvolvimento de software na IBM Research',
			en: 'Software developer intern at IBM Research',
		},
		time: {
			pt: 'Agosto/2024 - Agora',
			en: 'August/2024 - Now',
		},
		icons: ['python', 'typescript', 'react', 'next'],
		logo: <SiIbm className='w-full h-auto shrink-0' />,
	},
	cadfei: {
		title: {
			pt: 'Desenvolvedor FrontEnd (Iniciação Tecnológica) em CADFEI: Site Institucional de Carreira Docente',
			en: 'FrontEnd Developer (Undergraduate Research) at CADFEI: Professor Career Institucional Website',
		},
		time: {
			pt: 'Setembro/2023 - Julho/2024',
			en: 'September/2023 - July/2024',
		},
		icons: ['typescript', 'react', 'css'],
		logo: (
			<div className='pt-4 shrink-0'>
				<Image
					alt='logo fei'
					src={'/logo-fei.png'}
					width={64}
					height={64}
					className='w-16 h-auto shrink-0'
				/>
			</div>
		),
		last: true,
	},
};
