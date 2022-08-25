import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import Cursor from "../components/Cursor/Cursor";
import { MouseContext } from "../components/Cursor/cursorContext";
import FAQsList from "../components/faqsList";
import Footer from "../components/Footer";
import ImageHover from "../components/ImageHover";
import Navbar from "../components/Navbar/Navbar";
import ScrollForMore from "../components/scroll_for_more";
import { fadeinAnimation } from "../constrants/fadeinAnimate";

const Home: NextPage = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  useEffect(() => {
    document.body.style.backgroundColor = "#EBE7E0";
  });
  return (
    <div>
      <Cursor />
      <Navbar />
      <motion.div className="pt-16 lg:pt-20  relative">
        <section className="grid grid-cols-1 lg:grid-cols-3 my-12 px-12">
          <div className="md:px-4 px-0 font-mono lg:col-span-2  space-y-4 pr-5 md:pr-12 ">
            <motion.h2
              variants={fadeinAnimation.left}
              initial="hidden"
              animate="visible"
              className="md:text-6xl text-3xl md:leading-[6.4rem] leading-[3rem] tracking-tighter">
              Fullstack developer, passionate about web development and programming. Working with startups to make{" "}
              <span className="hightlight">DREAM</span> come true.
            </motion.h2>
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
        <section className="mt-12 pt-32 w-full min-h-[120vh] h-fit bg-red-primary text-white font-sans pb-12">
          <motion.h3
            variants={fadeinAnimation.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-8 lg:px-52 font-medium text-5xl  md:text-7xl  leading-[5rem] md:leading-[6.5rem] tracking-wide">
            Turn your potential <strong className="font-bold underline">visitor</strong> into a{" "}
            <strong className="font-bold underline">customer</strong> with a beautiful and intuitive website.
          </motion.h3>
          <hr className="mx-auto w-3/4" />
          <motion.p
            variants={fadeinAnimation.bottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-extralight font-mono leading-loose px-8 md:pr-52 md:pl-96 mt-32 w-full ">
            In today&apos;s busy world, your customers are constantly bombareded with different marketing messages,
            which makes it significantly more difficult for customers to focus and make right choice. In order to stand
            out from the noise, your signal should be clear and precise
          </motion.p>
          <motion.p
            variants={fadeinAnimation.bottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-extralight font-mono leading-loose px-8 md:pr-52 md:pl-96 mt-6 w-full">
            From pre-seed to Series A, I help company create relationships with their customers and build a strong brand
            by communicating with their functional message, personality and values to propective customer, trough clear
            comperhensible design and memorable customer experience.
          </motion.p>
          <hr className="h-32 bg-red-primary border-0 " />
        </section>
        <section className="mt-12 pt-32 w-full min-h-[120vh] h-fit font-sans pb-12">
          <motion.h3
            variants={fadeinAnimation.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-8 lg:px-52 font-medium text-5xl md:text-7xl leading-[5rem] md:leading-[6.5rem] tracking-wide">
            It all boils down to understanding your <strong className="font-bold underline">customer</strong> and{" "}
            <strong className="font-bold underline">target audience</strong>. In most cases, it&apos;s the design and
            smooth experience that decide <span className="hightlight">the success</span> of your company.
          </motion.h3>

          <hr className="mx-auto w-3/4" />
          <motion.p
            variants={fadeinAnimation.bottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-extralight font-mono leading-loose px-8 md:pr-52 md:pl-96 mt-32 w-full ">
            My workflow is focus on understanding the customer and the target audience. The process of making a product
            always combined with the customer&apos;s needs and goals. I help you to understand the customer and the
            target audience and then create a design that is clear and precise.
          </motion.p>
          <motion.p
            variants={fadeinAnimation.bottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-extralight font-mono leading-loose px-8 md:pr-52 md:pl-96 mt-6 w-full">
            I use the latest technologies to create a beautiful look with high performance product. Easy to use and easy
            to deploy. I can handle all the technical aspects of the project and you can focus on the creative part.
          </motion.p>
          <hr className="h-32  border-0 " />
        </section>
        <section className="mt-12 pt-32 w-full min-h-[120vh] h-fit font-sans pb-12 bg-red-primary text-white">
          <motion.h3
            variants={fadeinAnimation.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-8 lg:px-52 font-medium text-5xl  md:text-7xl  leading-[5rem] md:leading-[6.5rem] tracking-wide">
            FAQ ?
          </motion.h3>
          <hr className="mx-auto w-3/4 mb-20" />
          <FAQsList />
          <hr className="h-32  border-0 " />
          <Footer />
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
