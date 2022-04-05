import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const heroAnimations = () => {
	gsap.fromTo(
		'#hero-headline',
		{ autoAlpha: 0, y: '-40%', clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
		{
			autoAlpha: 1,
			y: '0%',
			clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
			duration: 0.9,
			ease: 'power2.inOut',
		}
	);
	gsap.fromTo(
		'#hero-subtext',
		{ autoAlpha: 0, y: '-10%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
		{
			autoAlpha: 1,
			y: '0%',
			clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
			delay: 0.3,
			duration: 0.6,
			ease: 'power2.inOut',
		}
	);
	gsap.fromTo(
		'.hero-cta-l',
		{ autoAlpha: 0, y: '-5%', clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' },
		{
			autoAlpha: 1,
			y: '0%',
			clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
			ease: 'power2.inOut',
			delay: 0.6,
			duration: 0.3,
		}
	);
	// gsap.fromTo('.hero-cta-r', { autoAlpha: 0, x: '5%' }, { autoAlpha: 1, x: '0%', delay: 0.6, duration: 0.3 });
	gsap.fromTo('.hero-image', { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.8, duration: 0.9 });

	gsap.fromTo(
		'.info-image',
		{ autoAlpha: 0 },
		{
			autoAlpha: 1,
			duration: 1.5,
			scrollTrigger: {
				trigger: '.info-image',
				start: 'top 60%',
				end: '200% 100%',
			},
		}
	);
	gsap.fromTo(
		'.info-text',
		{ autoAlpha: 0, x: '-5%' },
		{
			autoAlpha: 1,
			x: '0%',
			duration: 0.9,
			scrollTrigger: {
				trigger: '.info-image',
				start: 'top 50%',
				end: '200% 100%',
			},
		}
	);
};
