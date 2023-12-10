'use client';
import { fadeinAnimation } from '@/constraints/fadeinAnimate';
import Content from '@components/About/Content';
import ImageHover from '@components/ImageHover';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

function About() {
  return (
    <div>
      <div className="lg:px-8 pt-24 lg:pt-36 min-h-screen  md:px-5 relative ">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="w-full h-full flex items-end px-1 ">
            <div className="h-full pb-6 px-4 lg:px-0">
              <h3 className="top-0 font-sans text-4xl lg:text-6xl uppercase  font-black tracking-tight px-2 ">
                ABOUT
                <span className="opacity-10 text-black pl-4">&#47;&#47;</span>
              </h3>
            </div>
          </div>
          {/* About section */}
          <Content title="Hello👋" className="grid grid-cols-3">
            <section className="md:space-y-4 leading-loose col-span-2 space-y-2 px-2 md:px-0">
              <p className="min-h-max">
                My name is <strong className="hover:underline hover:decoration-2 ">🧑‍💼 Nguyen Tuan Ngoc.</strong>
              </p>
              <p>
                I&rsquo;m a full-stack developer. Since I like want to learn new things, I&rsquo;m always looking for
                new opportunities to learn and grow. My passion is to create beautiful and intuitive App and Website.
              </p>
              <p>
                I see my self as a <span className="hightlight">adventure developer</span>. Everyday I&rsquo;m looking
                for new challenges. And because of that, I have experience with some different languages, frameworks and
                aspect. Such as:
              </p>
              <ul className="ml-2">
                <li>
                  💎 <strong>Mobile:</strong> Flutter, React Native
                </li>
                <li>
                  💎 <strong>Web:</strong> Reactjs, Nextjs, Emberjs, Vue
                </li>
                <li>
                  💎 <strong>Backend:</strong> ASP.NET, Nodejs, Rust, Golang
                </li>
                <li>
                  💎 <strong>Database:</strong> MySQL, MongoDB, Firebase, Postgres
                </li>
                <li>
                  💎 <strong>Cloud related:</strong> AWS, CICD, Docker, K8s
                </li>
                <li>
                  💎 <strong>Others:</strong> Project Manager, Jira, Trello, Srumb, Agile
                </li>
              </ul>
              <p>
                Also, i have some side experience like&nbsp;
                <span className="strong font-bold">Figma, Photoshop, Illustrator, After Effect</span>
              </p>
            </section>
            <section className="w-full mx-auto relative h-full">
              <div className="sticky top-0">
                <ImageHover
                  alt="avatar"
                  src={'/avatar_1.jpg'}
                  describe="This is me at FPT University 🎒"
                  height={2048}
                  width={1536}
                  href=""
                />
              </div>
            </section>
          </Content>
          <hr className="border-b border-gray-200" />
          {/* End about section */}
          {/* Achivement section */}
          <AnimatePresence mode="wait">
            <Content title="Achivement 🏅" className="space-y-12">
              <div className="grid grid-cols-3">
                <ImageHover
                  alt="SolFest"
                  src={'/Events/SolFest.jpg'}
                  describe="SolFest 🔥🔥"
                  height={1577}
                  width={2738}
                  href=""
                />
                <section className="space-y-4 leading-loose col-span-2">
                  <motion.h5
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-xl bg-black/60 text-white w-fit px-4"
                  >
                    <span className="opacity-30 text-white pl-4 ">&#47;&#47;</span> SolFest (07-11-2020 ➡️ 08-11-2020)
                  </motion.h5>
                  <motion.p
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-3 md:px-0"
                  >
                    ❇️ Solfest is a solution contest, where you can solve problems in different ways. I was a leader in
                    the
                    <span className="hightlight">TimeLỏd</span> and place the 2nd in the contest.
                  </motion.p>
                  <motion.p
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-3 md:px-0"
                  >
                    ❇️ Through this competition, I have learned a lot about how to lead a team and how to work with
                    other. And, I was trained to create and present a good pitching.
                  </motion.p>
                </section>
              </div>
              <hr className="border-1 border-black w-3/4 mx-auto bg-black rounded-full" />
              <div className="grid grid-cols-3 ">
                <section className="col-span-2 ">
                  <motion.h5
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-xl bg-black/60 text-white w-fit px-4"
                  >
                    <span className="opacity-30 text-white pl-4 ">&#47;&#47;</span> Techtips Copywriter (10-11-2020 ➡️
                    10-12-2020)
                  </motion.h5>
                  <motion.p
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-3 md:px-0"
                  >
                    ❇️ I&rsquo;m responsible for the IT section, through that, I have discovered a lot about IT section.
                    From AI to the new technologies,
                  </motion.p>
                  <motion.p
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-3 md:px-0"
                  >
                    ❇️ Like a charm, I have found some favourite technologies and frameworks that applied to many my
                    project till now .
                  </motion.p>
                </section>
                <ImageHover
                  alt="SolFest"
                  src={'/Events/TechTips.png'}
                  describe="TechTips 💪💪"
                  height={924}
                  width={1640}
                  href=""
                />
              </div>

              <hr className="border-1 border-black w-3/4 mx-auto bg-black rounded-full" />

              <div className="grid grid-cols-3">
                <ImageHover
                  alt="SolFest"
                  src={'/Events/123host.png'}
                  describe="123host 🌐"
                  height={1577}
                  width={2738}
                  href=""
                />
                <section className="space-y-4 leading-loose col-span-2">
                  <motion.h5
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-xl bg-black/60 text-white w-fit px-4"
                  >
                    <span className="opacity-30 text-white pl-4 ">&#47;&#47;</span> Copywritter for 123host.vn
                    (20/11/2021 ➡️ 1/7/2022)
                  </motion.h5>
                  <motion.p
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-3 md:px-0"
                  >
                    ❇️ This is the first job that I have ever had. I&rsquo;m responsible for writing articles about
                    linux server&apos;services like webmail, SSH keys, nginx, etc.
                  </motion.p>
                  <motion.p
                    variants={fadeinAnimation.left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-3 md:px-0"
                  >
                    ❇️ I have learned a lot about how to write a good article, how to use SEO to make the article, and
                    how to work with unix system. You can view my section at{' '}
                    <Link
                      passHref
                      className="hightlight"
                      href={'https://123host.vn/community/user/ngocvlqt1995/tutorial/'}
                    >
                      <span className="hightlight cursor-pointer hover:underline">123host.vn</span>
                    </Link>
                  </motion.p>
                </section>
              </div>
            </Content>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default About;
