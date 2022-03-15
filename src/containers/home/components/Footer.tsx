import React from 'react';
import Box from 'src/components/Box';
import ResponsiveImage from 'src/components/ResponsiveImage';
import { InstagramFill, DiscordFill, TwitterFill } from 'akar-icons';
import Text from 'src/components/Text';
import theme from 'src/styleguide/theme';

const Footer = () => {
	return (
		<Box width={{ mobs: '90%', tabS: '90%', deskM: '116rem' }} mx="auto" pt="ws" pb="wm">
			<Box
				display="flex"
				flexDirection={{ mobS: 'column', tabS: 'row' }}
				borderBottom={{ mobS: 'none', tabS: `1px solid ${theme.colors['gray-00']}` }}
				alignItems={{ mobS: 'flex-start', tabS: 'center' }}
				justifyContent={{ mobS: 'flex-start', tabS: 'space-between' }}
				pb="mxl"
			>
				<Box>
					<ResponsiveImage
						mobile="/static/images/mobile/logo_footer.png"
						desk="/static/images/desktop/logo_footer.png"
						tab="/static/images/tab/logo_footer.png"
					/>
				</Box>
				<Box display="flex" flexDirection={{ mobS: 'column', tabS: 'row' }} mt={{ mobS: 'mxl', tabS: '0' }}>
					<Text as="h6" color="simply-blue" mr="mxxxl" mb={{ mobS: 'mm', tabS: '0' }}>
						Home
					</Text>
					<Text as="h6" color="simply-blue" mr="mxxxl" mb={{ mobS: 'mm', tabS: '0' }}>
						Features
					</Text>
					<Text as="h6" color="simply-blue" mr="mxxxl" mb={{ mobS: 'mm', tabS: '0' }}>
						How it Works
					</Text>
					<Text as="h6" color="simply-blue" mr="mxxxl" mb={{ mobS: 'mm', tabS: '0' }}>
						Roadmap
					</Text>
					<Text as="h6" color="simply-blue">
						Early Access
					</Text>
				</Box>
				<Box
					display="flex"
					flexDirection={{ mobS: 'column', tabS: 'row' }}
					alignItems={{ mobS: 'flex-start', tabS: 'center' }}
					mt={{ mobS: 'mxl', tabS: '0' }}
				>
					<Box row center mr="mm" mb={{ mobS: 'ms', tabS: '0' }}>
						<InstagramFill strokeWidth={2} size={18} color={theme.colors['simply-blue']} />
						<Text as="b1" color="simply-blue" ml="mxs" display={{ mobS: 'block', tabS: 'none', deskM: 'block' }}>
							Instagram
						</Text>
					</Box>
					<Box row center mr="mm" mb={{ mobS: 'ms', tabS: '0' }}>
						<DiscordFill strokeWidth={2} size={18} color={theme.colors['simply-blue']} />
						<Text as="b1" color="simply-blue" ml="mxs" display={{ mobS: 'block', tabS: 'none', deskM: 'block' }}>
							Discord
						</Text>
					</Box>
					<Box row center>
						<TwitterFill strokeWidth={2} size={18} color={theme.colors['simply-blue']} />
						<Text as="b1" color="simply-blue" ml="mxs" display={{ mobS: 'block', tabS: 'none', deskM: 'block' }}>
							Twitter
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				flexDirection={{ mobS: 'column', tabS: 'row' }}
				justifyContent="space-between"
				mt="mxl"
				// @ts-expect-error color overload props
				color={{ mobS: 'simply-blue', deskM: 'simply-black' }}
			>
				<Text as="h6">© 2022 Simplr. All right reserved.</Text>
				<Text as="h6">Terms and Condition</Text>
			</Box>
		</Box>
	);
};

export default Footer;
