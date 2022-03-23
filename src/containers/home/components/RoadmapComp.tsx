import { Check } from 'phosphor-react';
import React from 'react';
import Box from 'src/components/Box';
import If from 'src/components/If';
import Text from 'src/components/Text';

interface props {
	odd?: boolean;
	status?: string;
	text: string;
	headText: string;
	position?: string;
	arrowTop: string;
}

const RoadmapComp = ({ status, odd, text, headText, position, arrowTop }: props) => {
	return (
		<Box mt="80px">
			<Box width="290%" display="flex" alignItems="center" justifyContent="space-between">
				<If
					condition={!odd}
					then={
						<Text as="h4" ml={position}>
							{headText}
						</Text>
					}
				/>
				<Box className={odd ? 'pointedLeftBox' : 'pointedRightBox'} py="20px" px="15px">
					<Text as="b3">{text}</Text>
				</Box>
				<Box
					minWidth={status === 'not done' ? '17px' : '36.6px'}
					minHeight={status === 'not done' ? '17px' : '36.6px'}
					borderRadius="100%"
					backgroundColor="simply-blue"
					center
					ml={odd ? (status === 'not done' ? { mobS: '14%', tabS: '14.5%' } : { mobS: '10%', tabS: '11.5%' }) : '0'}
					mr={odd ? '0' : status === 'not done' ? { mobS: '79.5%', tabS: '80%' } : { mobS: '75.5%', tabS: '77%' }}
					css={`
						:before {
							top: ${arrowTop};
						}
					`}
				>
					<If
						condition={status === 'progress' || status === 'done'}
						then={
							<Box width="17px" height="17px" borderRadius="100%" backgroundColor="white">
								<If condition={status === 'done'} then={<Check size={17} />} />
							</Box>
						}
					/>
				</Box>
				<If
					condition={odd}
					then={
						<Text as="h4" mr={{ mobS: '50%', tabS: '50%' }} textAlign="start">
							{headText}
						</Text>
					}
				/>
			</Box>
		</Box>
	);
};

export default RoadmapComp;
