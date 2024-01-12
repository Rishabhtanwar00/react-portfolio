import React from 'react';
import MyImage from '../../assests/me-2.jpg';
import Resume from '../../assests/resume.pdf';
import VerticalSeprator from '../../components/Seprator//VerticalSeprator';
import HorizontalSeprator from '../../components/Seprator//HorizontalSeprator';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import Features from '../../components/Features/Features';
import EducationAndExperience from '../../components/EducationAndExperience/EducationAndExperience';
import Skills from '../../components/Skills/Skills';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import CustomButton from '../../components/CustomButton/CustomButton';
import Heading from '../../components/Heading/Heading';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.download = 'RishabhTanwar_Resume';

		link.href = Resume;

		link.click();
	};

	return (
		<div className='about-container'>
			<div className='about-landing'>
				<VerticalSeprator />
				<div className='about-details'>
					<div className='about-social'>
						<SocialLinks ClassName='' />
					</div>
					<div className='about-intro'>
						<h1>
							<span>Hey!</span> I am Rishabh,
						</h1>
						<h1>
							A twenty three years <span>old</span>
						</h1>
						<h1>front-end developer.Currently</h1>
						<h1>
							based <span>in</span>
							<span className='intro-place'> Noida,India.</span>
						</h1>
					</div>
					<img src={MyImage} alt='myself' />
				</div>
			</div>
			<HorizontalSeprator />
			<div className='about-me'>
				<Heading name='About me' ClassName='about-me-heading' />
				<p>
					I am working as a software engineer from almost last 3 years with a
					good hands on with React, JavaScript in frontend development and with
					Java in backend. I've always wanted to create new things, unique
					experiences, getting into web development changed a lot of things for
					me, and since then, I try to push my work to new horizons with each
					project, always putting quality first.
				</p>
			</div>
			<AboutInfo />
			<div className='download-button'>
				<CustomButton name='download CV' onClick={handleDownload} />
			</div>
			<Features />
			<EducationAndExperience />
			<Skills />
			<div className='contact-social about-social'>
				<SocialLinks ClassName='contact-social-links' />
				<div className='contact-design'>
					<p>
						DESIGNED BY{' '}
						<Link to='/' className='contact-design-name'>
							Rishabh Tanwar
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
