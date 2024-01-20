import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  indicator?: boolean;
};

const containerClassName = clsx(
  'mouse-pointer border-neutral-300 rounded-md px-3 py-5 border hover:bg-white/20 transition-all duration-300 ease-in-out relative'
);
function Card({ href, description, tags, title, indicator }: Props) {
  const children = (
    <>
      <h1 className="text-base font-bold">{title}</h1>
      <p className="text-xs text-neutral-500 flex-1">{description}</p>
      {tags && (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      {indicator && (
        <div className="absolute top-3 right-3">
          <div className="relative">
            <Tooltip>
              <TooltipContent sideOffset={24}>Project is in development</TooltipContent>
              <TooltipTrigger>
                <div className="absolute w-2 h-2 rounded-full bg-green-400 top-0 right-0"></div>
              </TooltipTrigger>
            </Tooltip>
          </div>
        </div>
      )}
    </>
  );
  if (!href) {
    return <div className={containerClassName}>{children}</div>;
  }
  return (
    <Link href={href} className={containerClassName} target="_blank">
      {children}
    </Link>
  );
}

export default Card;
