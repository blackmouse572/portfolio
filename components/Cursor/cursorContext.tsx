import React, { createContext, useState } from "react";
export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: (_cursorType:any) => {},
});
const MouseContextProvider = (props:any) => {
  const [cursorType, setCursorType] = useState("cursor");
  const cursorChangeHandler = (cursorType:any) => {
    setCursorType(cursorType);
    return;
    
  };
  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};
export default MouseContextProvider;
