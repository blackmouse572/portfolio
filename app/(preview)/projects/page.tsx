import ProjectContent from '@/(preview)/projects/components/project-content';
import { getProjectPosts } from '@/libs/mdx';

import { NextPage } from 'next';

const Project: NextPage = () => {
  const allProjects = getProjectPosts();
  return (
    <div>
      <div className="lg:px-8 pt-28 lg:pt-36 min-h-screen  md:px-5 relative">
        <ProjectContent projects={allProjects} />
      </div>
    </div>
  );
};
export default Project;
