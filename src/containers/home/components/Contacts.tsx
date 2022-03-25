import React from 'react';
import Box from 'src/components/Box';
import ButtonComp from 'src/components/Button';
import ResponsiveImage from 'src/components/ResponsiveImage';
import Text from 'src/components/Text';

const Contacts = () => {
	return (
		<Box bg="purple-40" px={{ mobS: 'mm', tabS: 'wm', deskM: '0' }}>
			<Box
				display="flex"
				flexDirection={{ mobS: 'column-reverse', tabS: 'row' }}
				justifyContent={{ tabS: 'flex-start', deskM: 'flex-end' }}
				alignItems="center"
			>
				<Box
					width={{ mobS: '100%', tabS: '42.5rem', deskM: '49.6rem' }}
					mx="auto"
					mt={{ mobS: 'wxxs', tabS: 'wm' }}
					mb={{ mobS: 'ws', tabS: 'wxl' }}
				>
					<Text
						as="h3"
						textAlign={{ mobS: 'center', tabS: 'left' }}
						color="simply-black"
						fontSize="2.4rem"
						maxWidth={{ mobS: '24rem', tabS: 'unset' }}
						mx="auto"
					>
						Have questions? Drop us a text.
					</Text>
					<Text
						as="b2"
						mt="mm"
						textAlign={{ mobS: 'center', tabS: 'left' }}
						color="simmply-black"
						maxWidth={{ mobS: '27rem', tabS: 'unset' }}
						mx="auto"
					>
						We are always actively helping out our Creators on our Discord. Join in and share your problems. We’ve got
						your back.
					</Text>
					<Box
						as="a"
						href=""
						display={{ mobS: 'flex', tabS: 'block' }}
						justifyContent={{ mobS: 'center', tabS: 'unset' }}
					>
						<ButtonComp bg="tertiary" height="48px" py="1.35rem" px="8.65rem" mt="mxxxl" mx="auto">
							<Text as="h5" textAlign="center">
								Join Discord
							</Text>
						</ButtonComp>
					</Box>
				</Box>
				<Box>
					<ResponsiveImage
						tab="/static/images/tab/contact.png"
						desk="static/images/desktop/contact.png"
						mobile="static/images/mobile/contact.png"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Contacts;
