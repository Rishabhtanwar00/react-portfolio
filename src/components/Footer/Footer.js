import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer-container'>
			<SocialLinks />
			<p>
				Made with <span className='heart'>&#x2764;</span> by Rishabh Tanwar
			</p>
		</div>
	);
};

export default Footer;
