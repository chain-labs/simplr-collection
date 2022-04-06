import Box from 'src/components/Box';
import ResponsiveText from 'src/components/ResponsiveText';
import Text from 'src/components/Text';
import { SYSTEM_LIST } from './constants';

const SystemCard = ({ title, text, id }) => {
	return (
		<Box
			py="mm"
			px="mxl"
			border="1px solid #aac6fc"
			borderRadius="12px"
			width={{ mobS: '26rem', tabS: '34rem' }}
			minHeight="11rem"
			fontWeight={{ mobS: 'bold', tabS: 'semi-bold' }}
			mb={{ mobS: 'mm', tabS: 'mxl', deskM: 'mxxxl' }}
			mr={id === 0 || id === 1 || id === 3 ? { mobS: '0', deskM: 'wxs' } : '0'}
			ml={id % 2 === 1 ? { mobS: '0', tabS: 'mxl', deskM: '0' } : '0'}
		>
			<Text as="h4" color="simply-blue">
				{title}
			</Text>
			<ResponsiveText mob="b2" tab="b1" desk="b1" text={text} mt="mxs" />
		</Box>
	);
};

const System = () => {
	return (
		<Box
			pt={{ mobS: 'mxxxl', tabS: 'wxxs', deskM: 'wl' }}
			mx="auto"
			maxWidth="110rem"
			column
			alignItems="center"
			pb="wxs"
		>
			<Box mt={{ mobS: '0', tabS: '0', deskM: 'wxs' }} maxWidth={{ mobS: '38rem', tabS: '43rem', deskM: '100%' }}>
				<ResponsiveText
					maxWidth={{ mobS: '28rem', tabS: '100rem', deskM: '66rem' }}
					mob="h3"
					tab="h2"
					desk="h1"
					text="Creating a system that works for you. Together."
					color="simply-blue"
					textAlign="center"
				/>
			</Box>
			<Text as="b3" maxWidth={{ mobS: '28rem', tabS: '70rem' }} textAlign="center" mt="mm">
				When you launch your collection using Simplr Collection, you join the Simplr Ecosystem where your project will
				have the opportunity to interact with other projects and their unique communities while also gaining exposure.
			</Text>
			<Box
				mt={{ mobS: 'mxxxl', tabS: '7rem' }}
				order={3}
				display="flex"
				flexDirection={{ mobS: 'column', tabS: 'row' }}
				flexWrap="wrap"
				justifyContent={{ mobS: 'flex-start', tabS: 'center' }}
				alignItems="center"
				width={{ mobS: '90%', tabS: '71rem', deskM: '105%' }}
			>
				{SYSTEM_LIST.map(({ title, text }, index) => (
					<SystemCard key={index} id={index} title={title} text={text} />
				))}
			</Box>
		</Box>
	);
};

export default System;
