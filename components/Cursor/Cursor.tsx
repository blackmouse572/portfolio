import { cn } from '@/libs/tw';
import { useContext } from 'react';
import { MouseContext } from './cursorContext';
import useMoursePostion from './useMousePosition';
function Cursor() {
  const { x, y } = useMoursePostion();
  const { cursorType } = useContext(MouseContext);

  const cursorPos = () => {
    if (x === undefined || y === undefined) return;
    const xMouse = x;
    const yMouse = y;

    return {
      left: `${xMouse}px`,
      top: `${yMouse}px`,
    };
  };
  return (
    <div
      style={cursorPos()}
      className={cn([
        'h-20 w-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex align-center justify-center flex-col flex-wrap  rounded-full bg-white text-black font-mono font-medium  duration-100  z-50 pointer-events-none ease-out ',
        cursorType,
      ])}
    >
      <h1 className="text-center"> SEE MORE </h1>
    </div>
  );
}

export default Cursor;
