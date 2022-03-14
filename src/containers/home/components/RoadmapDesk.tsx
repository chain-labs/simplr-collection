import React from 'react';
import Box from 'src/components/Box';
import RoadmapComp from './RoadmapComp';

const RoadmapDesk = () => {
	return (
		<Box id="pro" display={{ mobS: 'none', deskM: 'grid' }}>
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

			<Box className="box_3">
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
			<Box className="box_4">
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
			<Box className="box_5">
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
			<Box className="box_6">
				<RoadmapComp
					year="Quarter 2 - 2023"
					myText={[
						{ text: 'Integrate Simplr Collection into the whole Simplr Ecosystem', isDone: false },
						{ text: 'Bring the power of AI to the NFT Collection generator', isDone: false },
						{ text: 'Launch Simplr Collection on Solana', isDone: false },
					]}
				/>
			</Box>
			<Box className="box_7">
				<RoadmapComp
					year="Quarter 3 - 2023"
					myText={[
						{ text: 'Research on cross chain bridge to move tokens', isDone: false },
						{ text: 'Launch on other EVM chains: Celo', isDone: false },
					]}
				/>
			</Box>
			<Box className="box_8">
				<RoadmapComp
					year="Quarter 4 - 2023"
					myText={[{ text: 'Launch MVP cross chain bridge between Ethereum and Polygon', isDone: false }]}
				/>
			</Box>
		</Box>
	);
};

export default RoadmapDesk;
