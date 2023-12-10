import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeinAnimation } from '../../app/constraints/fadeinAnimate';

function Content({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeinAnimation.left}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{
        when: 'beforeChildren',
        staggerChildren: 0.3,
        delayChildren: 0.3,
      }}
      className="font-mono leading-loose"
    >
      <h3 className="mt-8 font-black text-2xl lg:text-4xl tracking-widest mb-6">
        {title} <span className="opacity-60 text-black -ml-4 ">,</span>
      </h3>
      <section className={className}>{children}</section>
    </motion.div>
  );
}

export default Content;
