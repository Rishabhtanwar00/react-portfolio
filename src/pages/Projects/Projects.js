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
			<div className='projects-data'>
				{projectsArray.map((project, index) => (
					<div key={index} className='project-container'>
						<div className='Project-details'>
							<Heading name={project.id} />
							<h2>{project.name}</h2>
							<p>{project.description}</p>

							<button
								onClick={() => openInNewTab(`${project.link}`)}
								className='project-button'
							>
								View Project →
							</button>
						</div>
						<div className='project-image'>
							<img
								// style={{
								// 	transform,
								// }}
								src={project.image}
								alt=''
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
