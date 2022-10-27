import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LinkContact from "../../components/Contact/linkContact";
import { ProjectContent, ProjectType } from "../../constrants/project";
export async function getStaticPaths() {
  //Get project id from file
  const projectIds = ProjectContent.map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });
  return {
    paths: projectIds,
    fallback: false,
  };
}
const containerfloatInVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,

      duration: 1,
      ease: "easeInOut",
    },
  },
};
const floatInVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export async function getStaticProps({ params }: { params: { id: string } }) {
  const project = ProjectContent.find((project) => project.id === params.id);
  return {
    props: {
      project,
    },
  };
}

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className="flex flex-col justify-center items-center xl mb-12">
      <div className="w-4/5 max-w-2xl ">
        <div className="w-full h-2/4 object-contain relative">
          <motion.div
            className="absolute top-0 -left-5 z-20 cursor-pointer bg-black/30"
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
              transition: {
                duration: 0.5,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            }}
          >
            {/* Go back */}
            <Link href="/Project" passHref>
              <h3 className="font-sans text-xl lg:text-2xl uppercase  font-black tracking-tight px-2 text-white">
                GO BACK
                <span className="opacity-10 text-black pl-4">&#47;&#47;</span>
              </h3>
            </Link>
          </motion.div>
          <Image src={project.image} alt={project.title} layout="responsive" width={200} height={100} />
        </div>
        <motion.div className="" variants={containerfloatInVariants} animate={"visible"} initial={"hidden"}>
          <motion.h1 variants={floatInVariants} className="text-5xl font-bold text-center font-mono mb-4 mt-12">
            {project.title}
          </motion.h1>
          {project.description.map((desc, index) => {
            return (
              <motion.p key={`desc${index}`} variants={floatInVariants} className="text-xl font-mono">
                {desc}
              </motion.p>
            );
          })}
          <h2 className="mt-5 font-bold text-3xl font-mono">🌿What I learned:</h2>
          {project.whatILearned.map((learn, index) => {
            return (
              <motion.p key={`learn${index}`} variants={floatInVariants} className="text-xl font-mono">
                {learn}
              </motion.p>
            );
          })}
        </motion.div>
        {project.github && (
          <LinkContact
            href={project.github}
            className="w-full space-x-4 h-32"
            icon={faGithub}
            name={"View source"}
            size={"2x"}
            color={"darkblue"}
            direction={"left"}
          />
        )}
        {project.link && (
          <LinkContact
            href={project.link}
            className="w-full space-x-4 h-32"
            icon={faLink}
            name={"View site"}
            size={"2x"}
            color={"darkblue"}
            direction={"left"}
          />
        )}
      </div>
    </div>
  );
}
