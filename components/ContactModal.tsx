'use client';

import { useContactModal } from '@/hooks/useContactModal';
import { Dialog } from './ui/dialog';
import { DialogContent } from '@radix-ui/react-dialog';

export const ContactModal = () => {
	const isOpen = useContactModal((state) => state.isOpen);
	const onClose = useContactModal((state) => state.onClose);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}
		>
			<DialogContent className='bg-white max-w-md p-0 oveflow-hidden'>
				<div className='aspect-video relative flex items-center justify-center'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste dicta dolor vel nulla
						voluptatibus enim nam iure odit maiores assumenda pariatur quo, quis natus eaque magnam animi
						dolorum! Distinctio.
					</p>
				</div>
			</DialogContent>
		</Dialog>
	);
};
