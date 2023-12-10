import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function ScrollForMore() {
  function convertToRelative(value: number) {
    if (typeof window !== 'undefined') {
      return value - window.scrollY;
    }
  }
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
  });
  const boxRef = useRef(null);
  const logoAnimation = useAnimationControls();
  const cursorAnimation = useAnimationControls();
  const handleMouseMove = (event: React.MouseEvent<Element, MouseEvent>) => {
    setMousePosition(getRelativeCoordinates(event, boxRef.current));
  };
  const [isMouseEnter, setMouseEnter] = useState(false);
  function startChildrenAnimation() {
    setMouseEnter(true);
    logoAnimation.start({
      y: [150, 0, -150],
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: 'easeInOut',
        delay: 0.5,
        repeatType: 'loop',
      },
    });
  }
  useEffect(() => {
    if (isMouseEnter) {
      cursorAnimation.start({
        scale: [0, 1.5],
        transition: {
          duration: 1,
          ease: 'easeIn',
        },
      });
    } else {
      cursorAnimation.start({
        scale: [1.5, 0],
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });
    }
  }, [cursorAnimation, isMouseEnter]);
  useEffect(() => {
    cursorAnimation.start({
      top: (convertToRelative(mousePosition.y) ?? 1) - mousePosition.height / 2,
      left: mousePosition.x - mousePosition.width / 2,
    });
  }, [cursorAnimation, mousePosition]);
  function stopChildrenAnimation() {
    logoAnimation.stop();
    cursorAnimation.stop();
    setMouseEnter(false);
  }
  function onClick() {
    if (typeof window != undefined) {
      //Move to top
      window.scrollTo({
        top: 0,
      });
    }
  }
  function getRelativeCoordinates(event: React.MouseEvent<Element, MouseEvent>, referenceElement: any) {
    const position = {
      x: event.pageX,
      y: event.pageY,
    };

    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }

    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
      width: offset.width,
      height: offset.height,
      centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
      centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
    };
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.3,
        delayChildren: 0.5,
        when: 'beforeChildren',
      }}
      onMouseEnter={startChildrenAnimation}
      onMouseLeave={stopChildrenAnimation}
      onClick={onClick}
      className="rounded-full bg-black text-white w-40 h-40 flex justify-center items-center flex-col mx-auto space-y-2 cursor-default overflow-clip border-0 relative"
      ref={boxRef}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <p className="text-center font-mono z-10">Go top</p>
      <motion.div animate={logoAnimation} className="z-10">
        <FontAwesomeIcon className="z-10" icon={faArrowUp} size={'2x'} />
      </motion.div>
      <motion.div
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        className={
          'bg-red-primary w-full h-full rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
        initial={{ x: -mousePosition.centerX * 100, y: -mousePosition.centerY * 100, scale: 0 }}
        animate={cursorAnimation}
      ></motion.div>
    </motion.div>
  );
}

export default ScrollForMore;
