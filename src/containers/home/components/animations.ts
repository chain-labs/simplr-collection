import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import theme from 'src/styleguide/theme';
import { random } from './utils';

gsap.registerPlugin(ScrollTrigger);

export const heroAnimations = () => {
	const tl = gsap.timeline();
	tl.fromTo(
		'#hero-headline',
		{ autoAlpha: 0, y: '-50', clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
		{
			autoAlpha: 1,
			y: '0%',
			clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
			duration: 1,
			ease: 'back.inOut',
		},
		0
	);
	tl.fromTo(
		'#hero-subtext',
		{ autoAlpha: 0, y: '-10%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
		{
			autoAlpha: 1,
			y: '0%',
			clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
			duration: 0.6,
			ease: 'back.inOut',
		},
		0.3
	);
	tl.fromTo(
		'.hero-cta-l',
		{ autoAlpha: 0, clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' },
		{
			autoAlpha: 1,
			clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
			ease: 'power2.inOut',
			duration: 0.6,
		},
		0.4
	);
	// gsap.fromTo('.hero-cta-r', { autoAlpha: 0, x: '5%' }, { autoAlpha: 1, x: '0%', delay: 0.6, duration: 0.3 });
	tl.fromTo('.hero-image', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9, ease: 'back.inOut' }, 0.9);

	gsap.fromTo(
		'.info-image',
		{ autoAlpha: 0, clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' },
		{
			autoAlpha: 1,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			duration: 0.6,
			scrollTrigger: {
				trigger: '.info-image',
				start: 'top 50%',
				end: '200% 100%',
			},
		}
	);
	gsap.fromTo(
		'.info-text',
		{ autoAlpha: 0, x: '-5%', clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
		{
			autoAlpha: 1,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			x: '0%',
			duration: 0.9,
			scrollTrigger: {
				trigger: '.info-image',
				start: 'top 50%',
				end: '200% 100%',
				markers: true,
			},
		}
	);
};

export const featuresAnimations = () => {
	gsap.fromTo(
		'.feat-title',
		{ y: '-10%', autoAlpha: '0' },
		{
			y: '0%',
			autoAlpha: '1',
			duration: 1,
			scrollTrigger: {
				trigger: '.feat-title',
				start: 'top 50%',
			},
		}
	);
	gsap.fromTo(
		'.feat-info',
		{ y: '-10%', autoAlpha: '0' },
		{
			y: '0%',
			autoAlpha: '1',
			duration: 1,
			delay: 0.5,
			scrollTrigger: {
				trigger: '.feat-title',
				start: 'top 50%',
			},
		}
	);
	gsap.fromTo(
		'.feat-info',
		{ y: '-10%', autoAlpha: '0' },
		{
			y: '0%',
			autoAlpha: '1',
			duration: 1,
			delay: 0.5,
			scrollTrigger: {
				trigger: '.feat-title',
				start: 'top 50%',
			},
		}
	);
};

export const featureCardAnimations = (className) => {
	const width = window.visualViewport.width;
	const breakpoint = parseInt(theme.breakpoints.deskM.split('px')[0]);
	const key = parseInt(className[className.length - 1]);
	if (width >= breakpoint) {
		gsap.fromTo(
			`.${className}`,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				duration: 1,
				delay: 0.1 * random[key],
				scrollTrigger: {
					trigger: '.feat-title',
					start: `top 20%`,
				},
			}
		);
	} else {
		gsap.fromTo(
			`.${className}`,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '.feat-title',
					start: `top 20%`,
				},
			}
		);
	}
};
