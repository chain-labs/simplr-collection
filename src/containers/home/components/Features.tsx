import { useEffect, useState } from 'react';
import Box from 'src/components/Box';
import ResponsiveImage from 'src/components/ResponsiveImage';
import Text from 'src/components/Text';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { randomIntFromInterval } from './utils';
import { random } from './utils';
import theme from 'src/styleguide/theme';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
	{
		image: 'presale.png',
		title: 'Pre-Sale',
		info: 'Host an early-bird sale or presale for your collection, whether or not you have a whitelist.',
	},
	{
		image: 'reveal.png',
		title: 'Delayed Reveal',
		info: 'Launch your NFT when it suits you as a part of your strategic debut plan.',
	},
	{
		image: 'airdrop.png',
		title: 'Airdrop',
		info: 'Conduct an Airdrop Giveaway or Airdrop NFTs to your community or to yourselves.',
	},
	{
		image: 'split_payments.png',
		title: 'Split Payments',
		info: '	Splitting the payments collected based on the number of shares each address receives.',
	},
	{
		image: 'affiliate.png',
		title: 'Affiliates',
		info: 'Making your collection available to affiliates so that they can start promoting on your behalf.',
	},
	{
		image: 'royalties.png',
		title: 'Royalties',
		info: 'Collecting royalties from sales made through NFT marketplaces or secondary markets.',
	},
];

const FeatureCard = ({ image, title, info, className }) => {
	useEffect(() => {
		const width = window.visualViewport.width;
		const breakpoint = parseInt(theme.breakpoints.deskM.split('px')[0]);
		const key = parseInt(className[className.length - 1]);
		if (width >= breakpoint) {
			gsap.fromTo(
				`.${className}`,
				{ autoAlpha: 0 },
				{
					autoAlpha: 1,
					duration: 1,
					delay: 0.3 * random[key],
					scrollTrigger: {
						trigger: '.feat-title',
						start: `top 20%`,
					},
				}
			);
		} else {
			gsap.fromTo(
				`.${className}`,
				{ autoAlpha: 0 },
				{
					autoAlpha: 1,
					duration: 1,
					scrollTrigger: {
						trigger: '.feat-title',
						start: `top 20%`,
					},
				}
			);
		}
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
			<ResponsiveImage
				mobile={`/static/images/mobile/${image}`}
				tab={`/static/images/tab/${image}`}
				desk={`/static/images/desktop/${image}`}
			/>
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
		gsap.fromTo(
			'.feat-title',
			{ y: '-10%', autoAlpha: '0' },
			{
				y: '0%',
				autoAlpha: '1',
				duration: 1,
				scrollTrigger: {
					trigger: '.feat-title',
					start: 'top 50%',
				},
			}
		);
		gsap.fromTo(
			'.feat-info',
			{ y: '-10%', autoAlpha: '0' },
			{
				y: '0%',
				autoAlpha: '1',
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: '.feat-title',
					start: 'top 50%',
				},
			}
		);
		gsap.fromTo(
			'.feat-info',
			{ y: '-10%', autoAlpha: '0' },
			{
				y: '0%',
				autoAlpha: '1',
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: '.feat-title',
					start: 'top 50%',
				},
			}
		);
	}, []);

	return (
		<Box mt="mxxxl" pt="wxs" width={{ mobS: '90vw', tabS: '55rem', deskM: '110rem' }} mx="auto" column center>
			<Text className="feat-title" as="h2" color="simply-blue" display={{ mobS: 'none', deskM: 'block' }} id="features">
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
				mt="7.4rem"
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
