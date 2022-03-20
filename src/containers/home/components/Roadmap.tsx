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
				<RoadmapComp
					status="done"
					text="Launch Simplr Collection on Polygon and Ethereum"
					headText="Q1, 2022"
					arrowTop="35%"
					odd
				/>
				<RoadmapComp
					status="progress"
					text="Launch Simplr Collection on Polygon and Ethereum"
					headText="Q1, 2022"
					arrowTop="35%"
				/>
				<RoadmapComp
					status="not done"
					text="Launch Simplr Collection on Polygon and Ethereum"
					headText="Q1, 2022"
					arrowTop="35%"
					odd
				/>
				<RoadmapComp
					status="not done"
					text="Launch Simplr Collection on Polygon and Ethereum"
					headText="Q1, 2022"
					arrowTop="35%"
				/>
				<RoadmapComp
					status="not done"
					text="Launch Simplr Collection on Polygon and Ethereum"
					headText="Q1, 2022"
					arrowTop="35%"
					odd
				/>
				<RoadmapComp
					status="not done"
					text="Launch Simplr Collection on Polygon and Ethereum"
					headText="Q1, 2022"
					arrowTop="35%"
				/>
				<RoadmapComp
					status="not done"
					text="Launch Simplr Collection on Polygon and Ethereum"
					headText="Q1, 2022"
					arrowTop="35%"
					odd
				/>
				<RoadmapComp
					status="not done"
					text="Launch Simplr Collection on Polygon and Ethereum"
					headText="Q1, 2022"
					arrowTop="35%"
				/>
				<Box
					width="5px"
					height="80px"
					borderBottomLeftRadius="36px"
					borderBottomRightRadius="36px"
					backgroundColor="#E0EAFF"
				></Box>
			</Box>
		</Box>
	);
};

export default Roadmap;
