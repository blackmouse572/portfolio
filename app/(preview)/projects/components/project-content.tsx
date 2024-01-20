'use client';

import ImageHover from '@components/ImageHover';
import { Project } from 'contentlayer/generated';
import { motion } from 'framer-motion';

type Props = {
  projects: Project[];
};

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
      ease: 'easeInOut',
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
      ease: 'easeInOut',
    },
  },
};

function ProjectContent({ projects }: Props) {
  return (
    <motion.div variants={containerfloatInVariants} animate={'visible'} initial={'hidden'}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
        {projects.map((project) => {
          return (
            <motion.div key={project.slug} variants={floatInVariants}>
              <ImageHover
                src={project.thumbnail}
                alt={project.title}
                describe={project.title}
                height={815}
                width={1755}
                href={`projects/${project.slug}`}
                containerWidth="w-full"
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default ProjectContent;
