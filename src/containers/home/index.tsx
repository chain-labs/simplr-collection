import Box from 'src/components/Box';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';

const HomePage = () => {
	return (
		<Box height="300vh" mb="wxs">
			<Hero />
			<Roadmap />
		</Box>
	);
};

export default HomePage;
