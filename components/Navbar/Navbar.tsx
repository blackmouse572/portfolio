'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '../../app/libs/tw';
import styles from './Navbar.module.css'; // Import css modules
import NavbarPopUp from './Popup/NavbarPopUp';

function Navbar() {
  const menuItems = [
    {
      name: 'Home',
      href: null,
    },
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Project',
      href: 'projects',
    },
    {
      name: 'Contact',
      href: 'contact',
    },
  ];

  const [active, setActive] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const layout = useSelectedLayoutSegment();

  function toggle() {
    setActive(!active);
  }

  function togglePopUp() {
    setPopUp(popUp ? false : true);
  }

  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    scrollHandler();
    addEventListener('scroll', scrollHandler);
  }, []);

  return (
    <nav
      className={cn([
        'fixed top-0 pb-2 lg:px-8 w-full z-10 transition-colors ease-in-out duration-800 font-sans',
        isScroll ? ' bg-white/20 backdrop-blur-sm' : 'bg-white/20',
      ])}
    >
      <NavbarPopUp popUp={popUp} setPopUp={setPopUp} menuItems={menuItems} />
      <div className=" px-5 pt-2 flex h-full border-b border-white items-center justify-between max-w-11xl mx-auto border-opacity-0">
        <div className="w-14 sm:w-20">
          <Image width={800} height={494} src="/icon/long_icon.png" alt="logo" />
        </div>
        <div className="hidden lg:flex items-center md:order-2">
          <ul className="flex space-x-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  className={cn([
                    'transition-all text-black opacity-80 relative h-7 tracking-wider pt-0.5 first::pt-0  uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row',
                    {
                      underline: layout === item.href,
                      'bg-opacity-20': layout !== item.href,
                    },
                  ])}
                  href={item.href ? `/${item.href}` : '/'}
                >
                  {item.name}
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
            className={cn([styles.hamburgerLines])}
          >
            <span
              className={`${
                active ? styles.line + ' ' + styles.line1 + ' ' + styles.active : styles.line + ' ' + styles.line1
              } ${isScroll ? (active ? styles.scroll_active : styles.scroll) : ''}`}
            ></span>
            {/* scroll -> trang */}
            <span
              className={`${
                active ? styles.line + ' ' + styles.line2 + ' ' + styles.active : styles.line + ' ' + styles.line2
              } ${isScroll ? (active ? styles.scroll_active : styles.scroll) : ''}`}
            ></span>
            <span
              className={`${
                active ? styles.line + ' ' + styles.line3 + ' ' + styles.active : styles.line + ' ' + styles.line3
              } ${isScroll ? (active ? styles.scroll_active : styles.scroll) : ''}`}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
