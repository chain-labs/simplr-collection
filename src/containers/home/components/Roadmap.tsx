import React, { useState } from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import { Grid, Image, Segment } from 'semantic-ui-react';
import RoadmapComp from './RoadmapComp';
import { CaretDown } from 'phosphor-react';
import RoadmapDesk from './RoadmapDesk';
import RoadmapMob from './RoadmapMob';

const Roadmap = () => {
	const [showMore, setShowMore] = useState(false);
	return (
		<Box>
			<Box>
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
				<RoadmapDesk />
				<RoadmapMob />
			</Box>
		</Box>
	);
};

export default Roadmap;
