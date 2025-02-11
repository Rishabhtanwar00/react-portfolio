import React, { useEffect } from 'react';
import Heading from '../../components/Heading/Heading';
// import {
// 	useMousePosition,
// 	usePrefersReducedMotion,
// } from '../../components/common/UseMousePosition';
import { projectsArray } from '../../components/common/Data';
import './Projects.css';

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const mousePosition = useMousePosition();
	// const prefersReducedMotion = usePrefersReducedMotion();
	// const transform = prefersReducedMotion
	// 	? null
	// 	: `translate3d(${mousePosition.x / 20}px, ${mousePosition.y / 20}px,${
	// 			mousePosition.y + mousePosition.x / 20
	// 	  }px)`;

	const openInNewTab = (url) => {
		window.open(url, '_blank', 'noreferrer');
	};

	return (
		<div className='projects-container'>
			<div className='projects-heading'>
				<h1>SELECTED</h1>
				<h1>PROJECTS</h1>
			</div>
			<section className='projects'>
				{projectsArray.map((item) => (
					<div className='project' key={item.id}>
						<div className='project-image'>
							<img src={item.image} alt='' />
						</div>
						<div className='project-details'>
							<Heading name={item.id} />
							<h1>{item.name}</h1>
							<p>{item.description}</p>

							<button
								onClick={() => openInNewTab(item.link)}
								className='project-button'
							>
								View Project &#10547;{' '}
							</button>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Projects;
