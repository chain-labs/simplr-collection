import Link from 'next/link';
import { useEffect, useState } from 'react';
import theme from 'src/styleguide/theme';
import Box from './Box';
import ButtonComp from './Button';
import ResponsiveImage from './ResponsiveImage';
import Text from './Text';
import { gsap } from 'gsap';
import { ArrowRight, DiscordLogo, InstagramLogo, TwitterLogo, X } from 'phosphor-react';
import scrollIntoView from 'src/utils/scrollIntoView';
import ResponsiveText from './ResponsiveText';

const NavLink = ({ href, text, as, closeDrawer }) => {
	return (
		<Link href={href} as={as}>
			<Box borderBottom={`1px solid ${theme.colors['blue-10']}`} py="ms" pl="mxxxl" onClick={() => closeDrawer()}>
				<Box between width="80%">
					<Text as="h6" color="simply-blue">
						{text}
					</Text>
					<ArrowRight size="20" color={theme.colors['simply-blue']} />
				</Box>
			</Box>
		</Link>
	);
};

const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const closeDrawer = () => {
		setDrawerOpen(false);
	};

	useEffect(() => {
		if (drawerOpen) {
			gsap.fromTo(
				'#drawer',
				{ x: '-100%', y: 0, autoAlpha: 0 },
				{ autoAlpha: 1, x: '0%', y: 0, display: 'block', duration: 0.5 }
			);
			gsap.to('#drawer', { duration: 0.5, delay: 0.5, background: `${theme.colors['simply-black']}80` });
		} else {
			gsap.to('#drawer', { background: 'transparent', duration: 0.1 });
			gsap.to('#drawer', { x: '-100%', display: 'none', duration: 0.5 });
		}
	}, [drawerOpen]);
	return (
		<Box
			boxShadow={{ mobS: theme.shadows['shadow-100'], tabS: '0 0 0 #fff', deskM: theme.shadows['shadow-100'] }}
			py="mm"
			position="fixed"
			zIndex={20}
			width="100%"
			bg="simply-white"
		>
			<Box
				width={{ mobS: '100vw', tabS: '100vw', deskM: '125rem' }}
				mx="auto"
				px={{ mobS: 'mm', tabS: 'wxxs', deskM: '0' }}
				row
				alignItems="center"
				justifyContent="space-between"
			>
				<Box id="drawer" position="fixed" left="0" top="0" width="100vw" height="100vh" display="none">
					<Box
						position="fixed"
						left="0"
						top="0"
						bg="simply-white"
						height="100vh"
						width="90vw"
						zIndex={100}
						column
						justifyContent="space-between"
					>
						<Box>
							<Box width="100%" py="ml" px="mxl" row between>
								<Box as="img" src="/static/images/mobile/logo.png" />
								<Box onClick={() => closeDrawer()}>
									<X size="20" color={theme.colors['simply-blue']} />
								</Box>
							</Box>
							<Box borderTop={`1px solid ${theme.colors['blue-10']}`}>
								<NavLink href="#features" as="/" text="Features" closeDrawer={closeDrawer} />
								<NavLink href="#how" as="/" text="How it Works" closeDrawer={closeDrawer} />
								<NavLink href="#roadmap" as="/" text="Roadmap" closeDrawer={closeDrawer} />
							</Box>
						</Box>
						<Box>
							<Box pl="mxxxl" pb="mxl" borderBottom={`1px solid ${theme.colors['blue-10']}`}>
								<Box row alignItems="center">
									<InstagramLogo size="20" color={theme.colors['simply-blue']} />
									<Text as="b1" color="simply-blue" ml="mxs">
										Follow us on Instagram
									</Text>
								</Box>
								<Box row alignItems="center" mt="ms">
									<DiscordLogo weight="fill" size="20" color={theme.colors['simply-blue']} />
									<Text as="b1" color="simply-blue" ml="mxs">
										Join our Discord
									</Text>
								</Box>
								<Box row alignItems="center" mt="ms">
									<TwitterLogo weight="fill" size="20" color={theme.colors['simply-blue']} />
									<Text as="b1" color="simply-blue" ml="mxs">
										Follow us on Twitter
									</Text>
								</Box>
							</Box>
							<Box pl="mxxxl" py="ml">
								<Text as="c1" color={theme.colors['simply-blue']}>
									© 2022 Simplr. All right reserved.
								</Text>
								<Text as="c1" color={theme.colors['simply-blue']}>
									Terms and Conditions
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box width="2.2rem" display={{ mobS: 'block', tabS: 'none' }} onClick={() => setDrawerOpen(true)}>
					<Box bg="simply-blue" width="100%" height="0.3rem" />
					<Box bg="simply-blue" width="100%" height="0.3rem" my="mxxs" />
					<Box bg="simply-blue" width="100%" height="0.3rem" />
				</Box>
				<ResponsiveImage tab="/static/images/tab/logo.png" desk="/static/images/desktop/logo.png" />
				<Box row alignItems="center">
					<Text
						as="h5"
						cursor="pointer"
						color={{ tabS: 'simply-gray', deskM: 'simply-blue' }}
						display={{ mobS: 'none', tabS: 'block' }}
						px="ms"
						mr="mxxl"
						onClick={() => scrollIntoView('features')}
					>
						Features
					</Text>
					<Text
						as="h5"
						color={{ tabS: 'simply-gray', deskM: 'simply-blue' }}
						display={{ mobS: 'none', tabS: 'block' }}
						px="ms"
						mr="mxxl"
						cursor="pointer"
						onClick={() => scrollIntoView('how')}
					>
						How it Works
					</Text>
					<Link href="#roadmap" as="/">
						<Text
							as="h5"
							color={{ tabS: 'simply-gray', deskM: 'simply-blue' }}
							display={{ mobS: 'none', tabS: 'block' }}
							px="ms"
							mr="mxxl"
							cursor="pointer"
							onClick={() => scrollIntoView('roadmap')}
						>
							Roadmap
						</Text>
					</Link>
					<ButtonComp bg="primary" height="48px" px="mxxxl">
						<ResponsiveText mob="h4" tab="h6" desk="h5" text="Early Access" />
					</ButtonComp>
				</Box>
			</Box>
		</Box>
	);
};

export default Navbar;
