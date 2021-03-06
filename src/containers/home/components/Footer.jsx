import React from 'react';
import Box from 'src/components/Box';
import { InstagramFill, DiscordFill, TwitterFill } from 'akar-icons';
import Text from 'src/components/Text';
import theme from 'src/styleguide/theme';
import scrollIntoView from 'src/utils/scrollIntoView';
import { DISCORD_INVITE, INSTAGRAM_HANDLE, TWITTER_HANDLE } from './constants';
import logoFooter from 'public/static/images/desktop/logo_footer.png';
import Image from 'next/image';

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
					<Image src={logoFooter} objectFit="cover" alt="logo-image-footer" />
				</Box>
				<Box display="flex" flexDirection={{ mobS: 'column', tabS: 'row' }} mt={{ mobS: 'mxl', tabS: '0' }}>
					<Text
						as="h6"
						color="simply-blue"
						mr="mxxxl"
						mb={{ mobS: 'mm', tabS: '0' }}
						onClick={() => scrollIntoView('hero-subtext')}
						cursor="pointer"
					>
						Home
					</Text>
					<Text
						as="h6"
						color="simply-blue"
						mr="mxxxl"
						mb={{ mobS: 'mm', tabS: '0' }}
						onClick={() => scrollIntoView('feature')}
						cursor="pointer"
					>
						Features
					</Text>
					<Text
						as="h6"
						color="simply-blue"
						mr="mxxxl"
						mb={{ mobS: 'mm', tabS: '0' }}
						onClick={() => scrollIntoView('how')}
						cursor="pointer"
					>
						How it Works
					</Text>
					<Text
						as="h6"
						color="simply-blue"
						mr="mxxxl"
						mb={{ mobS: 'mm', tabS: '0' }}
						onClick={() => scrollIntoView('rm')}
						cursor="pointer"
					>
						Roadmap
					</Text>
					{/* <Text as="h6" color="simply-blue">
						Early Access
					</Text> */}
				</Box>
				<Box
					display="flex"
					flexDirection={{ mobS: 'column', tabS: 'row' }}
					alignItems={{ mobS: 'flex-start', tabS: 'center' }}
					mt={{ mobS: 'mxl', tabS: '0' }}
				>
					<Box
						row
						center
						mr="mm"
						mb={{ mobS: 'ms', tabS: '0' }}
						cursor="pointer"
						as="a"
						href={INSTAGRAM_HANDLE}
						target="_blank"
					>
						<InstagramFill strokeWidth={2} size={18} color={theme.colors['simply-blue']} />
						<Text as="b1" color="simply-blue" ml="mxs" display={{ mobS: 'block', tabS: 'none', deskM: 'block' }}>
							Instagram
						</Text>
					</Box>
					<Box
						as="a"
						href={DISCORD_INVITE}
						target="_blank"
						row
						center
						mr="mm"
						mb={{ mobS: 'ms', tabS: '0' }}
						cursor="pointer"
					>
						<DiscordFill strokeWidth={2} size={18} color={theme.colors['simply-blue']} />
						<Text as="b1" color="simply-blue" ml="mxs" display={{ mobS: 'block', tabS: 'none', deskM: 'block' }}>
							Discord
						</Text>
					</Box>
					<Box as="a" href={TWITTER_HANDLE} target="_blank" row center cursor="pointer">
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
				color="simply-blue"
			>
				<Text as="h6">?? 2022 Simplr. All right reserved.</Text>
				<Text as="h6">Terms and Condition</Text>
			</Box>
		</Box>
	);
};

export default Footer;
