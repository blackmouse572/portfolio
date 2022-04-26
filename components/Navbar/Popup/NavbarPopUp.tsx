import Link from "next/link";
import { NextRouter } from "next/router";
import React from "react";
type NavbarPopUpProps = {
  popUp: boolean;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: {
    name: string;
    href: string;
  }[];
  route: NextRouter;
};


function NavbarPopUp(props: NavbarPopUpProps) {
    const base = "tracking-widest text-2xl font-mono font-bold text-center text-black  w-full list-none hover:text-4xl transition-all ";
    const nav_link_class = props.popUp ? base.concat(" floatinAnimation"):base
    const nav_link_class_active= nav_link_class.replace("text-black"," text-red-primary underline").replace("text-2xl","text-6xl").replace(" hover:text-4xl","");
    
    return (
    <div
      className={`${props.popUp ? "translate-x-0" : "translate-x-full"}
       w-full  h-full fixed  bg-white z-10  transition-all duration-500 ease-in-out  `}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2  h-screen">
      {props.menuItems.map((item, index) => (
              <li className="flex items-center justify-center"key={index} >
                <Link href={item.href}>
                  <a
                    className={
                      props.route.pathname === item.href
                        ? nav_link_class_active
                        : nav_link_class
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
      </div>
    </div>
  );
}

export default NavbarPopUp;
