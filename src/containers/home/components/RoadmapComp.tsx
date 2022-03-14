import { Check } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { StepContent } from 'semantic-ui-react';
import Box from 'src/components/Box';
import Text from 'src/components/Text';
import theme from 'src/styleguide/theme';
import { text } from './type';

interface props {
	myText: text[];
	year: string;
}

const RoadmapComp = ({ myText, year }: props) => {
	const [content, setContent] = useState([]);
	useEffect(() => {
		console.log(myText);
	}, [myText]);

	return (
		<Box
			border={{ mobS: 'none', tabS: '1px solid #DBDAFC' }}
			borderRadius="16px"
			px="24px"
			py="12px"
			className="road-map"
			cursor="pointer"
		>
			<Text as="h3" color="simply-blue" mb="mxl" textAlign={{ mobS: 'center', tabS: 'start' }}>
				{year}
			</Text>

			{myText?.map((value, index) => (
				<Box row alignItems={{ mobS: 'center', tabS: '' }} key={index} mb="ml">
					<Box
						width={{ mobS: '6px', tabS: '16.5px' }}
						height={{ mobS: '6px', tabS: '16.5px' }}
						display="flex"
						justifyContent="center"
						alignItems="center"
						backgroundColor={value.isDone ? 'blue-50' : 'none'}
						boxShadow="inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)"
						borderRadius="100%"
						border={`1px solid ${theme.colors['blue-50']}`}
						mr="ms"
					>
						<Box display={{ mobS: 'none', tabS: 'flex' }}>
							<Check size={12} color="#ECF1F4" />
						</Box>
					</Box>
					<Text as="b2" color={value.isDone ? { mobS: 'simply-blue', tabS: 'black' } : 'black'}>
						{value.text}
					</Text>
				</Box>
			))}
		</Box>
	);
};

export default RoadmapComp;
