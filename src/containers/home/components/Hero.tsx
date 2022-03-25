import { useEffect } from 'react';
import Box from 'src/components/Box';
import ButtonComp from 'src/components/Button';
import ResponsiveImage from 'src/components/ResponsiveImage';
import Text from 'src/components/Text';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ResponsiveText from 'src/components/ResponsiveText';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	useEffect(() => {
		gsap.fromTo('#hero-headline', { autoAlpha: 0, y: '-20%' }, { autoAlpha: 1, y: '0%', duration: 0.9 });
		gsap.fromTo('#hero-subtext', { autoAlpha: 0, y: '-20%' }, { autoAlpha: 1, y: '0%', delay: 0.3, duration: 0.6 });
		gsap.fromTo('.hero-cta-l', { autoAlpha: 0, x: '-5%' }, { autoAlpha: 1, x: '0%', delay: 0.6, duration: 0.3 });
		gsap.fromTo('.hero-cta-r', { autoAlpha: 0, x: '5%' }, { autoAlpha: 1, x: '0%', delay: 0.6, duration: 0.3 });
		gsap.fromTo('.hero-image', { autoAlpha: 0 }, { autoAlpha: 1, delay: 1.2, duration: 0.9 });

		gsap.fromTo(
			'.info-image',
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				duration: 1.5,
				scrollTrigger: {
					trigger: '.info-image',
					start: 'top 60%',
					end: '200% 100%',
				},
			}
		);
		gsap.fromTo(
			'.info-text',
			{ autoAlpha: 0, x: '-5%' },
			{
				autoAlpha: 1,
				x: '0%',
				duration: 0.9,
				scrollTrigger: {
					trigger: '.info-image',
					start: 'top 50%',
					end: '200% 100%',
				},
			}
		);
	}, []);
	return (
		<Box display="flex" justifyContent="center" width="100vw">
			<Box
				maxWidth={{ mobS: '100vw', tabS: '84rem', deskM: '117rem' }}
				mx="auto"
				pt={{ mobS: 'wxl', tabS: '17rem', deskM: '19rem' }}
			>
				<Box column center>
					<ResponsiveText
						mob="h2"
						tab="h1"
						desk="h1"
						text="Simplified platform for creators to launch NFT collections quickly and economically."
						color="simply-blue"
						textAlign="center"
						maxWidth={{ mobS: '27rem', tabS: '50rem', deskM: '80rem' }}
						id="hero-headline"
						lineHeight="120%"
						mb="2%"
					/>
					<Text as="b2" maxWidth={{ mobS: '25rem', tabS: '53rem' }} textAlign="center" id="hero-subtext">
						A simple, easy to use, no-code platform to create NFT smart contracts and launch your NFT projects without
						any hassle.
					</Text>
					<Box
						column
						flexDirection={{ mobS: 'column-reverse', tabS: 'column' }}
						alignItems="center"
						mt={{ mobS: 'ml' }}
					>
						<ButtonComp
							bg="primary"
							px="wxs"
							height="48px"
							width={{ mobS: '100%', tabS: 'unset' }}
							mb={{ mobS: 'mm', tabS: 'ws' }}
							className="hero-cta-l"
						>
							<Box
								as="a"
								href={
									'https://docs.google.com/forms/d/e/1FAIpQLSdza0C0H0Yw73LrVZMTTE1zGHz5akBjyiEOegBkkZZOfrYOig/viewform'
								}
								target="_blank"
							>
								<Text as="h4">Enter Waitlist</Text>
							</Box>
						</ButtonComp>
						<ResponsiveImage
							className="hero-image"
							mobile="/static/images/mobile/hero_image.png"
							tab="/static/images/tab/hero_image.png"
							desk="/static/images/desktop/hero_image.png"
						/>
					</Box>
				</Box>
				<Box column center mt={{ mobS: 'wm', tabS: 'wxs', deskM: 'wxl' }}>
					<ResponsiveText
						tab="h2"
						desk="h1"
						color="simply-blue"
						text="What is SImplr Collection solving?"
						textAlign="center"
						className="info-text"
					/>
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
						<ResponsiveImage
							className="info-image"
							mobile="/static/images/mobile/about.png"
							tab="/static/images/tab/about.png"
							desk="/static/images/desktop/about.png"
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
