import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
type Props = {
  icon: IconProp;
  href: string;
  className?: string;
  name: string;
  size?: SizeProp;
  color?: string;
  direction: "left" | "right";
};

function LinkContact({ icon, href, className, name, size, color, direction }: Props) {
  const linkContactVariants = {
    hidden: {
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    },
    visible: {
      x: 1,
      opacity: 1,
    },
  };
  return (
    <AnimatePresence>
      <Link href={href}>
        <motion.div
          variants={linkContactVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            bounceStiffness: 0,
            bounceDamping: 0,
            ease: "easeInOut",
          }}
          className={
            "cursor-pointer space-x-3 relative text-center group overflow-clip px-4 py-3 flex justify-center items-center " +
            className
          }>
          <FontAwesomeIcon size={size} color={color} icon={icon} />
          <span className="text-3xl">{name}</span>
          <motion.div
            className={
              (direction === "left" ? "-translate-x-[190%] " : " translate-x-[190%] ") +
              "-z-10 group-hover:translate-x-0  transition-all   ease-in-out duration-300  absolute top-0 left-0 w-full h-full bg-white"
            }></motion.div>
        </motion.div>
      </Link>
    </AnimatePresence>
  );
}

export default LinkContact;
