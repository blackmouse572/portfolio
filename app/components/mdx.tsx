import PhotoViewer from '@/components/PhotoProvider';
import { cn } from '@/libs/tw';
import { Callout } from '@components/callout';
import { MdxCard } from '@components/card';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { highlight } from 'sugar-high';

const headings: { [key: string]: React.ComponentType<any> } = {
  h1: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props} />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn('mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3 className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props} />
  ),
  h4: ({ className, ...props }: any) => (
    <h4 className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props} />
  ),
  h5: ({ className, ...props }: any) => (
    <h5 className={cn('mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />
  ),
  h6: ({ className, ...props }: any) => (
    <h6 className={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)} {...props} />
  ),
};

function Table({ data }: any) {
  let headers = data.headers.map((header: React.ReactNode, index: number) => <th key={index}>{header}</th>);
  let rows = data.rows.map((row: React.ReactNode[], index: number) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const id = `h${level}`;
  const heading = headings[id] as any;
  const Heading = ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children);
    return React.createElement(heading, { id: slug }, children);

    // return React.createElement(
    //   `h${level}`,
    //   { id: slug },
    //   [
    //     React.createElement('a', {
    //       href: `#${slug}`,
    //       key: `link-${slug}`,
    //       className: 'anchor',
    //     }),
    //   ],
    //   children
    // );
  };

  Heading.displayName = `Heading${level}`;

  return Heading as any;
}

const components: MDXRemoteProps['components'] = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  p: ({ className, ...props }: any) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
  ul: ({ className, ...props }: any) => <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />,
  ol: ({ className, ...props }: any) => <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />,
  li: ({ className, ...props }: any) => <li className={cn('mt-2', className)} {...props} />,
  blockquote: ({ className, ...props }: any) => (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground', className)} {...props} />
  ),
  img: ({ className, alt, src, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const width = typeof props.width === 'string' ? parseInt(props.width) : props.width;
    const height = typeof props.height === 'string' ? parseInt(props.height) : props.height;
    return (
      <PhotoViewer
        key={src}
        src={src}
        className={cn('rounded-lg', className)}
        alt={alt}
        width={width}
        height={height}
        {...props}
      />
    );
  },
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn('border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right', className)}
      {...props}
    />
  ),
  figure: ({ className, ...props }: any) => (
    <figure className={cn('relative mb-4 pb-4 mt-6 overflow-hidden', className)} {...props} />
  ),
  figcaption: (
    { className, ...props }: any // eslint-disable-line react/display-name
  ) => (
    <figcaption
      className={cn(
        'font-mono font-medium text-sm text-zinc-200 absolute right-0 bottom-0 px-3 py-0.5  w-full bg-zinc-950 rounded-b-lg',
        className
      )}
      {...props}
    ></figcaption>
  ),
  span: ({ className, ...props }: any) => (
    <span className={cn('data-[highlighted-line]:bg-zinc-500/20', '', className)} {...props} />
  ),
  Callout,
  Card: MdxCard,
  PhotoViewer: PhotoViewer,
};

export function CustomMDX(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
