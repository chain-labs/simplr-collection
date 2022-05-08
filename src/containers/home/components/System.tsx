import Box from 'src/components/Box';
import ResponsiveImage from 'src/components/ResponsiveImage';
import ResponsiveText from 'src/components/ResponsiveText';
import Text from 'src/components/Text';
import BottomToUp from './BottomToUp';
import { SYSTEM_LIST } from './constants';
import FadeInWhenVisible from './FadeInWhenVisible';

const SystemCard = ({ title, text, id }) => {
	return (
		<Box
			py="mm"
			px="mxl"
			border="1px solid #aac6fc"
			borderRadius="12px"
			width={{ mobS: '26rem', tabS: '34rem' }}
			minHeight="11rem"
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
		<Box pt="wxxs" mx="auto" maxWidth="110rem" column alignItems="center">
			<BottomToUp>
				<Box
					order={{ mobS: 1, tabS: 1, deskM: 2 }}
					mt={{ mobS: '0', tabS: '0', deskM: 'wxs' }}
					mb={{ mobS: 'mxxxl', tabS: 'mxxxl', deskM: '0' }}
					maxWidth={{ mobS: '38rem', tabS: '43rem', deskM: '100%' }}
				>
					<ResponsiveText
						mob="h3"
						tab="h2"
						desk="h2"
						text="Creating a system that works for you. Together."
						color="simply-blue"
						textAlign="center"
					/>
				</Box>
			</BottomToUp>

			<Box order={{ mobS: 2, tabS: 2, deskM: 1 }}>
				<ResponsiveImage
					mobile="/static/images/mobile/ecosystem.png"
					tab="/static/images/tab/ecosystem.png"
					desk="/static/images/desktop/ecosystem.png"
				/>
			</Box>
			<FadeInWhenVisible>
				<Box
					mt="wxs"
					order={3}
					display="flex"
					flexDirection={{ mobS: 'column', tabS: 'row' }}
					flexWrap="wrap"
					justifyContent={{ mobS: 'flex-start', deskM: 'center' }}
					alignItems="center"
					width={{ mobS: '90%', tabS: '71rem', deskM: '105%' }}
				>
					{SYSTEM_LIST.map(({ title, text }, index) => (
						<SystemCard key={index} id={index} title={title} text={text} />
					))}
				</Box>
			</FadeInWhenVisible>
		</Box>
	);
};

export default System;
