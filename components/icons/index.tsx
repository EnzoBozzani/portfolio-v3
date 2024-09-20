'use client';

import { useState } from 'react';
import { FaPython } from 'react-icons/fa';

import { icons } from '@/constants/icons';
import { cn } from '@/lib/utils';

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
	| 'csharp'
	| 'python';

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
	const [currentColor, setCurrentColor] = useState<'white' | 'green' | 'grey'>(color);

	if (selectedIcon == 'python') {
		if (isAnimated) {
			return (
				<FaPython
					color={colors[currentColor]}
					className={cn(className, 'hover:-translate-y-6 transition duration-500')}
					onMouseEnter={() => setCurrentColor('green')}
					onMouseLeave={() => setCurrentColor('grey')}
				/>
			);
		}
		return (
			<FaPython
				color={colors[currentColor]}
				className={cn(className)}
			/>
		);
	}

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
					// @ts-ignore
					onMouseEnter={() => setCurrentColor(colors['green'])}
					// @ts-ignore
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
