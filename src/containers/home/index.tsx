import Box from 'src/components/Box';
import dynamic from 'next/dynamic';
const Contacts = dynamic(() => import('./components/Contacts'));
const Features = dynamic(() => import('./components/Features'));
const Footer = dynamic(() => import('./components/Footer'));
const Hero = dynamic(() => import('./components/Hero'));
const HowItWorks = dynamic(() => import('./components/HowItWorks'));
const CollectionTypes = dynamic(() => import('./components/CollectionTypes'));
const System = dynamic(() => import('./components/Systems'));
const Roadmap = dynamic(() => import('./components/Roadmap'));

const HomePage = () => {
	return (
		<Box width="100vw" height="300vh" mb="wxs">
			<Hero />
			<HowItWorks />
			<CollectionTypes />
			<Features />
			<System />
			<Roadmap />
			<Contacts />
			<Footer />
		</Box>
	);
};

export default HomePage;
