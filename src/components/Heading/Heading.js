import React from 'react';
import './Heading.css';

const Heading = ({ name }) => {
	return (
		<div className='heading-head'>
			<div className='heading-design-line'>
				<div className='heading-design1'></div>
				<div className='heading-design2'></div>
			</div>
			<span>{name}</span>
		</div>
	);
};

export default Heading;
