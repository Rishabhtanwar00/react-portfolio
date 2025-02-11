import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Resume from '../../assets/resume.pdf';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Landing.css';

const Landing = () => {
	const timeline = gsap.timeline({
		ease: 'power3.out',
		repeat: -1,
	});
	useGSAP(() => {
		timeline
			.to('.text1', {
				opacity: 0,
				duration: 0.5,
				delay: 3,
			})
			.to('.text-reveal-bg', {
				width: '100%',
				duration: 1,
				ease: 'power3.inOut',
			})
			.to(
				'.text-reveal-bg',
				{
					transform: 'translateX(100%)',
					duration: 3,
					ease: 'power3.out',
				},
				'a1'
			)
			.to(
				'.text2',
				{
					opacity: 1,
					duration: 1,
				},
				'a1'
			)
			.to('.text2', {
				opacity: 0,
				duration: 0.5,
				delay: 3,
			})
			.to('.text-reveal-bg1', {
				width: '100%',
				duration: 1,
				ease: 'power3.inOut',
			})
			.to(
				'.text-reveal-bg1',
				{
					transform: 'translateX(100%)',
					duration: 3,
					ease: 'power3.out',
				},
				'a2'
			)
			.to(
				'.text3',
				{
					opacity: 1,
					duration: 1,
				},
				'a2'
			)
			.to('.text3', {
				opacity: 0,
				duration: 0.5,
				delay: 3,
			})
			.to('.text-reveal-bg2', {
				width: '100%',
				duration: 1,
				ease: 'power3.inOut',
			})
			.to(
				'.text-reveal-bg2',
				{
					transform: 'translateX(100%)',
					duration: 3,
					ease: 'power3.out',
				},
				'a3'
			)
			.to(
				'.text1',
				{
					opacity: 1,
					duration: 1,
				},
				'a3'
			);
	}, []);

	const handleDownload = () => {
		const link = document.createElement('a');
		link.download = 'RishabhTanwar_Resume';

		link.href = Resume;

		link.click();
	};

	return (
		<div className='landing'>
			<div id='red-box' className='landing-image'></div>
			<div className='landing-content'>
				<h3 className=''>
					<span className='landing-name'>Rishabh Tanwar</span>
				</h3>
				<div className='text-reveal'>
					<div className='text-reveal-bg'></div>
					<h1 className='text1'>Software Engineer</h1>
					<div className='text-reveal-bg1'></div>
					<h1 className='text2'>React Developer</h1>
					<div className='text-reveal-bg2'></div>
					<h1 className='text3'>Full Stack Developer</h1>
				</div>

				<span className='landing-text'>
					Skilled Software Engineer with 3.5+ years of experience in frontend
					development using React.js and JavaScript , specializing in building
					responsive, user-centric web applications. Currently learning Node.js
					to enhance backend capabilities and develop full-stack applications.
				</span>
				<div className='cv-button'>
					<CustomButton name='Download CV' onClick={handleDownload} />
				</div>
			</div>
		</div>
	);
};

export default Landing;
