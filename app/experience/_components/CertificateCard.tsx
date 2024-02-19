import Image from 'next/image';

interface CertificateCardProps {
	imgSrc: string;
	title: string;
	description: string;
	date: string;
}

export const CertificateCard = ({ imgSrc, title, description, date }: CertificateCardProps) => {
	return (
		<div className='rounded-lg w-full border-2 border-green-400 bg-neutral-900 text-white flex flex-col gap-y-4'>
			<Image
				src={imgSrc}
				alt={`${title} img`}
				width={300}
				height={300}
				className='w-full h-auto rounded-t-lg'
			/>
			<div className='space-y-1 p-3 text-justify'>
				<p className='text-sm md:text-lg'>{title}</p>
				<p className='text-xs text-white/50'>{date}</p>
				<p className='text-sm md:text-sm pt-4'>{description}</p>
			</div>
		</div>
	);
};
