import { FiZap } from 'react-icons/fi';
import { PiDevicesBold } from 'react-icons/pi';
import { GrStatusGood } from 'react-icons/gr';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
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
		value: 'rishabhtanwar2000@gmail.com',
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
		title: 'Fast',
		description:
			'Fast load times and lag free interaction, my highest priority.I give importance to the impact of design and develop accordingly.',
	},
	{
		icon: <PiDevicesBold />,
		title: 'Responsive',
		description:
			'Resposive web designes which will work smoothly on every screen be it small, medium or large.',
	},
	{
		icon: <GrStatusGood />,
		title: 'Easy',
		description:
			'Developed designs and UI is very easy to understand and you can navigate through all the features easily without any issue.',
	},
	{
		icon: <HiOutlineRocketLaunch />,
		title: 'Optimized',
		description:
			'optimized for different devices, browsers, data speed, search  engines, and users.',
	},
];

export const skillArrayA = [
	{
		label: 'ReactJS',
		percentage: '90%',
	},
	{
		label: 'JavaScript',
		percentage: '85%',
	},
	{
		label: 'Java',
		percentage: '85%',
	},
	{
		label: 'Redux',
		percentage: '80%',
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
		label: 'Bootstrap',
		percentage: '80%',
	},
	{
		label: 'Responive Web Design',
		percentage: '90%',
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
		name: 'Web Magic- Freelancer template',
		description:
			'Developed a template using front end technologies to help businesses to enhance their productivity and grow using website and explore the power of internet. ',
		link: 'https://webmagic.netlify.app/',
		image: project3,
	},
	{
		id: '03',
		name: "Let's Get It Done",
		description:
			'Created a stylish, easy to navigate and use to do list using web develoment using which you can prioritize your work and personal tasks.',
		link: 'https://letsgetitdone.netlify.app/',
		image: project4,
	},
];
