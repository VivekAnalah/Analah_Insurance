"use client";

import Linking from "./Linking";
import "../../Styles/insurance.css";
import { useContext } from "react";
import { display } from "../../../Context/DisplayContext";
export default function Insurance({ item, ins, index }) {
  const { setInvestment, setGuaranteeModal } = useContext(display);
  let insuranceName = ins;
  const myArr = insuranceName.split(" ");
  console.log("insuranceName ", myArr[0]);

  return (
    <>
      {index === 9 ? (
        <div
          className={
            "px-[5px] py-[10px] flex justify-center flex-col items-center  hover:cursor-pointer"
          }
          onClick={() => setInvestment()}
        >
          <img
            src={`/Insurance_Images/${item.img}`}
            alt={item.name}
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
      ) : index === 10 ? (
        <div
          className={
            "px-[5px] py-[10px] flex justify-center flex-col items-center  hover:cursor-pointer"
          }
          onClick={() => setGuaranteeModal()}
        >
          <img
            src={`/Insurance_Images/${item.img}`}
            alt=""
            className={
              "object-contain  w-[35%] h-[40px] lg:h-[40px] 2xl:h-[60px]  insurance-home-img"
            }
          />

          <div className="contents">
            <h6 className="text-[80%]  pt-2 font-400   lg:w-10/12 min-h-[39px] insurance-home-text">
              {item.name}
            </h6>
          </div>
        </div>
      ) : (
        <Linking path={`Insurance_pages/${myArr[0]}`}>
          <div
            className={
              " px-[5px] py-[10px] flex justify-center flex-col items-center "
            }
          >
            <img
              src={`/Insurance_Images/${item.img}`}
              alt=""
              className={
                "object-contain  w-[35%] h-[40px] lg:h-[40px] 2xl:h-[60px]  insurance-home-img"
              }
            />

            <div className="contents">
              <h6 className="text-[80%]  pt-2  font-400  lg:w-10/12  min-h-[39px] insurance-home-text">
                {item.name}
                <br />
                {item.insurance}
              </h6>
            </div>
          </div>
        </Linking>
      )}
    </>
  );
}
