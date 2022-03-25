import { Check } from 'phosphor-react';
import React from 'react';
import Box from 'src/components/Box';
import If from 'src/components/If';
import ResponsiveText from 'src/components/ResponsiveText';

interface props {
	odd?: boolean;
	status?: string;
	text: string;
	headText: string;
	position?: string;
	arrowTop: string;
	top: object;
}

const RoadmapComp = ({ status, odd, text, headText, position, arrowTop, top }: props) => {
	return (
		<Box mt={top}>
			<Box width="90%" display="flex" alignItems="center" justifyContent="space-between">
				<If condition={!odd} then={<ResponsiveText mob="b3" tab="b3" desk="h4" text={headText} ml={position} />} />
				<Box className={odd ? 'pointedLeftBox' : 'pointedRightBox'} py="20px" px="15px">
					<ResponsiveText mob="b2" tab="b2" desk="b3" text={text} />
				</Box>
				<Box
					minWidth={status === 'not done' ? '17px' : '36.6px'}
					minHeight={status === 'not done' ? '17px' : '36.6px'}
					borderRadius="100%"
					backgroundColor="simply-blue"
					center
					ml={odd ? (status === 'not done' ? { mobS: '45%', tabS: '46.5%' } : { mobS: '33%', tabS: '36.5%' }) : '0'}
					mr={odd ? '0' : status === 'not done' ? { mobS: '34.5%', tabS: '36%' } : { mobS: '23.5%', tabS: '25%' }}
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
					then={<ResponsiveText mob="b3" tab="b3" desk="h4" text={headText} ml={{ mobS: '40%', tabS: '62%' }} />}
				/>
			</Box>
		</Box>
	);
};

export default RoadmapComp;
