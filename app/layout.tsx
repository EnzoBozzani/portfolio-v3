import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import { Header } from '@/components/Header';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/Footer';
import { ModalProvider } from '@/components/ModalProvider';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'] });

export const metadata: Metadata = {
	title: {
		default: 'Enzo Bozzani',
		template: 'Enzo Bozzani - %s',
	},
	description:
		'Enzo Bozzani, a software developer (JavaScript, TypeScript, ReactJS, NodeJS), portfolio containing general information.',
	icons: [
		{
			url: 'icon.png',
			href: 'icon.png',
		},
	],
};

export const viewport: Viewport = {
	themeColor: '#171717',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn('bg-neutral-900 flex flex-col', montserrat.className)}>
				<Header />
				<ModalProvider />
				{children}
				<Footer />
			</body>
		</html>
	);
}
