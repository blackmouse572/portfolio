import Link from "next/link";
import React from "react";
import styles from "../components/Navbar.module.css"; // Import css modules
import {useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const nav_link_class = "transition-all bg-opacity-20 text-black opacity-80 relative h-7 font-mono tracking-wider pt-0.5 first::pt-0  uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row";
const nav_link_class_active = nav_link_class.replace("bg-opacity-20", " ")+" underline ";
function Navbar() {
    const [active, setActive] = useState(false);
    function toggle(){
        setActive(!active);
    }
    const router = useRouter();
   
    console.log(router.pathname);
    

  return (
    <nav className="fixed pt-5 px-5 top-0 lg:px-8 w-full z-10">
        
      <div className="flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0">
        <div className="flex-grow">
          <Link href="/" passHref>
            
            <Image layout="fixed" width={1815/20} height={770/20} src="/icon/Logo.png"></Image>
          </Link>
        </div>
        <div className="hidden lg:flex items-center md:order-2">
          <ul className="flex space-x-2">
            <li>
              <Link href="/" passHref>
                <a
                  className={router.pathname=="/"?nav_link_class_active:nav_link_class}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/About" passHref>
                <a
                  className={router.pathname=="/About"?nav_link_class_active:nav_link_class}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Project" passHref>
                <a
                  className={router.pathname=="/Project"?nav_link_class_active:nav_link_class}>
                  Project
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Contact" passHref>
                <a
                  className={router.pathname=="/Contact"?nav_link_class_active:nav_link_class}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={toggle} className={styles.hamburgerLines}>
            <span className={active?styles.line+" "+styles.line1+" " +styles.active:styles.line+" "+styles.line1}></span>
            <span className={active?styles.line+" "+styles.line2+" " +styles.active:styles.line+" "+styles.line2}></span>
            <span className={active?styles.line+" "+styles.line3+" " +styles.active:styles.line+" "+styles.line3}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
