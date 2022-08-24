import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Cursor from "../components/Cursor/Cursor";
import { MouseContext } from "../components/Cursor/cursorContext";
import FAQ from "../components/faq";
import Footer from "../components/Footer";
import ImageHover from "../components/ImageHover";
import Navbar from "../components/Navbar/Navbar";
import ScrollForMore from "../components/scroll_for_more";
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
      <div className=" pt-16 lg:pt-20  relative">
        <section className="grid grid-cols-1 lg:grid-cols-3 my-12 px-12">
          <div className="md:px-4 px-0 font-mono lg:col-span-2 leading-loose space-y-4 pr-5 md:pr-12 fadeinAnimation ">
            <h2 className="text-6xl leading-[6.4rem] tracking-tighter">
              Fullstack developer, passionate about web development and programming. Working with startups to make{" "}
              <span className="hightlight">DREAM</span> come true.
            </h2>
          </div>
          <div
            className="lg:col-start-3 overflow-hidden fadeinAnimation cursor-none"
            onMouseEnter={() => cursorChangeHandler("cursor-hover")}
            onMouseLeave={() => cursorChangeHandler("cursor")}>
            <ImageHover
              alt="Myself"
              src="/avatar_2.jpg"
              describe="This is Nguyen Tuan Ngoc 🧑‍💼"
              height={2048}
              width={1536}
              href="/About"
            />
          </div>
        </section>
        <div className="fixed bottom-0 right-0 p-12">
          <div className="relative">
            <ScrollForMore />
          </div>
        </div>
        <hr className="border-b border-gray-200" />
        <section className="mt-12 pt-32 w-full min-h-[120vh] h-fit  bg-red-primary text-white  font-sans pb-12">
          <h3 className="px-8 lg:px-52 font-medium text-5xl  md:text-7xl  leading-[5rem] md:leading-[6.5rem] tracking-wide">
            Turn your potential <strong className="font-bold underline">visitor</strong> into a{" "}
            <strong className="font-bold underline">customer</strong> with a beautiful and intuitive website.
          </h3>
          <hr className="mx-auto w-3/4" />
          <p className="text-2xl font-extralight font-mono leading-loose pr-52 pl-96 mt-32 w-full ">
            In today&apos;s busy world, your customers are constantly bombareded with different marketing messages,
            which makes it significantly more difficult for customers to focus and make right choice. In order to stand
            out from the noise, your signal should be clear and precise
          </p>
          <p className="text-2xl font-extralight font-mono leading-loose pr-52 pl-96 mt-6 w-full">
            From pre-seed to Series A, I help company create relationships with their customers and build a strong brand
            by communicating with their functional message, personality and values to propective customer, trough clear
            comperhensible design and memorable customer experience.
          </p>
          <hr className="h-32 bg-red-primary border-0 " />
        </section>
        <section className="mt-12 pt-32 w-full min-h-[120vh] h-fit font-sans pb-12">
          <h3 className="px-8 lg:px-52 font-medium text-5xl  md:text-7xl  leading-[5rem] md:leading-[6.5rem] tracking-wide">
            It all boils down to understanding your <strong className="font-bold underline">customer</strong> and{" "}
            <strong className="font-bold underline">target audience</strong>. In most cases, it&apos;s the design and
            smooth experience that decide <span className="hightlight">the success</span> of your company.
          </h3>

          <hr className="mx-auto w-3/4" />
          <p className="text-2xl font-extralight font-mono leading-loose pr-52 pl-96 mt-32 w-full ">
            My workflow is focus on understanding the customer and the target audience. The process of making a product
            always combined with the customer&apos;s needs and goals. I help you to understand the customer and the
            target audience and then create a design that is clear and precise.
          </p>
          <p className="text-2xl font-extralight font-mono leading-loose pr-52 pl-96 mt-6 w-full">
            I use the latest technologies to create a beautiful look with high performance product. Easy to use and easy
            to deploy. I can handle all the technical aspects of the project and you can focus on the creative part.
          </p>
          <hr className="h-32  border-0 " />
        </section>
        <section className="mt-12 pt-32 w-full min-h-[120vh] h-fit font-sans pb-12 bg-red-primary text-white">
          <h3 className="px-8 lg:px-52 font-medium text-5xl  md:text-7xl  leading-[5rem] md:leading-[6.5rem] tracking-wide">
            FAQ ?
          </h3>
          <hr className="mx-auto w-3/4" />
          <FAQ question="How much cost do you charge 💸?">
            <p>
              1️⃣ It&apos;s depend to be honest. Each project has its own vision, purpose and timeline. The first state
              is knowing what you really want from the product we going to make.
            </p>
            <p>
              2️⃣ After that, we will have a clear scope waht we building, what resource and requirement we need to
              fulfill
            </p>
            <p>
              ➕ During the project, you can give us the feedback or adding more requirement to the scope which can lead
              to a additional cost
            </p>
          </FAQ>
          <FAQ question="How long does it take to have result ?">
            <p>
              Based on my experience, it usually takes about 1-2 weeks to build a agency, potfolio website. With bigger
              project it can take more than 4 weeks.
            </p>
          </FAQ>
          <FAQ question="What can I do to help you ?">
            <p>What a good question. It&apos;s really helpful if you can do the following things.</p>
            <p>
              If you have time, we can meet frequently to discuss the project and discuss the project&apos;s scope and
              requirement.
            </p>
            <p>
              If you too busy, we need to clear the need and the requirement of the product first. Then, I can start
              building without any concerned.
            </p>
          </FAQ>
          <hr className="h-32  border-0 " />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
