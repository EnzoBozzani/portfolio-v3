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
	};
}

export const experiences: Experiences = {
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
	},
	ibm: {
		title: {
			pt: 'Estagiário em desenvolvimento de software na IBM Research',
			en: 'Software developer intern at IBM Research',
		},
		time: {
			pt: 'Agosto/2024 - Agora',
			en: 'August/2024 - Now',
		},
		icons: ['python'],
	},
};
