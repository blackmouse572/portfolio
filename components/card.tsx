import { cn } from '@/libs/tw';
import Link from 'next/link';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  disabled?: boolean;
}

export function MdxCard({ href, className, children, disabled, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg bg-white',
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-slate-800">{children}</div>
      </div>
      {href && (
        <Link href={disabled ? '#' : href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      )}
    </div>
  );
}
