import { FiZap } from 'react-icons/fi';
import { PiDevicesBold } from 'react-icons/pi';
import { GrStatusGood } from 'react-icons/gr';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineAutorenew } from 'react-icons/md';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';

import project1 from '../../assests/project1.png';
import project3 from '../../assests/project3.png';
import project4 from '../../assests/project4.png';

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
		name: 'Prime File Advisors',
		description:
			'Designing and Developed a web app using React Streamlining Acquisition of all necessary financial documents, One stop solution for immigration agencies and Comprehensive Business Support.',
		link: 'https://primefileadvisors.com/',
		image: project1,
	},
	{
		id: '02',
		name: 'Valuation Point',
		description:
			'Developed a template using front end technologies to help businesses to enhance their productivity and grow using website and explore the power of internet. ',
		link: 'https://valuationpoint.netlify.app/',
		image: project3,
	},
	{
		id: '03',
		name: 'Web Magic- Freelancer template',
		description:
			'Developed a template using front end technologies to help businesses to enhance their productivity and grow using website and explore the power of internet. ',
		link: 'https://webmagic.netlify.app/',
		image: project3,
	},
	{
		id: '04',
		name: "Let's Get It Done",
		description:
			'Created a stylish, easy to navigate and use to do list using web develoment using which you can prioritize your work and personal tasks.',
		link: 'https://letsgetitdone.netlify.app/',
		image: project4,
	},
];
