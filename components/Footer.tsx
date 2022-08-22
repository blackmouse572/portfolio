import { motion } from "framer-motion";
function Footer() {
  return (
    <section className="my-5 md:my-10 lg:my-12">
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          hidden: {
            opacity: 0,
            width: 0,
          },
          visible: {
            opacity: 1,
            width: "100%",
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        className="border border-black bg-black"></motion.div>
      <motion.p
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          hidden: {
            opacity: 0,
            x: -100,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        className="text-center font-mono text-md tracking-wide">
        Copyrights @ 2022 Nguyen Tuan Ngoc. All rights reserved.
      </motion.p>
    </section>
  );
}

export default Footer;
