"use client";

import React, { useState } from "react";

export const ReadMore2 = ({ children }) => {
  const [read, setRead] = useState(false);
  return (
    <>
      <div
        className={` ${
          read ? ` hidden` : `read_more mt-[15px] flex justify-end `
        } `}
        onClick={() => setRead(true)}
      >
        {children[0]}
      </div>

      <div className={` ${read ? `founding_hidden block` : `hidden`} `}>
        {children[1]}
        {children[2]}
        {children[3]}
        {children[4]}
      </div>

      <div
        className={` ${read ? ` less mt-[15px] flex justify-end` : `hidden`} `}
        onClick={() => setRead(false)}
      >
        {children[5]}
      </div>
    </>
  );
};
