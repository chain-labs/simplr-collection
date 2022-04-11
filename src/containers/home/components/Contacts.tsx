import Image from 'next/image';
import React from 'react';
import Box from 'src/components/Box';
import ButtonComp from 'src/components/Button';
import Text from 'src/components/Text';
import { DISCORD_INVITE } from './constants';

import contactImage from 'public/static/images/desktop/contact.png';

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
					<Box as="a" href={DISCORD_INVITE} display="flex" justifyContent={{ mobS: 'center', tabS: 'flex-start' }}>
						<ButtonComp bg="tertiary" height="48px" px="8.65rem" mt="mxxxl">
							<Text as="h5">Join Discord</Text>
						</ButtonComp>
					</Box>
				</Box>
				<Box>
					<Image src={contactImage} objectFit="cover" alt="contact-image" />
				</Box>
			</Box>
		</Box>
	);
};

export default Contacts;
