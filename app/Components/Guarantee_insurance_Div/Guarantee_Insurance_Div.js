"use clinet";

import React from "react";

export const Guarantee_Insurance_Div = () => {
  return (
    <div
      className={
        "px-[5px] py-[10px] flex justify-center flex-col items-center  hover:cursor-pointer"
      }
      onClick={() => setInvestment()}
    >
      <img
        src={require(`/Insurance_Images/${item.img}`)}
        alt=""
        className={
          "object-contain  w-[35%] h-[40px] lg:h-[40px] 2xl:h-[60px] insurance-home-img"
        }
      />

      <div className="contents">
        <h6 className="text-[80%]  pt-2  font-400  lg:w-10/12 min-h-[39px] insurance-home-text">
          {item.name}
          <br />
          {item.insurance}
        </h6>
      </div>
    </div>
  );
};
