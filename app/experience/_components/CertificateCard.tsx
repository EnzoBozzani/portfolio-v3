import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface CertificateCardProps {
	title: string;
	description: string;
	date: string;
}

export const CertificateCard = ({ title, description, date }: CertificateCardProps) => {
	return (
		<Card>
			<CardHeader className='flex items-center justify-between'>
				<p>{title}</p>
				<p>{date}</p>
			</CardHeader>
			<CardContent>{description}</CardContent>
		</Card>
	);
};
