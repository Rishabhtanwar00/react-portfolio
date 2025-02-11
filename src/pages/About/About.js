import React, { useEffect } from 'react';
import MyImage from '../../assets/me-2.jpg';
import Resume from '../../assets/resume.pdf';
import VerticalSeprator from '../../components/Seprator//VerticalSeprator';
import HorizontalSeprator from '../../components/Seprator//HorizontalSeprator';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import Features from '../../components/Features/Features';
import EducationAndExperience from '../../components/EducationAndExperience/EducationAndExperience';
import Skills from '../../components/Skills/Skills';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import CustomButton from '../../components/CustomButton/CustomButton';
import Heading from '../../components/Heading/Heading';
import './About.css';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
						<SocialLinks />
					</div>
					<div className='about-intro'>
						<h1>
							<span>Hey!</span> I am Rishabh,
						</h1>
						<h1>
							A twenty Four years <span>old</span>
						</h1>
						<h1>Full stack developer. Currently</h1>
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
					I am a passionate software engineer with over 3.5 years of experience,
					specializing as a full-stack developer. I have strong expertise in
					frontend development using React and JavaScript, complemented by
					backend proficiency in the MERN stack (MongoDB, Express.js, React, and
					Node.js).
					<br />
					<br />
					Over the years, I’ve developed a strong passion for building practical
					and innovative solutions that provide seamless user experiences.
					Working in web development has not only enhanced my technical skills
					but also shaped how I approach problem-solving and collaboration. With
					every project, I aim to learn something new and improve, ensuring the
					applications I create are scalable, efficient, and meet real-world
					needs
				</p>
			</div>
			<AboutInfo />
			<div className='download-button'>
				<CustomButton name='download CV' onClick={handleDownload} />
			</div>
			<Features />
			<EducationAndExperience />
			<Skills />
		</div>
	);
};

export default About;
