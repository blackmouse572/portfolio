import { Resume } from '@/types/resume';
import { parse } from 'date-fns';

export const resume: Resume = {
  basics: {
    name: 'Nguyen Tuan Ngoc',
    altName: 'Jaden Nguyen',
    label: 'Software Engineer',
    image: '/avatar_1.jpg',
    email: 'ngocnt.job@gmail.com',
    phone: '0522064576',
    summary: `I am software engineer with expertise in multiple frameworks such as Nextjs, React, Nestjs, Sass, Tailwindcss, Bootstrap, Styled-component, Java Serverlet, and Material UI with mobile development (Flutter).When it comes to version control, I have extensive experience working with Git and am adept at utilizing both Github and GitLab, including git conversion processes. I also possess a strong understanding of continuous integration and continuous deployment (CI/CD) methodologies, and I am knowledgeable in leveraging AWS, Kubernetes, and Docker for efficient deployment and scaling of applications.
 `,
    location: {
      address: 'Da Nang, Viet Nam',
      postalCode: '',
      city: 'Da Nang',
      countryCode: '',
      region: 'Viet Nam',
    },
    profiles: [
      {
        network: 'Github',
        username: 'blackmouse572',
        url: 'https://github.com/blackmouse572',
      },
      {
        network: 'LinkedIn',
        username: 'Tuan Ngoc Nguyen',
        url: 'https://www.linkedin.com/in/tu%E1%BA%A5n-ng%E1%BB%8Dc-nguy%E1%BB%85n-987782248/',
      },
    ],
    url: 'https://ngocnt.dev',
  },
  work: [
    {
      name: 'FPT Software',
      position: 'Intern Devops Engineer',
      startDate: parse('2023-01-01', 'yyyy-MM-dd', new Date()),
      endDate: parse('2023-03-01', 'yyyy-MM-dd', new Date()),
      summary:
        "This is the first time I've worked with a large company. I have learned a lot of things about the process of building a large-scale project. I also learned a lot about the process of working in a team. I have learned a lot of new technologies such as: Docker, Kubernetes, AWS, CI/CD, ...",
      highlights: [
        'Designed and build a fully automated CICD pipeline for a NodeJs server. The pipeline is built with Github Actions, Docker, and Kubernetes. The pipeline is able to build, test, and deploy the server to the production environment automatically. The pipeline is also able to rollback to the previous version if the new version has any problem.',
        'Reduce deployment time from 30 minutes to 5 minutes',
        'Reduce the number of deployment errors by 90%',
      ],
      url: 'https://fptdanang.pro/gioi-thieu-fpt-software-da-nang.html',
    },
    {
      name: '123host',
      position: 'System Copywriter',
      startDate: parse('2021-11-01', 'yyyy-MM-dd', new Date()),
      endDate: parse('2022-7-01', 'yyyy-MM-dd', new Date()),
      url: 'https://123host.vn/community/user/ngocvlqt1995/tutorial/',
      highlights: [
        'I have learned a lot about how to write a good article, how to use SEO to make the article, and how to work with unix system.',
      ],
      summary:
        "This is the first job that I have ever had. I'm responsible for writing articles about linux server'services like webmail, SSH keys, nginx, etc.",
    },
    {
      name: 'GDSC FPTU Da Nang',
      position: 'Technical Lead',
      startDate: parse('2022-08-01', 'yyyy-MM-dd', new Date()),
      endDate: parse('2023-01-01', 'yyyy-MM-dd', new Date()),
      url: 'https://www.facebook.com/gdsc.fptudn',
      summary: `Google Developer Student Clubs (GDSC) is a program that helps students grow their knowledge on developer technologies and more through peer-to-peer workshops and events, and gain relevant industry experience through hands-on projects. I'm one of the key members of the club that is responsible for building the website and managing the club's activities.`,
      highlights: [
        'Brings together student developers from all over Da nag and encourages them to solve real-world problems.',
        'Organize events and workshops to help students grow their knowledge on developer technologies.',
        "Traning students' soft skills such as communication, teamwork, and leadership.",
        "Traning students' hard skills such as programming, design, and project management.",
      ],
    },
    {
      name: 'Avepoint',
      position: 'Frontend Developer',
      startDate: parse('2023-09-05', 'yyyy-MM-dd', new Date()),
      url: 'https://www.avepoint.com/about',
      summary:
        'Avepoint is a company that provides cloud management software solutions to accelerate digital transformation success. In order to IPO in the Japan market, Avepoint needs to deliver some online services to their customers. I am one of the key members of the team that is responsible for building the services.',
      highlights: [
        "Team size: 10 members. I'm responsible for intergrate UI with the backend.",
        "One of 3 keys product for Japan market is Avepoint's website. ",
        'Top 3 performance members for 6 months in a row.',
        'Response for handling cache system to improve the performance of the website.',
        'Upgrade the exisiting system from React 16 to 18 in 3 months',
      ],
    },
    {
      name: 'Avepoint',
      position: 'Lead Frontend Developer',
      startDate: parse('2024-08-01', 'yyyy-MM-dd', new Date()),
      url: 'https://www.avepoint.com/about',
      summary:
        'Avepoint is a international company that have more than 2000 employees. Onboard and offboard more than 1000 employees per year. To optimize the process, Avepoint needs to deliver an HR system to their employees. As a highskill with good performance, I am being chosen to lead an interal team to build the system.',
      highlights: [
        "Team size: 12 members. The main responsibility is to build the frontend of the system. However, I'm also responsible design and develop the backend system.",
        'Internal project that is used by more than 2000 employees',
        'Core-members that is responsible for the base UI-system and DX',
      ],
    },
  ],
  volunteer: [],
  education: [
    {
      institution: 'FPT University',
      area: 'Software Engineering',
      courses: [],
      startDate: parse('2020-09-01', 'yyyy-MM-dd', new Date()),
      endDate: parse('2024-06-01', 'yyyy-MM-dd', new Date()),
      score: '3.5',
      studyType: 'Bachelor',
      url: 'https://daihoc.fpt.edu.vn/',
    },
  ],
  awards: [],
  certificates: [
    {
      issuer: 'University of Michigan',
      name: 'User Experience Research and Design Specialization',
      url: 'https://coursera.org/share/a102f93a21658dc92c391df4e17c2fde',
      date: parse('2023-11-26', 'yyyy-MM-dd', new Date()),
    },
    {
      issuer: 'Google',
      name: 'Google Project Management Specialization',
      url: 'https://coursera.org/share/bb858b7f50fa4c5c85716ca27363228d',
      date: parse('2023-11-26', 'yyyy-MM-dd', new Date()),
    },
    {
      issuer: 'University of Minnesota',
      name: 'Software Development Lifecycle',
      url: 'https://coursera.org/share/7d44fc23641d2f64d40146c6e213963b',
      date: parse('2022-07-22', 'yyyy-MM-dd', new Date()),
    },
    {
      issuer: 'University of Maryland, College Park',
      name: 'Entrepreneurship: Launching an Innovative Business',
      url: 'https://coursera.org/share/198dc3d5ece941e58b87530468f86529',
      date: parse('2023-07-01', 'yyyy-MM-dd', new Date()),
    },
    {
      issuer: 'CertNexus',
      name: 'CertNexus Certified Ethical Emerging Technologist',
      url: 'https://coursera.org/share/e3734373bdebed62fe48ada0c68aeb02',
      date: parse('2022-11-30', 'yyyy-MM-dd', new Date()),
    },
    {
      issuer: 'University of Colorado System',
      name: 'Computer Communications Specialization',
      url: 'https://coursera.org/share/e50e5186149eec9907bf1c58d30d8e8c',
      date: parse('2021-11-04', 'yyyy-MM-dd', new Date()),
    },
  ],
  publications: [],
  skills: [
    {
      keywords: [
        'Nextjs',
        'React',
        'Nestjs',
        'Java Serverlet',
        'ASP.NET',
        'Flutter',
        'React-Native',
        'Express',
        'Vue',
        'Angular',
      ],
      level: 'Advanced',
      name: 'Framework',
    },
    {
      keywords: ['Dart', 'Java', 'C#', 'C++', 'Javascript', 'Typescript', 'Go'],
      level: 'Advanced',
      name: 'Programming Language',
    },
    {
      keywords: ['Git', 'Github', 'Gitlab', 'CI/CD', 'Docker', 'Kubernetes', 'AWS'],
      level: 'Advanced',
      name: 'Devops',
    },
    {
      keywords: ['Scrum', 'Agile'],
      level: 'Advanced',
      name: 'Methodology',
    },
    {
      keywords: ['Sass', 'Tailwindcss', 'Bootstrap', 'Styled-component', 'Material UI'],
      level: 'Advanced',
      name: 'CSS Framework',
    },
    {
      keywords: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
      level: 'Advanced',
      name: 'Database',
    },
    {
      keywords: ['Google Analytics', 'Google Drive', 'Google Calendar', 'Google Form'],
      level: 'Advanced',
      name: 'Google Services',
    },
  ],
  languages: [
    {
      language: 'English',
      fluency: 'Professional working',
    },
    {
      language: 'Vietnamese',
      fluency: 'Native',
    },
    {
      language: 'Japanese',
      fluency: 'Elementary',
    },
    {
      language: 'Chinese',
      fluency: 'Elementary',
    },
  ],
  interests: [],
  references: [],
  projects: [
    {
      name: 'GDSC FPTU Da Nang Website',
      description: "An FPT GDSC's information web center to provide details about the club and its activities",
      url: 'https://gdsc-fptu-danang.vercel.app/',
      highlights: [
        "Team size: 10 members. I'm responsible for leading the team and building the website.",
        'The website is built with Nextjs, Tailwindcss, and Strapi.',
        "Intergrate with Google's services such as Google Analytics, Google Drive, Google Calendar, Google Form, ...",
        'CICD pipeline is built with Github Actions, Docker. The pipeline is able to build, test, and deploy the server to the production environment automatically. The pipeline is also able to rollback to the previous version if the new version has any problem.',
      ],
      startDate: parse('2021-08-01', 'yyyy-MM-dd', new Date()),
    },
    {
      name: "Avepoint's Document Management System",
      description:
        'A application built for managing and systemizing documents. Leverage by pipeline and automation for the best performance and user experience.',
      url: 'https://www.avepoint.com/sg/solutions/document-management',
      highlights: [
        "Team size: 10 members. I'm responsible for building the frontend of the services.",
        "One of the keys products at Japan market is Avepoint's website. ",
        'Response for cache and route module',
        'Advance migration from React 16 to 18',
      ],
      startDate: parse('2023-09-05', 'yyyy-MM-dd', new Date()),
    },
    {
      name: 'Necter',
      description:
        'A mobile application for connecting bussiness to bussiness. Create connection from who need to who can do.',
      url: '',
      highlights: [
        "Team size: 10 members. I'm responsible for building the frontend of the services.",
        "One of the keys products at Japan market is Avepoint's website. ",
        'Response for cache and route module',
        'Advance migration from React 16 to 18',
      ],
      startDate: parse('2022-09-05', 'yyyy-MM-dd', new Date()),
      endDate: parse('2023-09-05', 'yyyy-MM-dd', new Date()),
    },
    {
      name: "Digital Artist's Portfolio",
      description: 'A portfolio for digital artist to show their work. A gallery for people to enjoy the art.',
      url: 'https://hoanganhportfolio.vercel.app/',
      highlights: [],
      startDate: parse('2021-09-05', 'yyyy-MM-dd', new Date()),
      endDate: parse('2021-09-05', 'yyyy-MM-dd', new Date()),
    },
    {
      name: 'Quizlearner',
      description:
        'A quiz app for learning, testing, and sharing knowledge. Classroom to share and play games. Competition to compete with other people.',
      url: 'https://quizler-fe-neon.vercel.app/',
      highlights: [],
      startDate: parse('2024-01-01', 'yyyy-MM-dd', new Date()),
      endDate: parse('2024-03-05', 'yyyy-MM-dd', new Date()),
    },
    {
      name: 'HRIS System for Avepoint',
      description: "A internal system for Avepoint's employees to manage their information.",
      url: '',
      highlights: [],
      startDate: parse('2024-08-01', 'yyyy-MM-dd', new Date()),
      endDate: parse('2024-08-01', 'yyyy-MM-dd', new Date()),
    },
  ],
};
