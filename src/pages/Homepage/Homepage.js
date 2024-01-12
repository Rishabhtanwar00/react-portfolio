import React from 'react';
import Landing from '../../components/Landing/Landing';
import './Homepage.css';
import SocialLinks from '../../components/SocialLinks/SocialLinks';

const Homepage = () => {
	return (
		<div className='homepage'>
			<Landing />
			<SocialLinks ClassName='' />
		</div>
	);
};

export default Homepage;
