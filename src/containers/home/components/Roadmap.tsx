import { Check } from 'phosphor-react';
import React from 'react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import RoadmapComp from './RoadmapComp';
import { roadmapArray } from './utils';

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
					{roadmapArray?.map((array) => {
						return (
							<RoadmapComp
								status={array.status}
								text={array.text}
								headText={array.headText}
								position={array.position}
								top={array.top}
								arrowTop="35%"
								odd={roadmapArray.indexOf(array) % 2 === 0 ? false : true}
							/>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default Roadmap;
