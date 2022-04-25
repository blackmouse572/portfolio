import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  let age = new Date().getFullYear() - 2002;
  return (
    <div className="">
      <Navbar />
      <div className="lg:px-8 pt-24 lg:pt-36 min-h-screen  md:px-5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-full flex items-end px-1 fade-in">
            <div className="h-full pb-6 px-4 lg:px-0">
              <h3 className=" top-0 font-sans text-4xl lg:text-6xl uppercase  font-black  tracking-tight">
                HOME PAGE
                <span className="opacity-10 text-black pl-4">//</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 px-12">
          <div className="px-4 font-mono md:col-span-2 leading-loose space-y-4 pr-4">
            <h3 className=" font-black text-2xl lg:text-4xl tracking-widest mb-6">
              Hello <span className="opacity-60 text-black -ml-4 ">,</span>
            </h3>
            <p className="min-h-max">
              My name is{" "}
              <strong className="hover:underline hover:decoration-2 ">
                Nguyen Tuan Ngoc.
              </strong>
            </p>
            <p>
              {" "}
              I'm a full-stack developer. Since I like want to learn new things,
              I'm always looking for new opportunities to learn and grow. My
              passion is to create beautiful and intuitive App and Website.
            </p>
            <p>
              I see my self as a{" "}
              <span className="hightlight">adventure developer</span>. Everyday
              I'm looking for new challenges. And because of that, I have
              experience with some different languages, frameworks and aspect.
              Such as:
              <ul className="list-disc list-inside">
                <li>Mobile: Flutter,...</li>
                <li>
                  Web: Reactjs, Nextjs, SASS, Tailwindcss, Bulma, ChakraUI,
                  ...etc
                </li>
                <li>Database: MySQL, MongoDB, Firebase,...</li>
              </ul>
            </p>
            <p>
              Beside coding life, I also like to read, watch and listen music.
            </p>
          </div>
          <div className="md:col-start-3">
            <Image
              alt="Image by Rémi Thorel"
              layout="responsive"
              width="25%"
              height="25%"
              src={
                "https://images.unsplash.com/photo-1617678151201-2596079f0b30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=remi-thorel-0eKCOZ11gfk-unsplash.jpg"
              }
            />
            <h3 className="font-mono text-right">
              <span className="opacity-50 font-bold mx-5 text-xl text-gray-800">
                //
              </span>
              Image by Rémi Thorel
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
