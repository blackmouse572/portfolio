import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
function About() {
  function onSubmit(e: any) {
    e.preventDefault();
    setOpen(true);
    //After 3s, close the popup
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }
  const [isOpen, setOpen] = useState(false);
  const fadeinAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <Navbar />
      <div className="lg:px-8 pt-24 lg:pt-36 min-h-screen  md:px-5 relative ">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="w-full h-full flex items-end px-1 fade-in">
            <div className="h-full pb-6 px-4 lg:px-0">
              <h3 className="floatinAnimation top-0 font-sans text-4xl lg:text-6xl uppercase  font-black  tracking-tight">
                ABOUT
                <span className="opacity-10 text-black pl-4">&#47;&#47;</span>
              </h3>
            </div>
          </div>
          <section className=" my-12 ">
            <motion.section
              variants={fadeinAnimation}
              initial={"hidden"}
              whileInView={"visible"}
              className="px-4 font-mono lg:col-span-2 leading-loose space-y-4 pr-5 md:pr-12 fadeinAnimation">
              <h3 className=" font-black text-2xl lg:text-4xl tracking-widest mb-6">
                Hello👋 <span className="opacity-60 text-black -ml-4 ">,</span>
              </h3>
              <p className="min-h-max">
                My name is <strong className="hover:underline hover:decoration-2 ">🧑‍💼 Nguyen Tuan Ngoc.</strong>
              </p>
              <p>
                {" "}
                I&rsquo;m a full-stack developer. Since I like want to learn new things, I&rsquo;m always looking for
                new opportunities to learn and grow. My passion is to create beautiful and intuitive App and Website.
              </p>
              <p>
                I see my self as a <span className="hightlight">adventure developer</span>. Everyday I&rsquo;m looking
                for new challenges. And because of that, I have experience with some different languages, frameworks and
                aspect. Such as:
              </p>
              <ul className="ml-2">
                <li>💎 Mobile: Flutter,...</li>
                <li>💎 Web: Reactjs, Nextjs, SASS, Tailwindcss, Bulma, ChakraUI, ...etc</li>
                <li>💎 Database: MySQL, MongoDB, Firebase,...</li>
              </ul>
              <p>
                Also, i have some side experience like{" "}
                <span className="strong font-bold">Figma, Photoshop, Illustrator, After Effect</span>
              </p>
              <p>
                Beside coding life, I also like to read, watch and listen music. Here, take a break and listen to the
                playlist I usually listen when coding.
              </p>
              <div className="flex justify-between items-center w-full">
                <iframe
                  className="rounded-lg shadow-lg self-center"
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX35zmlYTBMjk?utm_source=generator"
                  width="50%"
                  height="380"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              </div>
              <form onSubmit={onSubmit} className="flex justify-center items-center space-x-4">
                <h4>Give me a feedback, will ya?</h4>
                <input className="px-3" type="text" placeholder="It&rsquo;s great 👌😘" />
                <motion.button
                  whileInView={{
                    scale: [1.3, 1, 1.3],
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                      bounceStiffness: 1,
                      bounceDamping: 0.5,
                      repeat: Infinity,
                    },
                  }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </motion.button>
              </form>
            </motion.section>

            {/* Achivement section */}
            <hr className="my-6 bg-black border-black border-3" />
            <motion.section
              variants={fadeinAnimation}
              initial={"hidden"}
              whileInView={"visible"}
              className="px-4 font-mono lg:col-span-2 leading-loose space-y-4 pr-5 md:pr-12 mt-24">
              <h3 className="mt-8 font-black text-2xl lg:text-4xl tracking-widest mb-6">
                Achivement 🏅 <span className="opacity-60 text-black -ml-4 ">,</span>
              </h3>
              <p>
                ❇️ I&rsquo;m want to learn <strong>Rust</strong> ❤️‍🔥. This is a fast growing language that is used to
                build blazing fast applications. A lot of big company like{" "}
                <strong>
                  Google <FontAwesomeIcon icon={faGoogle} />
                </strong>{" "}
                and{" "}
                <strong>
                  Facebook <FontAwesomeIcon icon={faFacebook} />
                </strong>{" "}
                use Rust to build their products.
              </p>
              <p>
                ❇️ Improve softskill like <strong>Project Manager, Team leading, Task Manager</strong> in order to run a
                small Tech team with me.
              </p>
            </motion.section>

            {/* Future section */}
            <hr className="my-6 bg-black border-black border-3" />
            <motion.section
              variants={fadeinAnimation}
              initial={"hidden"}
              whileInView={"visible"}
              className="px-4 font-mono lg:col-span-2 leading-loose space-y-4 pr-5 md:pr-12 mt-24">
              <h3 className="mt-8 font-black text-2xl lg:text-4xl tracking-widest mb-6">
                In the future ⏳ <span className="opacity-60 text-black -ml-4 ">,</span>
              </h3>
              <p>
                ❇️ I&rsquo;m want to learn <strong>Rust</strong> ❤️‍🔥. This is a fast growing language that is used to
                build blazing fast applications. A lot of big company like{" "}
                <strong>
                  Google <FontAwesomeIcon icon={faGoogle} />
                </strong>{" "}
                and{" "}
                <strong>
                  Facebook <FontAwesomeIcon icon={faFacebook} />
                </strong>{" "}
                use Rust to build their products.
              </p>
              <p>
                ❇️ Improve softskill like <strong>Project Manager, Team leading, Task Manager</strong> in order to run a
                small Tech team with me.
              </p>
            </motion.section>
          </section>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key={"popup"}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-10 mx-auto w-full flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg px-6 py-4 text-black">Thank you for your opinions ❤️</div>
          </motion.section>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default About;
