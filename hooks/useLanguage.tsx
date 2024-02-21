import { toast } from 'sonner';
import { create } from 'zustand';

type LanguageStore = {
	language: 'pt' | 'en';
	onLanguageChange: (lang: 'pt' | 'en') => void;
};

export const useLanguage = create<LanguageStore>((set) => ({
	language: 'en',
	onLanguageChange: (lang) => {
		set({ language: lang === 'en' ? 'pt' : 'en' });
		toast.success(lang === 'en' ? 'Linguagem alterada para PT 🇧🇷!' : 'Language changed to EN 🇺🇸!');
	},
}));
