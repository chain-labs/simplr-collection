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
		<Box center column>
			<Box
				width="5px"
				height="80px"
				borderTopLeftRadius={position === 'first' ? '36px' : ''}
				borderTopRightRadius={position === 'first' ? '36px' : ''}
				borderBottomLeftRadius={position === 'last' ? '36px' : ''}
				borderBottomRightRadius={position === 'last' ? '36px' : ''}
				backgroundColor={
					status === 'done'
						? 'simply-blue'
						: status === 'progress'
						? 'linear-gradient(180deg, #4743C5 10.54%, rgba(71, 67, 197, 0) 28.65%)'
						: '#E0EAFF'
				}
			></Box>
			<Box between row>
				<If
					condition={odd}
					then={
						<Text ml="-50%" as="h4">
							{headText}
						</Text>
					}
				/>
				<Box between row position="relative">
					<Box
						minWidth="32.6px"
						minHeight="32.6px"
						borderRadius="100%"
						backgroundColor="simply-blue"
						center
						ml={odd ? '-114%' : ''}
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
					<Box
						className={odd ? 'pointedRightBox' : 'pointedLeftBox'}
						py="20px"
						px="15px"
						css={`
							:before {
								top: ${arrowTop};
							}
						`}
					>
						<Text as="b3">{text}</Text>
					</Box>
				</Box>
				<If
					condition={!odd}
					then={
						<Text position="absolute" as="h4" ml="4.5%">
							{headText}
						</Text>
					}
				/>
			</Box>
		</Box>
	);
};

export default RoadmapComp;
