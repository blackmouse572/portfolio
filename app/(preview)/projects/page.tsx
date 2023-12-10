'use client';
import { ProjectContent } from '@/constraints/project';
import ImageHover from '@components/ImageHover';
import { motion } from 'framer-motion';
function Project() {
  return (
    <div>
      <div className="lg:px-8 pt-24 lg:pt-36 min-h-screen  md:px-5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-full flex items-end px-1 fade-in">
            <div className="h-full pb-6 px-4 lg:px-0">
              <h3 className="floatinAnimation top-0 font-sans text-4xl lg:text-6xl uppercase  font-black  tracking-tight">
                Project
                <span className="opacity-10 text-black pl-4">&#47;&#47;</span>
              </h3>
            </div>
          </div>
          {/* Project Content */}
          {_projectContent()}
        </div>
      </div>
    </div>
  );
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

function _projectContent() {
  return (
    <motion.div variants={containerfloatInVariants} animate={'visible'} initial={'hidden'}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
        {ProjectContent.map((project) => {
          return (
            <motion.div key={project.id} variants={floatInVariants}>
              <ImageHover
                src={project.image}
                alt={project.title}
                describe={project.title}
                height={815}
                width={1755}
                href={project.detailLink}
                containerWidth="w-full"
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Project;
