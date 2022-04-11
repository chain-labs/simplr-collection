import { useEffect } from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import { FEATURES } from './constants';
import Image from 'next/image';
import { featureCardAnimations, featuresAnimations } from './animations';

const FeatureCard = ({ image, title, info, className }) => {
	useEffect(() => {
		featureCardAnimations(className);
	}, []);

	return (
		<Box
			className={className}
			display="flex"
			flexDirection={{ mobS: 'column', tabS: 'row' }}
			alignItems="center"
			p="ml"
			border="1px solid"
			borderColor="gray-10"
			borderRadius="8px"
			maxWidth={{ mobS: '80vw', tabS: '54rem' }}
			width={{ mobS: '32rem', tabS: 'unset' }}
			mb="ml"
		>
			{/* <ResponsiveImage
				mobile={`/static/images/mobile/${image}`}
				tab={`/static/images/tab/${image}`}
				desk={`/static/images/desktop/${image}`}
			/> */}
			<Box minWidth="10.2rem">
				<Image src={image} objectFit="cover" />
			</Box>
			<Box ml={{ mobS: '0', tabS: 'mxxl' }}>
				<Text as="h3" color="simply-blue" display={{ mobS: 'none', tabS: 'block' }}>
					{title}
				</Text>
				<Text as="h3" color="simply-blue" display={{ mobS: 'block', tabS: 'none' }} textAlign="center">
					{title}
				</Text>
				<Text as="b2" mt="ms" textAlign={{ mobS: 'center', tabS: 'left' }}>
					{info}
				</Text>
			</Box>
		</Box>
	);
};

const Features = () => {
	useEffect(() => {
		featuresAnimations();
	}, []);
	return (
		<Box
			pt={{ mobS: 'wm', tabS: '5rem' }}
			width={{ mobS: '90vw', tabS: '55rem', deskM: '110rem' }}
			mx="auto"
			column
			center
		>
			<Box id="feature" />
			<Text className="feat-title" as="h2" color="simply-blue" display={{ mobS: 'none', deskM: 'block' }}>
				Game Changing Features
			</Text>
			<Text
				className="feat-title"
				as="h2"
				fontSize="2.4rem"
				color="simply-blue"
				display={{ mobS: 'block', deskM: 'none' }}
				textAlign="center"
			>
				Our Game Changing Features
			</Text>
			<Text
				className="feat-info"
				as="b3"
				textAlign="center"
				maxWidth="50rem"
				mt="ms"
				display={{ mobS: 'none', tabS: 'block' }}
			>
				For your smart contract, you can select from a variety of modules. It’s as easy as plugging and playing.
			</Text>
			<Text
				className="feat-info"
				as="h4"
				textAlign="center"
				maxWidth="75vw"
				mt="ms"
				display={{ mobS: 'block', tabS: 'none' }}
			>
				For your smart contract, you can select from a variety of modules. It’s as easy as plugging and playing.
			</Text>
			<Box
				mt={{ mobS: 'mxxxl', tabS: '7.4rem', deskM: 'wm' }}
				width="100%"
				display="flex"
				flexDirection={{ mobS: 'column', tabS: 'row' }}
				justifyContent="space-between"
				flexWrap="wrap"
				alignItems="center"
			>
				{FEATURES.map(({ image, title, info }, idx) => (
					<FeatureCard key={`${idx}-feature`} className={`feat-card-${idx}`} {...{ image, title, info }} />
				))}
			</Box>
		</Box>
	);
};

export default Features;
