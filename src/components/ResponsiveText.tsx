import React from 'react';
import If from './If';
import Text, { TextProps } from './Text';

interface Props extends TextProps {
	mob?: TextProps['as'];
	tab?: TextProps['as'];
	desk?: TextProps['as'];
	text?: string;
}

const ResponsiveText = ({ mob, tab, desk, text, ...restProps }: Props) => {
	return (
		<React.Fragment>
			<If
				condition={!!mob}
				then={
					<Text as={mob} display={{ mobS: 'block', tabS: 'none', deskM: 'none' }} {...restProps}>
						{text}
					</Text>
				}
			/>
			<If
				condition={!!tab}
				then={
					<Text as={tab} display={{ mobS: 'none', tabS: 'block', deskM: 'none' }} {...restProps}>
						{text}
					</Text>
				}
			/>
			<If
				condition={!!desk}
				then={
					<Text as={desk} display={{ mobS: 'none', tabS: 'none', deskM: 'block' }} {...restProps}>
						{text}
					</Text>
				}
			/>
		</React.Fragment>
	);
};

export default ResponsiveText;
