import React, { useContext } from "react";
import { MouseContext } from "./cursorContext";
import useMoursePostion from "./useMousePosition";
function Cursor() {
  const { x, y } = useMoursePostion();
    const {cursorType} = useContext(MouseContext);
  return (
    <div style={{left: `${x}px`, top: `${y}px`}} className={`${cursorType}  h-20 w-20  fixed top-0 left-0 flex align-center justify-center flex-col flex-wrap  rounded-full  bg-white text-black font-mono font-medium  duration-100  z-50 pointer-events-none ease-out `}>
      <h1 className="text-center"> SEE MORE </h1>
    </div>
  );
}

export default Cursor;
