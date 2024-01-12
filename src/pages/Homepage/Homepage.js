import React from 'react';
import Landing from '../../components/Landing/Landing';
import { Link } from 'react-router-dom';
import './Homepage.css';
import SocialLinks from '../../components/SocialLinks/SocialLinks';

const Homepage = () => {
	return (
		<div className='homepage'>
			<Landing />
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

export default Homepage;
