import { CaretDown, CaretUp } from 'phosphor-react';
import React, { useState } from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import RoadmapComp from './RoadmapComp';

const RoadmapMob = () => {
	const [showMore, setShowMore] = useState(false);

	return (
		<Box className="flexContent" display={{ deskM: 'none' }} mx={{ mobS: '33px', tabS: '247px', deskM: '0' }}>
			<Box className="box_1">
				<RoadmapComp
					year="Quarter 1 - 2022"
					myText={[
						{ text: 'Launch simplr collection landing page', isDone: true },
						{ text: 'Launch simplr collection early adopter pass', isDone: false },
						{ text: 'Launch simplr collection beta on polygon and ethereum', isDone: false },
					]}
				/>
			</Box>
			<Box className="box_2" mt={{ mobS: 'mxl', deskM: '0' }}>
				<RoadmapComp
					year="Quarter 2 - 2022 "
					myText={[
						{ text: 'Simplr Collection Contracts goes for thorough Auditing', isDone: false },
						{ text: 'Adding Draft feature', isDone: false },
						{ text: 'Registration of affiliates begin', isDone: false },
						{ text: 'Creating marketplace of primary sales', isDone: false },
					]}
				/>
			</Box>

			<Box className="box_3" mt={{ mobS: 'mxl', deskM: '0' }}>
				<RoadmapComp
					year="Quarter 3 - 2022"
					myText={[
						{ text: 'Adding in-depth analytics and data mining to creator dashboard', isDone: false },
						{ text: 'Bulk minting from various projects', isDone: false },
						{ text: 'Launch NFT collection generator', isDone: false },
						{ text: 'Creating minting pages for collections with analytics for collectors', isDone: false },
						{ text: 'Launch New Collection Types: Passes', isDone: false },
					]}
				/>
			</Box>
			<Box
				center
				flexDirection="column"
				display={showMore === false ? { mobS: 'flex', deskM: 'none' } : 'none'}
				onClick={() => setShowMore(!showMore)}
			>
				<Text as="c1" color="simply-blue">
					VIEW MORE
				</Text>
				<Box>
					<CaretDown size={32} color="#4743C5" />
				</Box>
			</Box>
			<Box display={showMore === true ? 'flex' : 'none'} flexDirection="column">
				<Box className="box_4" mt={{ mobS: 'mxl', deskM: '0' }}>
					<RoadmapComp
						year="Quarter 4 - 2022"
						myText={[
							{
								text: 'Affiliates can select from various affiliate enabled collections to market trustless',
								isDone: false,
							},
							{ text: 'Partner with NFT listing sites to support easy listing', isDone: false },
							{ text: 'Partner with Secret Someone to launch FanMail', isDone: false },
							{ text: 'Bring the power of AI to the NFT Collection generator', isDone: false },
							{ text: 'Launch New Collection Types: Non-transferable NFTs', isDone: false },
						]}
					/>
				</Box>
				<Box className="box_5" mt={{ mobS: 'mxl', deskM: '0' }}>
					<RoadmapComp
						year="Quarter 1 - 2023"
						myText={[
							{ text: 'Develop a portal for creators to collaborate and find team members', isDone: false },
							{ text: 'Add Affiliate analytics to track sales and source', isDone: false },
							{ text: 'Launch Simplr Collection on Solana', isDone: false },
							{ text: 'Launch New Collection Types: Encrypted NFTs & NFT Stores', isDone: false },
						]}
					/>
				</Box>
				<Box className="box_6" mt={{ mobS: 'mxl', deskM: '0' }}>
					<RoadmapComp
						year="Quarter 2 - 2023"
						myText={[
							{ text: 'Integrate Simplr Collection into the whole Simplr Ecosystem', isDone: false },
							{ text: 'Bring the power of AI to the NFT Collection generator', isDone: false },
							{ text: 'Launch Simplr Collection on Solana', isDone: false },
						]}
					/>
				</Box>
				<Box className="box_7" mt={{ mobS: 'mxl', deskM: '0' }}>
					<RoadmapComp
						year="Quarter 3 - 2023"
						myText={[
							{ text: 'Research on cross chain bridge to move tokens', isDone: false },
							{ text: 'Launch on other EVM chains: Celo', isDone: false },
						]}
					/>
				</Box>
				<Box className="box_8" mt={{ mobS: 'mxl', deskM: '0' }}>
					<RoadmapComp
						year="Quarter 4 - 2023"
						myText={[{ text: 'Launch MVP cross chain bridge between Ethereum and Polygon', isDone: false }]}
					/>
				</Box>
				<Box
					center
					flexDirection="column"
					display={showMore === true ? { mobS: 'flex', deskM: 'none' } : 'none'}
					onClick={() => setShowMore(!showMore)}
				>
					<Text as="c1" color="simply-blue">
						VIEW LESS
					</Text>
					<Box>
						<CaretUp size={32} color="#4743C5" />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default RoadmapMob;
