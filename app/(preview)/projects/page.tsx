import ProjectContent from '@/(preview)/projects/components/project-content';
import { allProjects } from 'contentlayer/generated';

function Project() {
  return (
    <div>
      <div className="lg:px-8 pt-28 lg:pt-36 min-h-screen  md:px-5 relative">
        <ProjectContent projects={allProjects} />
      </div>
    </div>
  );
}
export default Project;
