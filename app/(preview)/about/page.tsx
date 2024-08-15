import ProjectCard from '@/(preview)/about/components/project-card';
import Sidebar from '@/(preview)/about/components/sidebar';
import { resume } from '@/(preview)/about/constants';
import { Button } from '@components/button';
import HeaderTitle from '@components/header';
import Icons from '@components/icons';
import { format, isAfter } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

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
                        <Link href={work.url} className="flex gap-1 items-center hover:underline">
                          <Icons.Link className="size-4" />
                          <h4 className="text-base font-bold">
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
                    <Link href={education.url} className="flex gap-1 items-center hover:underline">
                      <Icons.Link className="size-4" />
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
