import { cn } from '@/libs/tw';
import { Callout } from '@components/callout';
import { MdxCard } from '@components/card';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import * as React from 'react';
import './style.css';
const components = {
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
  a: ({ className, ...props }: any) => (
    <a className={cn('font-medium underline underline-offset-4', className)} {...props} />
  ),
  p: ({ className, ...props }: any) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
  ul: ({ className, ...props }: any) => <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />,
  ol: ({ className, ...props }: any) => <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />,
  li: ({ className, ...props }: any) => <li className={cn('mt-2', className)} {...props} />,
  blockquote: ({ className, ...props }: any) => (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground', className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
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
  pre: ({ className, ...props }: any) => (
    <pre className={cn('overflow-x-auto rounded-lg border border-slate-500 bg-zinc-800 py-4', className)} {...props} />
  ),
  code: ({ className, ...props }: any) => (
    <code
      className={cn(['relative rounded font-mono text-sm', 'data-[data-highlighted-line]:bg-purple-200', className])}
      {...props}
    />
  ),
  span: ({ className, ...props }: any) => (
    <span className={cn('data-[highlighted-line]:bg-zinc-500/20', '', className)} {...props} />
  ),
  Image,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx max-w-prose mx-auto">
      <Component components={components} />
    </div>
  );
}
