import ProjectCard from '@/(preview)/about/components/project-card';
import Sidebar from '@/(preview)/about/components/sidebar';
import { Resume } from '@/types/resume';
import { Button } from '@components/button';
import HeaderTitle from '@components/header';
import Icons from '@components/icons';
import { format, isAfter, parse } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
const resume: Resume = {
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
      position: 'Devops Engineer',
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
      name: 'GDSC FPTU Da Nang ',
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
        "Team size: 10 members. I'm responsible for building the frontend of the services.",
        "One of the keys products at Japan market is Avepoint's website. ",
        'Response for cache and route module',
        'Advance migration from React 16 to 18',
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
  ],
};

const Navkeys = {
  Education: 'education',
  Summary: 'basics',
  Skills: 'skills',
  Experience: 'work',
  Projects: 'projects',
  Languages: 'languages',
  Certificates: 'certificates',
};

const SidebarItems = [
  {
    label: 'Summary',
    icon: <Icons.Home />,
    href: Navkeys.Summary,
  },
  {
    label: 'Work',
    icon: <Icons.Work />,
    href: Navkeys.Experience,
  },
  {
    label: 'Education',
    icon: <Icons.Education />,
    href: Navkeys.Education,
  },
  {
    label: 'Certificates',
    icon: <Icons.Certificate />,
    href: Navkeys.Certificates,
  },
  {
    label: 'Projects',
    icon: <Icons.Perspective />,
    href: Navkeys.Projects,
  },
  {
    label: 'Skills',
    icon: <Icons.SourceCode />,
    href: Navkeys.Skills,
  },
  {
    label: 'Languages',
    icon: <Icons.Language />,
    href: Navkeys.Languages,
  },
];

function renderDate(startDate: Date, endDate?: Date) {
  const start = format(startDate, 'MM-yyyy');
  const end = endDate ? format(endDate, 'MM-yyyy') : 'Now';
  if (start === end) return start;
  return `${start} - ${end}`;
}

function About() {
  //Sort by date
  resume.work.sort((a, b) => (isAfter(a.startDate, b.startDate) ? -1 : 1));
  resume.education.sort((a, b) => (isAfter(a.startDate, b.startDate) ? -1 : 1));
  resume.certificates.sort((a, b) => (isAfter(a.date, b.date) ? -1 : 1));

  return (
    <main className="font-mono mb-12">
      <div className="lg:px-8 pt-24 lg:pt-36 min-h-screen md:px-5 relative container">
        <HeaderTitle title="ABOUT" />
        <article className="space-y-12">
          <div className="flex justify-between">
            <div className="h-full flex flex-col justify-stretch gap-2">
              <h1 className="text-lg md:text-3xl font-bold">
                {resume.basics.name}{' '}
                <span className="text-neutral-500 sm:inline-block block">({resume.basics.altName})</span>
              </h1>
              <div className="text-neutral-500">
                <h3 className="text-sm md:text-lg">{resume.basics.label}</h3>
                <ul className="text-sm md:text-base">
                  <li>
                    <Icons.World className="h-4 inline-block mr-2" />
                    <span>{resume.basics.location.address}</span>
                  </li>
                  <li>
                    <Icons.Phone className="h-4 inline-block mr-2" />
                    <span>{resume.basics.phone}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 hidden md:block">
                <ul className="text-neutral-500 flex gap-2">
                  {resume.basics.profiles.map((profile) => {
                    const Icon = Icons[(profile.network as keyof typeof Icons) ?? 'Link'];
                    return (
                      <li key={profile.username + profile.network}>
                        <Link href={profile.url} target="_blank">
                          <Button variant={'outline'} className="flex items-center gap-2">
                            <Icon className="size-5" /> <span>{profile.network}</span>
                          </Button>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <Image
              src={resume.basics.image}
              width={1920}
              height={1080}
              alt={resume.basics.name}
              className="w-44 aspect-square object-cover rounded-md"
            />
          </div>
          <div className="mt-3 md:hidden">
            <ul className="text-neutral-500 flex gap-2">
              {resume.basics.profiles.map((profile) => {
                const Icon = Icons[(profile.network as keyof typeof Icons) ?? 'Link'];
                return (
                  <li key={profile.username + profile.network}>
                    <Link href={profile.url} target="_blank">
                      <Button variant={'outline'} size={'icon'}>
                        <Icon />
                      </Button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <section className="space-y-2 section" id={Navkeys.Summary}>
            <h3 className="text-2xl font-bold tracking-wide font-sans">Summary</h3>
            <p className="indent-2 text-base leading-relaxed text-neutral-600">{resume.basics.summary}</p>
          </section>

          <section className="space-y-4 section" id={Navkeys.Experience}>
            <h3 className="text-2xl font-bold tracking-wide font-sans">Works experience</h3>

            <div className="space-y-6">
              {resume.work.map((work) => (
                <div key={work.name + work.position} className="space-y-2">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col">
                      {work.url === '' ? (
                        <h4 className="text-base font-bold">
                          {work.name} - {work.position}
                        </h4>
                      ) : (
                        <Link href={work.url}>
                          <h4 className="text-base font-bold hover:underline">
                            {work.name} - {work.position}
                          </h4>
                        </Link>
                      )}
                    </div>
                    <hr className="hidden md:inline-block flex-1 ml-8 rounded-full border border-neutral-500" />
                    <div className="text-sm text-neutral-500 rounded-full border-neutral-500 px-1.5 border-2 py-1">
                      {renderDate(work.startDate, work.endDate)}
                    </div>
                  </div>
                  <p className="text-neutral-700">
                    <span className="text-base">{work.summary}</span>
                  </p>
                  <ul className="list-disc list-inside">
                    {work.highlights.map((highlight) => (
                      <li key={highlight} className="text-neutral-600">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2  " id={Navkeys.Education}>
            <h3 className="text-2xl font-bold tracking-wide font-sans">Education</h3>
            {resume.education.map((education) => (
              <div key={education.institution + education.studyType} className="space-y-2">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <Link href={education.url}>
                      <h4 className="text-base font-bold hover:underline text-center md:text-left">
                        {education.institution} - {education.studyType}
                      </h4>
                    </Link>
                    <p className="text-base text-neutral-600 text-center md:text-left">{education.area}</p>
                  </div>
                  <hr className="hidden md:inline-block flex-1 ml-8 rounded-full border border-neutral-500" />
                  <div className="text-sm text-neutral-500 rounded-full border-neutral-500 px-1.5 border-2 py-1">
                    {renderDate(education.startDate, education.endDate)}
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section className="space-y-2" id={Navkeys.Certificates}>
            <h3 className="text-2xl font-bold tracking-wide font-sans">Certificates</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 grid-cols-1">
              {resume.certificates.map((certificate) => (
                <ProjectCard
                  key={certificate.name}
                  href={certificate.url}
                  title={certificate.name}
                  description={certificate.issuer}
                  tags={[format(certificate.date, 'MM-yyyy')]}
                />
              ))}
            </div>
          </section>
          <section className="space-y-2" id={Navkeys.Projects}>
            <h3 className="text-2xl font-bold tracking-wide font-sans">Projects</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 grid-cols-1">
              {resume.projects.map((project) => {
                const withIndicator = project.endDate ? isAfter(project.endDate, new Date()) : true;
                return (
                  <ProjectCard
                    key={project.name}
                    href={project.url}
                    title={project.name}
                    indicator={withIndicator}
                    description={project.description}
                    tags={[]}
                  />
                );
              })}
            </div>
          </section>
          <section className="space-y-2" id={Navkeys.Skills}>
            <h3 className="text-2xl font-bold tracking-wide font-sans">Skills</h3>
            <div className="space-y-2">
              {resume.skills.map((skill) => (
                <div key={skill.name}>
                  <h4 className="text-base font-bold">{skill.name}</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {skill.keywords.map((keyword) => (
                      <span key={keyword} className="text-xs text-white bg-neutral-700 rounded-md px-2 py-1.5">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id={Navkeys.Languages}>
            <h3 className="text-2xl font-bold tracking-wide font-sans">Languages</h3>
            <div className="space-y-2">
              {resume.languages.map((language) => (
                <div key={language.language}>
                  <h4 className="text-base font-bold">{language.language}</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-xs text-white bg-neutral-700 rounded-md px-2 py-1.5">{language.fluency}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
      <Sidebar items={SidebarItems} className="hidden xl:inline-block md:fixed left-10 shadow-md" />
    </main>
  );
}

export default About;
