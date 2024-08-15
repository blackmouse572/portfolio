import { CustomMDX } from '@/components/mdx';
import { getProjectPosts } from '@/libs/mdx';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  let posts = getProjectPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const allProjects = getProjectPosts();
  // console.log(allProjects);
  const project = allProjects.find((prjc) => prjc.slug === params.slug);

  if (!project) throw new Error(`Post not found for slug: ${params.slug}`);
  const { metadata } = project;
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      images: metadata.thumbnail ? [{ url: metadata.thumbnail }] : [],
      type: 'article',
      url: `/projects/${params.slug}`,
      authors: ['Jaden Nguyen'],
    },
  };
};

function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const post = getProjectPosts().find((project) => project.slug === params.slug);
  if (!post) {
    return;
  }

  return (
    <article className="overflow-hidden relative">
      <div className="relative">
        <div className="py-12 lg:py-20">
          <div className="mdx max-w-prose mx-auto">
            {/* <Mdx code={post.body.code} /> */}
            <CustomMDX source={post.content} />
          </div>
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
