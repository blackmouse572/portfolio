import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  question: string;
  children: React.ReactNode;
};
function FAQ({ question, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  async function handleClick() {
    setIsOpen(!isOpen);
  }
  const boxVariants = {
    open: {
      height: "auto",
    },
    closed: {
      height: "0px",
    },
    hover: {},
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const arrowVariants = {
    open: {
      rotate: 90,
    },
    closed: {
      rotate: 0,
    },
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    hover: {},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      onClick={handleClick}
      className="cursor-pointer mr-48 mt-12  ml-96 pb-2 overflow-clip 
        relative border-b-2"
      animate="visible"
      variants={containerVariants}
      whileHover="hover"
      initial="hidden">
      <section className="font-sans uppercase flex flex-row justify-between z-20">
        <h4 className="text-4xl max-w-md">{question}</h4>
        <motion.div animate={isOpen ? "open" : "closed"} initial="closed" variants={arrowVariants} className="h-fit">
          <FontAwesomeIcon icon={faArrowRight} size={"3x"} />
        </motion.div>
      </section>
      <motion.div
        layoutId="fill"
        className="absolute top-0 left-0 bottom-0 right-0 bg-black/30 "
        variants={itemVariants}
      />
      <motion.div
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
        variants={boxVariants}
        className="text-xl mt-12 font-mono overflow-clip z-20 space-y-4">
        {children}
      </motion.div>
    </motion.div>
  );
}

export default FAQ;
