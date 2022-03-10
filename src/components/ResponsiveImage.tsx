import Box from './Box';
import If from './If';

interface Props {
	mobile?: string;
	tab?: string;
	desk?: string;
	className?: string;
}

const ResponsiveImage = ({ mobile, tab, desk, className }: Props) => {
	return (
		<Box className={className}>
			<If condition={!!desk} then={<Box as="img" src={desk} display={{ mobS: 'none', deskM: 'block' }} />} />
			<If
				condition={!!mobile}
				then={<Box as="img" src={mobile} display={{ mobS: 'block', tabS: 'none', deskM: 'none' }} />}
			/>
			<If
				condition={!!tab}
				then={<Box as="img" src={tab} display={{ mobS: 'none', tabS: 'block', deskM: 'none' }} />}
			/>
		</Box>
	);
};

export default ResponsiveImage;
