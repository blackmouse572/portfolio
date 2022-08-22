import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css"; // Import css modules
import NavbarPopUp from "./Popup/NavbarPopUp";

const nav_link_class =
  "transition-all bg-opacity-20 text-black opacity-80 relative h-7 font-mono tracking-wider pt-0.5 first::pt-0  uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row";
const nav_link_class_active = nav_link_class.replace("bg-opacity-20", " ") + " underline ";
function Navbar() {
  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/About",
    },
    {
      name: "Project",
      href: "/Project",
    },
    {
      name: "Contact",
      href: "/Contact",
    },
  ];

  const [active, setActive] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [isScroll, setScroll] = useState(false);
  function toggle() {
    setActive(!active);
  }
  function togglePopUp() {
    setPopUp(popUp ? false : true);
  }
  const router = useRouter();
  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    scrollHandler();
    addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 lg:px-8 w-full z-10  transition-colors ease-in-out duration-800  ${
        isScroll ? "bg-light-gray/20 pb-5" : "bg-light-gray/0"
      }`}>
      <NavbarPopUp popUp={popUp} setPopUp={setPopUp} menuItems={menuItems} route={router} />
      <div className=" px-5 pt-5 flex h-full border-b border-white items-center justify-between max-w-11xl mx-auto border-opacity-0">
        <div className="w-14 sm:w-20">
          <Image layout="responsive" width={800} height={494} src="/icon/long_icon.png" alt="logo"></Image>
        </div>
        <div className="hidden lg:flex items-center md:order-2">
          <ul className="flex space-x-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <a className={router.pathname === item.href ? nav_link_class_active : nav_link_class}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden z-20">
          <button
            onClick={() => {
              toggle();
              togglePopUp();
            }}
            className={styles.hamburgerLines}>
            <span
              className={`${
                active ? styles.line + " " + styles.line1 + " " + styles.active : styles.line + " " + styles.line1
              } ${isScroll ? (active ? styles.scroll_active : styles.scroll) : ""}`}></span>
            {/* scroll -> trang */}
            <span
              className={`${
                active ? styles.line + " " + styles.line2 + " " + styles.active : styles.line + " " + styles.line2
              } ${isScroll ? (active ? styles.scroll_active : styles.scroll) : ""}`}></span>
            <span
              className={`${
                active ? styles.line + " " + styles.line3 + " " + styles.active : styles.line + " " + styles.line3
              } ${isScroll ? (active ? styles.scroll_active : styles.scroll) : ""}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
