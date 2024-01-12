import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Resume from '../../assests/resume.pdf';
import { TypeAnimation } from 'react-type-animation';
import './Landing.css';

const Landing = () => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.download = 'RishabhTanwar_Resume';

		link.href = Resume;

		link.click();
	};

	return (
		<div className='landing'>
			<div className='landing-image'></div>
			<div className='landing-content'>
				<h3>
					<span className='landing-name'>RISHABH TANWAR</span>
				</h3>
				<div className='landing-work'>
					<TypeAnimation
						sequence={[
							'Front-end Developer',
							1000,
							'Software Engineer',
							1000,
							'React | JavaScript | Java',
							1000,
						]}
						speed={20}
						style={{ fontSize: '5rem' }}
						repeat={Infinity}
					/>
				</div>
				<span className='landing-text'>
					Creative Front-end developer based in Noida and happy to learn new
					technologies and face new challenges.
				</span>
				<CustomButton name='Download CV' onClick={handleDownload} />
			</div>
		</div>
	);
};

export default Landing;
