import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { fadeinAnimation } from "../constrants/fadeinAnimate";
import FAQ from "./faq";
const FAQs = [
  {
    question: "How much cost do you charge 💸?",
    answer: [
      "1️⃣ It&apos;s depend to be honest. Each project has its own vision, purpose and timeline. The first state is knowing what you really want from the product we going to make.",
      "2️⃣ After that, we will have a clear scope what we building, what resource and requirement we need to fulfill",
      "➕ During the project, you can give us the feedback or adding more requirement to the scope which can lead to a additional cost",
    ],
  },
  {
    question: "How long does it take to have result ?",
    answer: [
      "Based on my experience, it usually takes about 1-2 weeks to build a agency, potfolio website. With bigger project it can take more than 4 weeks.",
    ],
  },
  {
    question: "What can I do to help you ?",
    answer: [
      "What a good question. It&apos;s really helpful if you can do the following things.",
      "If you have time, we can meet frequently to discuss the project and discuss the project&apos;s scope and requirement.",
      "If you too busy, we need to clear the need and the requirement of the product first. Then, I can start building without any concerned.",
    ],
  },
];
type faqProp = {
  question: string;
  answer: string[];
};
function FAQsList() {
  const [focused, setFocused] = useState<faqProp>({
    question: "",
    answer: [],
  });
  function setFocusedEmpty() {
    setFocused({
      question: "",
      answer: [],
    });
  }
  return (
    <motion.div
      variants={fadeinAnimation.bottom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseLeave={setFocusedEmpty}
      transition={{
        staggerChildren: 0.3,
      }}>
      <AnimatePresence>
        <LayoutGroup>
          {FAQs.map((faq, index) => (
            <motion.section
              key={index}
              variants={fadeinAnimation.bottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
              onFocus={() => setFocused(faq)}
              onMouseEnter={() => setFocused(faq)}>
              <FAQ
                key={index}
                question={faq.question}
                style={{
                  position: "relative",
                  zIndex: 1,
                }}>
                {faq.answer.map((answer, index) => (
                  <p key={index}>{answer}</p>
                ))}
              </FAQ>
              {focused.question === faq.question && (
                <motion.div
                  layoutId="hightlight"
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.4,
                      type: "tween",
                      ease: "easeOut",
                    },
                  }}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 210,
                      damping: 20,
                      duration: 0.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  }}
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",

                    background: "#23272F",
                    borderRadius: "8px",
                    opacity: 0.54,
                    zIndex: 0,
                  }}
                  className="md:left-96 md:right-48 left-2 right-2"
                />
              )}
            </motion.section>
          ))}
        </LayoutGroup>
      </AnimatePresence>
    </motion.div>
  );
}

export default FAQsList;
