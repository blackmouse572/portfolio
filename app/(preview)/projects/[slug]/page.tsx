import { Mdx } from '@components/mdx/MDXComponent';
import { allProjects } from 'contentlayer/generated';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';

export const generateStaticParams = async () => allProjects.map((prjc) => ({ slug: prjc._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const project = allProjects.find((prjc) => prjc._raw.flattenedPath === params.slug);
  if (!project) throw new Error(`Post not found for slug: ${params.slug}`);
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: {
        url: project.thumbnail,
        alt: project.title,
      },
      type: 'article',
      url: `/projects/${params.slug}`,
      authors: ['Jaden Nguyen'],
    },
  };
};

function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const post = allProjects.find((project) => project._raw.flattenedPath === params.slug);
  if (!post) return notFound();

  return (
    <article className="overflow-hidden relative">
      <div className="relative">
        <div className="py-12 lg:py-20">
          <Mdx code={post.body.code} />
          <Link href={'/projects'} className="group bg-zinc-500 text-overlay bg-black/40 px-2">
            <span className="opacity-50 text-xl group-hover:pr-2 transition-all text-white">&#47;&#47;</span>
            Back to projects
          </Link>
        </div>
      </div>
      <span className="text-zinc-400/20 absolute top-1/4 text-[50vh] -z-30 -left-[8rem]">&#47;&#47; </span>
      <span className="text-zinc-400/20 absolute bottom-10 text-[50vh] -z-30 -right-[8rem]">&#47;&#47; </span>
    </article>
  );
}

export default ProjectDetailPage;
