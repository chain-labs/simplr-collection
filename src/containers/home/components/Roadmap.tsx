import { Check } from 'phosphor-react';
import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import RoadmapComp from './RoadmapComp';

const Roadmap = () => {
	return (
		<Box pb="wxxl">
			<Text as="headline" textAlign="center" color="simply-blue" mt="wxs">
				What’s in the Future
			</Text>
			<Box>
				<Text as="b3" textAlign="center">
					We make promises that we know we can deliver.{' '}
				</Text>
				<Text as="b3" textAlign="center" mb="ws">
					Here’s the roadmap of what the future holds for Simplr Collection.{' '}
				</Text>
			</Box>
			<Box center column>
				<Box
					width="5px"
					height="1150px"
					borderRadius="36px"
					backgroundImage="linear-gradient(180deg, #4743C5 10.31%, rgba(71, 67, 197, 0) 19.3%),
					linear-gradient(0deg, #A0A8D7, #A0A8D7);
					"
				></Box>
				<Box position="absolute" column>
					<RoadmapComp
						status="done"
						text="Launch Simplr Collection on Polygon and Ethereum"
						headText="2022, Q1"
						position="-27%"
						arrowTop="35%"
					/>
					<RoadmapComp status="progress" text="Make Draft feature live" headText="Q2" arrowTop="35%" odd />
					<RoadmapComp
						status="not done"
						text="Exclusive community for SEAT holders goes live"
						headText="Q2"
						arrowTop="10%"
						position="-15%"
					/>
					<RoadmapComp status="not done" text="Polish Simplr Collection App" headText="Q3" arrowTop="35%" odd />
					<RoadmapComp
						status="not done"
						text="Roll out new Collection type."
						headText="Q3"
						arrowTop="35%"
						position="-15%"
					/>
					<RoadmapComp
						status="not done"
						text="Partner with multiple NFT communities"
						headText="Q3"
						arrowTop="35%"
						odd
					/>
					<RoadmapComp
						status="not done"
						text="Launch NFT marketplace for Primary Sales"
						headText="Q3"
						arrowTop="35%"
						position="-15%"
					/>
					<RoadmapComp
						status="not done"
						text="Adding Analytics to Creator Dashboard "
						headText="Q4"
						arrowTop="35%"
						odd
					/>
					<RoadmapComp
						status="not done"
						text="Simplr Collection goes Multichain"
						headText="2023, Q2"
						arrowTop="35%"
						position="-27%"
					/>
					<RoadmapComp status="not done" text="Simplr Bridge Beta goes live" headText="Q4" arrowTop="35%" odd />
				</Box>
			</Box>
		</Box>
	);
};

export default Roadmap;
