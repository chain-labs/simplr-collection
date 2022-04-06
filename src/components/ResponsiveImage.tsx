import Image from 'next/image';
import Box from './Box';
import If from './If';

interface Props {
	mobile?: string;
	tab?: string;
	desk?: string;
	className?: string;
	width?: string;
	height?: string;
}

const ResponsiveImage = ({ mobile, tab, desk, className, width, height }: Props) => {
	return (
		<Box className={className} maxWidth="100%">
			<If
				condition={!!desk}
				then={
					<Box display={{ mobS: 'none', deskM: 'block' }} position="relative">
						<Image src={desk} width={width ? width : '100%'} height={height ? height : '100%'} />
					</Box>
				}
			/>
			<If
				condition={!!mobile}
				then={
					<Box display={{ mobS: 'block', tabS: 'none', deskM: 'none' }} position="relative">
						<Image src={mobile} width={width ? width : '100%'} height={height ? height : '100%'} />
					</Box>
				}
			/>
			<If
				condition={!!tab}
				then={<Box as="img" src={tab} display={{ mobS: 'none', tabS: 'block', deskM: 'none' }} maxWidth="100%" />}
			/>
		</Box>
	);
};

export default ResponsiveImage;
