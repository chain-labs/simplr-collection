import { useEffect } from 'react';
import Box from 'src/components/Box';
import ButtonComp from 'src/components/Button';
import ResponsiveImage from 'src/components/ResponsiveImage';
import Text from 'src/components/Text';
import { gsap } from 'gsap';

const Hero = () => {
	useEffect(() => {
		gsap.fromTo('#hero-headline', { autoAlpha: 0, y: '-20%' }, { autoAlpha: 1, y: '0%', duration: 0.9 });
		gsap.fromTo('#hero-subtext', { autoAlpha: 0, y: '-20%' }, { autoAlpha: 1, y: '0%', delay: 0.3, duration: 0.6 });
		gsap.fromTo('.hero-cta-l', { autoAlpha: 0, x: '-5%' }, { autoAlpha: 1, x: '0%', delay: 0.6, duration: 0.3 });
		gsap.fromTo('.hero-cta-r', { autoAlpha: 0, x: '5%' }, { autoAlpha: 1, x: '0%', delay: 0.6, duration: 0.3 });
		gsap.fromTo('.hero-image', { autoAlpha: 0 }, { autoAlpha: 1, delay: 1.2, duration: 0.9 });
	}, []);
	return (
		<Box>
			<Box width={{ mobS: '100vw', tabS: '117rem' }} mx="auto" pt={{ mobS: 'wxl', tabS: '17rem', deskM: '19rem' }}>
				<Box column center>
					<Text
						as="headline"
						color="simply-blue"
						lineHeight="120%"
						maxWidth="84rem"
						textAlign="center"
						mb="mm"
						display={{ mobS: 'none', tabS: 'block' }}
						id="hero-headline"
					>
						Create and manage cost effective NFT Collections
					</Text>
					<Text
						as="h2"
						color="simply-blue"
						maxWidth="27rem"
						textAlign="center"
						mb="mm"
						display={{ mobS: 'block', tabS: 'none' }}
						id="hero-subtext"
					>
						Create and Manage Cost effective
						<br /> NFT Collections
					</Text>
					<Text as="b2" maxWidth="53rem" textAlign="center" id="hero-subtext" display={{ mobS: 'none', tabS: 'block' }}>
						A simple, easy to use, no-code platform to create NFT smart contracts and launch your NFT projects without
						any hassle.
					</Text>
					<Text
						as="b2"
						maxWidth="25rem"
						textAlign="center"
						mb="ml"
						id="hero-subtext"
						display={{ mobS: 'block', tabS: 'none' }}
					>
						Simplr is a simple to use, no-code platform to create NFT smart contracts so that you can launch your NFTs
						without the hassle.
					</Text>
					<Box column flexDirection={{ mobS: 'column-reverse', tabS: 'column' }} alignItems="center">
						<Box
							my="wxs"
							display="flex"
							flexDirection={{ mobS: 'column', tabS: 'row' }}
							width={{ mobS: '90vw', tabS: '46rem' }}
						>
							<ButtonComp
								bg="primary"
								px="wxs"
								height="48px"
								mr="mxl"
								width={{ mobS: '100%', tabS: 'unset' }}
								mb={{ mobS: 'mm', tabS: 'unset' }}
								className="hero-cta-l"
							>
								<Text as="h4">Enter Waitlist</Text>
							</ButtonComp>
							<ButtonComp
								bg="secondary"
								px="wxs"
								height="48px"
								width={{ mobS: '100%', tabS: 'unset' }}
								className="hero-cta-r"
							>
								<Text as="h4">Join Discord</Text>
							</ButtonComp>
						</Box>
						<ResponsiveImage
							className="hero-image"
							mobile="/static/images/mobile/hero_image.png"
							tab="/static/images/tab/hero_image.png"
							desk="/static/images/desktop/hero_image.png"
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
