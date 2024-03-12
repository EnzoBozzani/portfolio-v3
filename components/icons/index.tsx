'use client';

import { useState } from 'react';

import { icons } from '@/constants/icons';

export type AvailableIcons =
	| 'html'
	| 'css'
	| 'javascript'
	| 'next'
	| 'react'
	| 'node'
	| 'postgres'
	| 'tailwind'
	| 'typescript'
	| 'csharp';

interface IconProps {
	selectedIcon: AvailableIcons;
	className?: string;
	color: 'grey' | 'white' | 'green';
	isAnimated?: boolean;
}

const colors = {
	white: '#fff',
	grey: '#737373',
	green: '#4ade80',
};

/**
 * Array to verify if svg view box needs to be 50
 */
const viewBox50 = ['javascript', 'next', 'postgres', 'typescript', 'tailwind', 'csharp'];

export const TechIcon = ({ color, className, selectedIcon, isAnimated }: IconProps) => {
	const [currentColor, setCurrentColor] = useState<any>('grey');

	if (isAnimated) {
		return (
			<div className={className}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox={`0 0 ${viewBox50.includes(selectedIcon) ? '50' : '30'} ${
						viewBox50.includes(selectedIcon) ? '50' : '30'
					}`}
					fill={currentColor}
					className='w-full h-auto hover:-translate-y-6 transition duration-500'
					onMouseEnter={() => setCurrentColor(colors['green'])}
					onMouseLeave={() => setCurrentColor(colors['grey'])}
				>
					{icons[selectedIcon]}
				</svg>
			</div>
		);
	}

	return (
		<div className={className}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox={`0 0 ${viewBox50.includes(selectedIcon) ? '50' : '30'} ${
					viewBox50.includes(selectedIcon) ? '50' : '30'
				}`}
				fill={colors[color]}
				className='w-full h-auto'
			>
				{icons[selectedIcon]}
			</svg>
		</div>
	);
};
