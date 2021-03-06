import Box from 'src/components/Box';
import ButtonComp from 'src/components/Button';
import Text from 'src/components/Text';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ResponsiveText from 'src/components/ResponsiveText';
import { WAITLIST_FORM_URL } from './constants';
import Image from 'next/image';
import { useSpring, animated as a } from 'react-spring';
import { motion, useAnimation } from 'framer-motion';

import heroImage from 'public/static/images/desktop/hero_image.png';
import infoImage from 'public/static/images/desktop/about.png';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import FadeInWhenVisible from './FadeInWhenVisible';
import BottomToUp from './BottomToUp';

// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			control.start('visible');
		} else {
			control.start('hidden');
		}
	}, [control, inView]);
	return (
		<Box display="flex" justifyContent="center" width="100vw">
			<Box
				maxWidth={{ mobS: '100vw', tabS: '84rem', deskM: '117rem' }}
				mx="auto"
				pt={{ mobS: 'wxl', tabS: '17rem', deskM: '19rem' }}
			>
				<Box column center>
					<Box column center>
						<BottomToUp delay={0}>
							<ResponsiveText
								mob="h2"
								tab="h1"
								desk="h1"
								text="Simplified platform for creators to launch NFT collections quickly and economically."
								color="simply-blue"
								textAlign="center"
								maxWidth={{ mobS: '27rem', tabS: '50rem', deskM: '59rem' }}
								id="hero-headline"
								lineHeight="120%"
								mb="2%"
							/>
						</BottomToUp>
						<BottomToUp delay={0.2}>
							<Text as="b2" maxWidth={{ mobS: '25rem', tabS: '53rem' }} textAlign="center" id="hero-subtext">
								A simple, easy to use, no-code platform to create NFT smart contracts and launch your NFT projects
								without any hassle.
							</Text>
						</BottomToUp>
					</Box>
					<Box
						column
						flexDirection={{ mobS: 'column-reverse', tabS: 'column' }}
						alignItems="center"
						mt={{ mobS: 'ml' }}
					>
						<BottomToUp delay={0.4}>
							<ButtonComp
								bg="primary"
								px="wxs"
								height="48px"
								width={{ mobS: '85%', tabS: 'unset' }}
								mb={{ mobS: 'mm', tabS: 'ws' }}
								className="hero-cta-l"
							>
								<Box as="a" href={WAITLIST_FORM_URL} target="_blank">
									<Text as="h4">Enter Waitlist</Text>
								</Box>
							</ButtonComp>
						</BottomToUp>
						<FadeInWhenVisible delay={0.5}>
							<Box center width={{ mobS: '100vw', tabS: '84rem', deskM: '117rem' }} position="relative">
								<Image src={heroImage} objectFit="cover" className="hero-image" alt="hero-image" />
							</Box>
						</FadeInWhenVisible>
					</Box>
				</Box>
				<Box column center mt={{ mobS: 'wm', tabS: 'wxs', deskM: 'wxl' }}>
					<BottomToUp delay={0.3}>
						<ResponsiveText
							tab="h2"
							desk="h1"
							color="simply-blue"
							text="What is Simplr Collection solving?"
							textAlign="center"
							className="info-text"
						/>
					</BottomToUp>
					<FadeInWhenVisible delay={0.5}>
						<Box
							display="flex"
							flexDirection={{ mobS: 'column-reverse', tabS: 'row' }}
							justifyContent="space-between"
							mt={{ tabS: 'mxxxl', deskM: 'wxs' }}
							px={{ mobS: '0', tabS: 'mxxxl' }}
							alignItems={{ mobS: 'center', tabS: 'flex-start', deskM: 'center' }}
						>
							<Box
								className="info-text"
								mr={{ mobS: '0', tabS: 'mxxl' }}
								maxWidth={{ mobS: '85vw', tabS: '50%', deskM: '54rem' }}
								mt={{ mobS: 'ms', tabS: '0' }}
							>
								<Text as="b2">
									While we love the world of NFTs, we know there is a lot about it that could do with a few tweaks. At
									Simplr, we believe that the ultimate form of sophistication is simplicity.
								</Text>

								<Text as="b2" mt="ml">
									That&apos;s why we&apos;ve launched a simple to use, no-code platform to create NFT smart contracts so
									that you can launch your NFTs without the hassle. Let us handle the blockchain and NFT complexities so
									that you can focus your energies on growing your collection and brand.
								</Text>
							</Box>
							<ResponsiveText
								mob="h3"
								text="What is Simplr Collection solving?"
								color="simply-blue"
								textAlign="center"
								maxWidth={{ mobS: '24rem', tabS: 'unset' }}
								mt="ml"
							/>
							<Box center>
								<Image className="info-image" src={infoImage} objectFit="cover" alt="info-image" />
							</Box>
						</Box>
					</FadeInWhenVisible>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
