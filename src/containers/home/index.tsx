import Box from 'src/components/Box';
import Features from './components/Features';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CollectionTypes from './components/CollectionTypes';
import System from './components/Systems';

const HomePage = () => {
	return (
		<Box width="100vw" height="300vh" mb="wxs">
			<Hero />
			<HowItWorks />
			<CollectionTypes />
			<Features />
			<System />
		</Box>
	);
};

export default HomePage;
