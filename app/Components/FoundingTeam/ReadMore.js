"use client";

import { useState } from "react";

export const ReadMore = ({ children }) => {
  const [read_v, setRead_V] = useState(false);

  return (
    <>
      <div
        className={` ${
          read_v ? ` hidden` : `read_more mt-[15px] flex justify-end `
        } `}
        onClick={() => setRead_V(true)}
      >
        {children[0]}
      </div>

      <div className={` ${read_v ? `founding_hidden block` : `hidden`} `}>
        {children[1]}
        {children[2]}
        {children[3]}
        {children[4]}
        {children[5]}
        {children[6]}
      </div>

      <div
        className={` ${
          read_v ? ` less mt-[15px] flex justify-end` : `hidden`
        } `}
        onClick={() => setRead_V(false)}
      >
        {children[7]}
      </div>
    </>
  );
};
