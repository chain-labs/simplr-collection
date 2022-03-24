import { WarningCircle } from 'phosphor-react';
import Box from 'src/components/Box';
import ButtonComp from 'src/components/Button';
import ResponsiveText from 'src/components/ResponsiveText';
import Text from 'src/components/Text';
import theme from 'src/styleguide/theme';

const CollectionTypes = () => {
	return (
		<Box
			mt={{ mobS: 'wm', tabS: '9rem', deskM: 'wxl' }}
			maxWidth={{ deskM: '91rem', tabS: '95%', mobS: '90%' }}
			mx="auto"
			pb={{ mobS: 'ms', tabS: 'wl', deskM: 'ws' }}
		>
			<ResponsiveText mob="h3" tab="h2" desk="h1" text="Collection Types" color="simply-blue" textAlign="center" />
			<Text
				as="b3"
				textAlign="center"
				maxWidth={{ mobS: '27rem', tabS: 'unset' }}
				mx="auto"
				mt={{ mobS: 'ms', tabS: 'mm' }}
				mb={{ mobS: '3.6rem', tabS: 'wm', deskM: 'wxs' }}
			>
				Choose from various innovative NFT standards and more to come.
			</Text>
			<Box
				display="flex"
				flexDirection={{ mobS: 'column', tabS: 'row' }}
				justifyContent="space-between"
				alignItems="center"
				mb={{ mobS: 'mxxxl', tabS: 'wxs' }}
			>
				<CollectionCard
					type="1"
					headline="ERC-721"
					text="Most widely used and trusted NFT Standard."
					playground="https://playground.simplrcollection.com"
					read="https://academy.binance.com/en/glossary/erc-721"
				/>
				<Box ml={{ mobS: '0', tabS: 'mxxxl', deskM: 'wxxs' }} mb={{ mobS: 'mxxl', tabS: '0' }} height="100%" />
				<CollectionCard
					type="2"
					headline="ERC-721A"
					text="Latest and most optimal for large NFT collections."
					playground="https://erc721a.simplrcollection.com"
					read="https://www.azuki.com/erc721a"
				/>
			</Box>
			<Box
				row
				justifyContent="center"
				alignItems={{ mobS: 'flex-start', tabS: 'center' }}
				maxWidth={{ mobS: '24rem', tabS: 'unset' }}
				mx="auto"
			>
				<WarningCircle color={theme.colors['simply-blue']} size="24" weight="fill" />
				<ResponsiveText
					tab="b1"
					desk="b1"
					text="Confused about which collection type suits your collection the best? Compare them "
					ml="mxs"
				/>
				<Box as="a" href="https://blog.alchemy.com/blog/erc721-vs-erc721a-batch-minting-nfts" target="_blank">
					<ResponsiveText tab="b1" desk="b1" text="here." ml="mxxs" color="simply-blue" textDecoration="underline" />
				</Box>
				<Box display={{ mobS: 'block', tabS: 'none' }} ml="ms">
					<Text as="c1">Confused about which collection type suits your collection the best?</Text>
					<Text as="c1" color="simply-blue" row>
						Compare them{' '}
						<Box as="a" href="https://blog.alchemy.com/blog/erc721-vs-erc721a-batch-minting-nfts" target="_blank">
							<Text as="c1" color="simply-blue" ml="mxxs" textDecoration="underline">
								here.
							</Text>
						</Box>
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default CollectionTypes;

const CollectionCard = ({ type, headline, text, playground, read }) => {
	return (
		<Box
			border={`1px solid ${theme.colors['blue-10']}`}
			borderRadius="14px"
			px={{ mobS: 'mm', tabS: '5rem', deskM: '8.55rem' }}
			py={{ mobS: 'mm', tabS: '5.2rem', deskM: '7.85rem' }}
			flex={1}
			maxWidth={{ mobS: '20rem', tabS: 'unset' }}
		>
			<Text
				as="h4"
				fontFamily={{ mobS: 'OpenSauceOneRegular', tabS: 'Switzer' }}
				color="simply-blue"
				textAlign="center"
				mb={{ tabS: 'ml', deskM: 'mxxxl' }}
			>
				{`Collection Type ${type}`}
			</Text>
			<ResponsiveText mob="h1" tab="h2" desk="headline" color="simply-blue" text={headline} textAlign="center" />
			<Text as="b3" textAlign="center" mt={{ tabS: 'mxxxl', deskM: 'ms' }} mb="mxxxl">
				{text}
			</Text>

			<Box width="100%">
				<Box as="a" href={playground} target="_blank">
					<ButtonComp bg="primary" width="100%" mb="1.8rem" py={{ mobS: 'ms', tabS: '1.35rem' }}>
						<ResponsiveText desk="h5" tab="h5" mob="h4" text="Try it on Playground" />
					</ButtonComp>
				</Box>
				<Box as="a" href={read} target="_blank">
					<ButtonComp bg="tertiary" width="100%" py={{ mobS: 'ms', tabS: '1.35rem' }}>
						<ResponsiveText desk="h5" tab="h5" mob="h4" text="Read More" />
					</ButtonComp>
				</Box>
			</Box>
		</Box>
	);
};
