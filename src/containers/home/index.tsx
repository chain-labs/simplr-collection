import Box from 'src/components/Box';
import Features from './components/Features';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CollectionTypes from './components/CollectionTypes';

const HomePage = () => {
	return (
		<Box width="100vw" height="300vh" mb="wxs">
			<Hero />
			{/* <Features /> */}
			<HowItWorks />
			<CollectionTypes />
		</Box>
	);
};

export default HomePage;
