export const fadeinAnimation = {
  left: {
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
      exit: {
        x: -100,
        opacity: 0,
      },
    },
  },
  right: {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      exit: {
        x: 100,
        opacity: 0,
      },
    },
  },
  top: {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      exit: {
        y: -100,
        opacity: 0,
      },
    },
  },
  bottom: {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      exit: {
        y: 100,
        opacity: 0,
      },
    },
  },
};
