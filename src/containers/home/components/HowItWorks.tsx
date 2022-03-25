import Box from 'src/components/Box';
import ResponsiveText from 'src/components/ResponsiveText';
import theme from 'src/styleguide/theme';

const HowItWorks = () => {
	return (
		<Box
			mx="auto"
			width={{ mobS: '90vw', deskM: '108rem' }}
			mt={{ mobS: 'wm', tabS: 'wl', deskM: 'wxxl' }}
			column
			alignItems="center"
		>
			<ResponsiveText desk="h1" tab="h2" mob="h3" color="simply-blue" text="How Simplr Collection works" />
			<ResponsiveText
				desk="b3"
				tab="b2"
				mob="b3"
				text="Fill out the form, play with different modules, and Launch your Collection. Here’s a quick video to make things easier"
				maxWidth="50rem"
				textAlign="center"
				mt={{ mobS: 'ms', tabS: 'mm' }}
				mb="mxxxl"
			/>
			{/* // @ts-expect-error frame-level-media-query */}
			<Box
				id="how"
				width={{ mobS: '28.5rem', tabS: '75rem', deskM: '108rem' }}
				height={{ mobS: '15rem', tabS: '45rem', deskM: '59rem' }}
			>
				<Box
					as="iframe"
					width="100%"
					height="100%"
					objectFit="cover"
					css={`
						/* height: 59rem;
					@media only screen and (min-width: ${theme.breakpoints.mobS}) and (max-width: ${theme.breakpoints.tabS}) {
                        height: 15rem;
					} ; */
					`}
					borderRadius="12px"
					src="https://www.youtube.com/embed/SSo_EIwHSd4"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></Box>
			</Box>
		</Box>
	);
};

export default HowItWorks;
