import { cn } from '@lib/tw';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';
type NavbarPopUpProps = {
  popUp: boolean;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: {
    name: string;
    href: string | null;
  }[];
};

function NavbarPopUp(props: NavbarPopUpProps) {
  const layout = useSelectedLayoutSegment();
  return (
    <div
      className={`${props.popUp ? 'translate-x-0' : 'translate-x-full'}
       w-full  h-full fixed  bg-white  z-10  transition-all duration-500 ease-in-out  `}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
        {props.menuItems.map((item, index) => (
          <li className="flex items-center justify-center" key={index}>
            <Link
              className={cn([
                {
                  'text-red-primary underline': layout === item.href,
                  'text-black': layout !== item.href,
                },
                'tracking-widest text-2xl font-mono font-bold text-center text-black  w-full list-none hover:text-4xl transition-all ',
              ])}
              href={item.href ?? '/'}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default NavbarPopUp;
