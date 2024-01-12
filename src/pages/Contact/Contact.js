import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { BsArrow90DegRight } from 'react-icons/bs';

import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
	const handleClick = () => {
		window.open(
			'mailto:rishabtanwar2000@gmail.com?subject=Subject&body=Body%20goes%20here'
		);
	};
	return (
		<div className='contact-container'>
			<div className='contact-title'>
				<span>R</span>
				<span>I</span>
				<span>S</span>
				<span>H</span>
				<span>A</span>
				<span>B</span>
				<span>H</span>
				<span>T</span>
				<span>A</span>
				<span>N</span>
				<span>W</span>
				<span>A</span>
				<span>R</span>
			</div>
			<div className='contact-form-container'>
				<div className='contact-form'>
					<h2 className='contact-form-title'>WANT TO CONNECT WITH ME?</h2>
					<CustomButton
						name='send me an e-mail'
						ClassName='contact-button'
						onClick={handleClick}
					/>
				</div>
				<Link to='/' className='contact-arrow'>
					<BsArrow90DegRight />
				</Link>
			</div>
			<div className='contact-footer-container'>
				<div className='contact-thanks'>
					<h3>Thanks for your visit!</h3>
					<p>You can check out my networks to follow my new adventures!</p>
				</div>
				<div className='contact-social'>
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
		</div>
	);
};

export default Contact;
