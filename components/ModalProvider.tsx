'use client';

import { useState, useEffect } from 'react';

import { ContactModal } from './ContactModal';

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<>
			<ContactModal />
		</>
	);
};
