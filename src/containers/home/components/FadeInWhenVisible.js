import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

function FadeInWhenVisible({ children }) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			transition={{ duration: 2.5, delay: 0.3 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
		>
			{children}
		</motion.div>
	);
}

export default FadeInWhenVisible;
