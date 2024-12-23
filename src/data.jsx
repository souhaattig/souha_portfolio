import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink, FiLink } from 'react-icons/fi';

import Work1 from './assets/work1.jpg';
import Work2 from './assets/work2.jpg';
import Work3 from './assets/work3.jpg';
import Work4 from './assets/work4.png';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/work6.jpg';
import Work7 from './assets/work7.jpg' ; 
import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/souha_portfolio',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Souha',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'ATTIG',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '24 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Tunisian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: '5000 Monastir, Tunisie',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+216 50 770 447',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'souhaattig44@gmail.com',
  },

  {
    id: 9,
    title: 'linkedin : ',
    description: 'Souha_Attig',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Arabic, French, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '9+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '2+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '3+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024',
    title: 'End-of-Study Internship (Master) <span> LEANIOS Tunisia </span>',
    desc: `. Development of an IoT dashboard.<br />
           . Complete redesign of a website and a platform to enhance user experience and modernize the design. <br />
            Keywords: C++, DHT11 sensor, energy sensor, HTML, Tailwind CSS, Ruby, Figma , JavaScript , Ruby ,next js.`,
  },
  
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Internship <span>  Access Sap Paris (Remote) </span>',
    desc: `Graphic integration of the member area for the "Accès Sap" web project, ensuring full compliance with provided mockups and accessibility standards.
    <br /> Keywords: HTML, CSS, JavaScript, Jira, Jest.`

  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - 2023',
    title: 'Web Developer <span>  WEBSPIRIT TUNISIA </span>',
    desc: `As part of a team composed of a web project manager and developers, I participated in various client projects as a freelancer:
    <br /> . Maintenance and improvement of the front-end for e-commerce platforms.
    <br /> . Front-end development of showcase websites, with the creation of admin dashboards deployed on an Ubuntu environment.
    <br /> . Design and development of the user interface for a web-based appointment management application, incorporating advanced scheduling features and real-time notifications.
    Keywords: React.js, HTML, CSS, Bootstrap, Postman, Node.js, Express.js, MySQL, Ubuntu, Material-UI, Jest.`
    
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: " Licence Degree Internship <span> WEGO </span>",
    desc: "Design and development of an e-learning platform. <br /><strong> Keywords: StarUML, Symfony 5, API Platform, HTML, CSS, SCSS, Bootstrap, React.js.</strong>",
  },

  {
    id: 5,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Advanced Internship <span> LEADERPOS </span>',
    desc: "Development of a Car Rental Web Application. <br /> Keywords : StarUml , Symfony4 , HTML , CSS , SCSS , Bootsrap . ",
  },



  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022 - 2024',
    title: 'Master Degree <span> Higher Institute of Technological Studies of Mahdia, Tunisia </span>',
    desc: "Master's Degree in Co-construction of IoT Services Development (Professional Master 2).",
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019 - 2022',
    title: "Applied Bachelor's Degree in Information Technology, specializing in Web and Multimedia Development. <span> Higher Institute of Technological Studies, Mahdia, Tunisia </span>",
    desc: "Applied Bachelor's Degree in Computer Science, specializing in Web Development and Multimedia.",
  }, 

  
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '99',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css & scss',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Tailwind CSS',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '70',
  },

  {
    id: 5,
    title: 'React',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Angular',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Node js',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Symfony',
    percentage: '70',
  },

  {
    id: 8,
    title: 'MySQL',
    percentage: '60',
  },
  {
    id: 9,
    title: 'MongoDB',
    percentage: '60',
  },
  {
    id: 10,
    title: 'Jest & Mocha',
    percentage: '80',
  },


  {
    id: 13,
    title: 'Postman',
    percentage: '90',
  },
  {
    id: 14,
    title: 'Jira',
    percentage: '70',
  },

  {
    id: 14,
    title: 'WordPress',
    percentage: '70',
  },

  {
    id: 14,
    title: 'Bach',
    percentage: '70',
  },

    {
  id: 14,
  title: 'Yaml',
  percentage: '70',
},

{
  id: 14,
  title: 'Jenkins',
  percentage: '50',
},
{
  id: 14,
  title: 'Nginx',
  percentage: '50',
},

{
  id: 14,
  title: 'Docker',
  percentage: '50',
},
{
  id: 14,
  title: 'Gitlab CI/CD',
  percentage: '50',
},
];

export const portfolio = [ 
  
  {
    id: 1,
    img: Work1,
    title: 'Boucherie',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Boucherie en ligne',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'WEBSPIRIT',
      },
      {
        icon: <FaCode />,
        title: 'Technologies : ',
        desc: 'React, JavaScript, HTML, CSS, SCSS, Express.js',
      },
      {
        icon: <FiLink />,  // Vous pouvez utiliser un autre icône pour le lien, par exemple FiLink
        title: 'Site : ',
        desc: (
          <a href="https://www.charcuterie-maisonporte.fr/" target="_blank" rel="noopener noreferrer">
            Visiter le site
          </a>
        ),
      },
    ],
  }
,  
{
  id: 2,
  img: Work2,
  title: 'La cuisine de Benoit',
  details: [
    {
      icon: <FiFileText />,
      title: 'Project : ',
      desc: 'Service de traiteur et boutique en ligne',
    },
    {
      icon: <FiUser />,
      title: 'Client : ',
      desc: 'WEBSPIRIT',
    },
    {
      icon: <FaCode />,
      title: 'Technologies : ',
      desc: 'React, JavaScript, HTML, CSS, SCSS, PHP',
    },
    {
      icon: <FiLink />,  // Vous pouvez utiliser FiLink pour l'icône de lien
      title: 'Site : ',
      desc: (
        <a href="https://www.belgytraiteur.com/" target="_blank" rel="noopener noreferrer">
          Visiter le site
        </a>
      ),
    },
  ],
}
,
{
  id: 3,
  img: Work3,
  title: 'Traiteur Dance',
  details: [
    {
      icon: <FiFileText />,
      title: 'Project : ',
      desc: 'Site web pour restaurant , Boucherie & Charcuturie avec réservation',
    },
    {
      icon: <FiUser />,
      title: 'Client : ',
      desc: 'WEBSPIRIT',
    },
    {
      icon: <FaCode />,
      title: 'Technologies : ',
      desc: 'React, JavaScript, HTML, CSS, SCSS, Express.js',
    },
    {
      icon: <FiLink />,  // Icône représentant le lien
      title: 'Site : ',
      desc: (
        <a href="https://www.traiteur-dance.fr/" target="_blank" rel="noopener noreferrer">
          Visiter le site
        </a>
      ),
    },
  ],
}
, 

{
  id: 3,
  img: Work7,
  title: 'Boulangerie',
  details: [
    {
      icon: <FiFileText />,
      title: 'Project : ',
      desc: 'Site web pour Boucherie',
    },
    {
      icon: <FiUser />,
      title: 'Client : ',
      desc: 'WEBSPIRIT',
    },
    {
      icon: <FaCode />,
      title: 'Technologies : ',
      desc: 'React, JavaScript, HTML, CSS, SCSS, Express.js',
    },
    {
      icon: <FiLink />,  // Icône représentant le lien
      title: 'Site : ',
      desc: (
        <a href="https://www.boulangerie-des-3-marches.com/" target="_blank" rel="noopener noreferrer">
          Visiter le site
        </a>
      ),
    },
  ],
}
, 
{
  id: 1,
  img: Work6,
  title: 'Vauloup',
  details: [
    {
      icon: <FiFileText />,
      title: 'Project : ',
      desc: 'Traiteur pour mariage',
    },
    {
      icon: <FiUser />,
      title: 'Client : ',
      desc: 'WEBSPIRIT',
    },
    {
      icon: <FaCode />,
      title: 'Technologies : ',
      desc: 'React, JavaScript, HTML, CSS, SCSS, Express.js',
    },
    {
      icon: <FiLink />,  // Icône représentant le lien
      title: 'Site : ',
      desc: (
        <a href="https://www.vauloup-traiteur.fr/" target="_blank" rel="noopener noreferrer">
          Visiter le site
        </a>
      ),
    },
  ],
}
 , 

  {
    id: 4,
    img: Work4,
    title: 'LEANIOS',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'LEANIOS REDESIGN',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'LEANIOS',
      },
      {
        icon: <FaCode />,
        title: 'Technologies : ',
        desc: 'React, JavaScript, HTML, CSS, SCSS, Figma (design)',
      },
    ],
  },



  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
