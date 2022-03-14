import Box from 'src/components/Box';
import Features from './components/Features';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import System from './components/System';

const HomePage = () => {
	return (
		<Box width="100vw" height="300vh" mb="wxs">
			<Hero />
			<Features />
			<HowItWorks />
			<System />
		</Box>
	);
};

export default HomePage;
