'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';

export const MobileSidebar = () => {
	const pathname = usePathname();
	const [isMounted, setIsMounted] = useState(false);

	const onOpen = useMobileSidebar((state) => state.onOpen);
	const onClose = useMobileSidebar((state) => state.onClose);
	const isOpen = useMobileSidebar((state) => state.isOpen);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		onClose();
	}, [pathname, onClose]);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<Button
				onClick={onOpen}
				className='block sm:hidden mr-0.5 xs:mr-2'
				variant='custom'
				size={'sm'}
			>
				<HamburgerMenuIcon className='w-4 h-4 text-white' />
			</Button>
			<Sheet
				open={isOpen}
				onOpenChange={onClose}
			>
				<SheetContent
					side='left'
					className='p-2 pt-10 bg-gradient-to-b from-neutral-900 to-neutral-800 border-none text-white'
				>
					<div>TODO: implement navigation menu here</div>
				</SheetContent>
			</Sheet>
		</>
	);
};
