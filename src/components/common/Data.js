import { FiZap } from 'react-icons/fi';
import { PiDevicesBold } from 'react-icons/pi';
import { GrStatusGood } from 'react-icons/gr';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineAutorenew } from 'react-icons/md';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';

import project1 from '../../assets/trendfusion.jpg';
import project2 from '../../assets/connectus.jpg';
import project3 from '../../assets/kraduae.jpg';
import project4 from '../../assets/primefileadvisors.jpg';
import project5 from '../../assets/elitegensoftware.jpg';
import project6 from '../../assets/twilearn.jpg';

export const aboutInfoA = [
	{
		name: 'BirthDate:',
		value: '15.04.2000',
	},
	{
		name: 'Age:',
		value: '23',
	},
	{
		name: 'Address:',
		value: 'Sector 62, Noida, India',
	},
	{
		name: 'Email:',
		value: 'rishabhtanwar.work@gmail.com',
	},
];
export const aboutInfoB = [
	{
		name: 'Nationality:',
		value: 'Indian',
	},
	{
		name: 'Study:',
		value: 'GGSIPU, New Delhi',
	},
	{
		name: 'Interest:',
		value: 'Playing/Watching Sports',
	},
	{
		name: 'Mobile:',
		value: '+91 9560252346',
	},
];

export const featuresArray = [
	{
		icon: <FiZap />,
		title: 'Fast Performance',
		description:
			'Fast load times and smooth interactions are always a top priority in my development process, ensuring efficient and reliable applications.',
	},
	{
		icon: <PiDevicesBold />,
		title: 'Responsive Design',
		description:
			'Web applications designed to work flawlessly on devices of all sizes, delivering a seamless experience across desktops, tablets, and smartphones.',
	},
	{
		icon: <GrStatusGood />,
		title: 'User-Friendly',
		description:
			'Interfaces and functionalities are intuitive and easy to use, ensuring users can navigate features effortlessly without confusion.',
	},
	{
		icon: <HiOutlineRocketLaunch />,
		title: 'Optimized Solutions',
		description:
			'Applications are optimized for performance, cross-browser compatibility, scalability, and SEO, meeting the needs of diverse users and environments.',
	},
	{
		icon: <MdOutlineAutorenew />,
		title: 'Scalable and Maintainable',
		description:
			'Codebases are structured for scalability and ease of maintenance, allowing for smooth feature updates and long-term reliability.',
	},
	{
		icon: <TbDeviceDesktopAnalytics />,
		title: 'Full-Stack Expertise',
		description:
			'Proficient in both frontend and backend development, delivering complete solutions powered by React and the MERN stack.',
	},
];

export const skillArrayA = [
	{
		label: 'React.js',
		percentage: '90%',
	},
	{
		label: 'JavaScript',
		percentage: '85%',
	},
	{
		label: 'Redux',
		percentage: '80%',
	},
	{
		label: 'Next.js',
		percentage: '70%',
	},
	{
		label: 'Redux',
		percentage: '80%',
	},
	{
		label: 'Context API',
		percentage: '80%',
	},
	{
		label: 'MSSQL',
		percentage: '70%',
	},
	{
		label: 'GSAP',
		percentage: '50%',
	},
];
export const skillArrayB = [
	{
		label: 'HTML',
		percentage: '90%',
	},
	{
		label: 'CSS',
		percentage: '90%',
	},
	{
		label: 'TailwindCSS',
		percentage: '80%',
	},
	{
		label: 'Node.js',
		percentage: '70%',
	},
	{
		label: 'Express.js',
		percentage: '70%',
	},
	{
		label: 'MongoDB',
		percentage: '60%',
	},
	{
		label: 'Java',
		percentage: '60%',
	},
	{
		label: 'Git & Github',
		percentage: '70%',
	},
];

export const educationArray = [
	{
		period: '2017-2021',
		instituteName: 'GGSIPU, New Delhi',
		education: 'Bachelor Degree',
	},
	{
		period: '2015-2016',
		instituteName: 'SSNIC, UP',
		education: 'Intermediate',
	},
	{
		period: '2013-2014',
		instituteName: 'SSNIC, UP',
		education: 'HighSchool',
	},
];

export const experienceArray = [
	{
		period: '2023-Present',
		company: 'Newgen Softwares',
		designation: 'Senior Software Engineer',
	},
	{
		period: '2021-2023',
		company: 'Newgen Softwares',
		designation: 'Software Engineer',
	},
	{
		period: '2020-2020',
		company: 'Pepcoding Pvt. Limited',
		designation: 'Trainee',
	},
];

export const projectsArray = [
	{
		id: '01',
		name: 'TrendFusion E-Commerce App',
		description:
			'A full-stack e-commerce platform built with React, Node.js, Express, MongoDB, and Context API. Features include JWT authentication, Stripe & Razorpay payment gateways, an admin panel for managing products and orders, and a sleek UI powered by TailwindCSS.',
		link: 'https://trendfusion-frontend.vercel.app/',
		image: project1,
	},
	{
		id: '02',
		name: 'Connect Us',
		description:
			'A developer networking platform designed to connect tech professionals globally. Built with React, Node.js, Express, MongoDB, and Redux, it features secure JWT authentication, real-time updates, and a responsive UI with CSS styling.',
		link: 'https://connectdevs.netlify.app/',
		image: project2,
	},
	{
		id: '03',
		name: 'Kraduae',
		description:
			'An interactive business website for a steel industry, developed using React, CSS, and GSAP. Features smooth animations, a modern UI, and an engaging design to enhance business outreach.',
		link: 'https://kraduae.com/',
		image: project3,
	},
	{
		id: '04',
		name: 'Prime File Advisors',
		description:
			'A professional website for a chartered accountancy firm, designed with React, CSS, and Framer Motion. Focused on an elegant UI, seamless navigation, and smooth animations for enhanced user experience.',
		link: 'https://primefileadvisors.com/',
		image: project4,
	},
	{
		id: '05',
		name: 'Elite Softwarehub',
		description:
			'A business solutions platform offering company registration, website/app development, and digital marketing services. Built with React, CSS, and GSAP, it features an intuitive UI and engaging animations to showcase services effectively.',
		link: 'https://elitesoftwarehub.com/',
		image: project5,
	},
	{
		id: '06',
		name: 'Twilearn EduTech',
		description:
			'An online education platform developed with React, CSS, and React Hook Form. Offers interactive learning modules, structured course management, and a user-friendly interface for students.',
		link: 'https://www.twilearn.in/',
		image: project6,
	},
];
