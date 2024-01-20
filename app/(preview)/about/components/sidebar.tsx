'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/libs/tw';
import Icons from '@components/icons';
import { motion } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';

type Props = {
  items: {
    label: string;
    icon: React.ReactNode;
    href?: string;
    onClick?: () => void;
  }[];
  className?: string;
};

function Sidebar({ items, className }: Props) {
  const [active, setActive] = React.useState(items[0].href ?? '');
  function handleClick(href: string) {
    const element = document.getElementById(href);
    if (!element) return;
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections)
        .filter((section) => section.offsetTop <= scrollPosition + 100)
        .pop();
      if (!currentSection) return;
      setActive(currentSection.id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const transformY = useMemo(() => {
    if (isMinimized) {
      const activeItem = items.find((item) => item.href === active);
      if (!activeItem) return 0;
      const itemHeight = 64;
      return itemHeight * items.findIndex((item) => item.href === active) * -1;
    }
    return 0;
  }, [active, isMinimized, items]);

  return (
    <motion.div
      layout="position"
      onMouseEnter={() => setIsMinimized(false)}
      initial={{
        x: -100,
      }}
      animate={{
        x: 0,
        height: !isMinimized ? '578px' : '7.2rem',
      }}
      style={{
        left: 20,
        top: '15%',
        transform: `translateY(${transformY}px)`,
      }}
      className={cn(
        'sticky -translate-y-1/2 p-2 rounded-2xl z-10 w-fit bg-primary-foreground space-y-2 overflow-hidden',
        className
      )}
    >
      <motion.div
        layout="position"
        animate={{
          y: transformY,
        }}
        className="flex flex-col gap-2"
      >
        {items.map((item) => (
          <Tooltip key={item.label} open={isMinimized ? false : undefined}>
            <TooltipContent side="right">{item.label}</TooltipContent>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleClick(item.href ?? '')}
                key={item.label}
                className={cn('relative flex items-center justify-center h-12 rounded-2xl  w-12', {
                  'bg-primary text-primary-foreground delay-200 transition-all hover:bg-transparent':
                    active === item.href,
                  'hover:bg-primary/20': active !== item.href,
                })}
              >
                {active === item.href && (
                  <motion.span
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      duration: 0.2,
                    }}
                    layoutId="active-bg"
                    className="absolute w-full h-full rounded-2xl bg-primary -z-10"
                  />
                )}
                {item.icon}
              </button>
            </TooltipTrigger>
          </Tooltip>
        ))}
        <div className="space-y-1">
          <hr className="w-full bg-neutral-50" />
          <Tooltip>
            <TooltipContent side="right">Minimize</TooltipContent>
            <TooltipTrigger asChild>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className={cn('relative flex items-center justify-center h-12 rounded-2xl  w-12', {
                  'text-primary transition-all hover:bg-primary/20': !isMinimized,
                  'hover:bg-primary/20': isMinimized,
                })}
              >
                <Icons.Minimize className="w-6 h-6" />
              </button>
            </TooltipTrigger>
          </Tooltip>
          <Tooltip>
            <TooltipContent side="right">Top</TooltipContent>
            <TooltipTrigger asChild>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className={cn(
                  'relative flex items-center justify-center h-12 rounded-2xl  w-12',
                  'text-primary transition-all hover:bg-primary/20'
                )}
              >
                <Icons.ArrowTop className="w-6 h-6" />
              </button>
            </TooltipTrigger>
          </Tooltip>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
