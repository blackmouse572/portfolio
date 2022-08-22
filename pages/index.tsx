import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Cursor from "../components/Cursor/Cursor";
import { MouseContext } from "../components/Cursor/cursorContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
const Home: NextPage = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const [backgroundColor, setBackgroundColor] = useState("#EBE7E0");
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  });
  return (
    <div className="">
      <Cursor />
      <Navbar />
      <div className="lg:px-8 pt-24 lg:pt-36  md:px-5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-full flex items-end fade-in">
            <div className="lg:px-0">
              <h3 className="floatinAnimation top-0 font-sans text-4xl lg:text-6xl uppercase  font-black  tracking-tight">
                HOME PAGE
                <span className="opacity-10 text-black pl-4">//</span>
              </h3>
            </div>
          </div>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-3 my-12 px-12 ">
          <div className="md:px-4 px-0 font-mono lg:col-span-2 leading-loose space-y-4 pr-5 md:pr-12 fadeinAnimation ">
            <h3 className=" font-black text-2xl lg:text-4xl tracking-widest mb-6">
              Welcome <span className="opacity-60 text-black -ml-4 ">,</span>
            </h3>
            <p className="min-h-max">
              My name is <strong className="hover:underline hover:decoration-2 ">Nguyen Tuan Ngoc.</strong>
            </p>
            <p>
              {" "}
              If you are looking for a fullstack developer, you are at the right place. Nothing is more important than
              the quality of your work.
            </p>
            <p>Hopefully, you will find something that you like and you will be happy with your work.</p>
          </div>
          <div
            className="lg:col-start-3 overflow-hidden fadeinAnimation cursor-none"
            onMouseEnter={() => cursorChangeHandler("cursor-hover")}
            onMouseLeave={() => cursorChangeHandler("cursor")}>
            <Link href="https://unsplash.com/photos/0eKCOZ11gfk" passHref>
              <div className="relative group">
                <Image
                  alt="Image by Rémi Thorel"
                  layout="responsive"
                  width="25%"
                  height="25%"
                  className="zoominAnimationOnHover"
                  src={
                    "https://images.unsplash.com/photo-1617678151201-2596079f0b30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=remi-thorel-0eKCOZ11gfk-unsplash.jpg"
                  }
                />
                <h3 className="text-overlay opacity-0 group-hover:opacity-100 group-hover:-translate-y-5">
                  <span className="opacity-50 font-bold mx-5 text-xl text-white/60">//</span>
                  Image by Rémi Thorel
                </h3>
              </div>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
