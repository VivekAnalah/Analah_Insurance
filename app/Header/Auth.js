'use client';
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

export default function Auth() {
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <>
      <div
                    className={
                      matches ? "flex space-x-2 my-2" : "flex space-x-2"
                    }
                  >
                  
                    <button
                      className={
                        matches
                          ? "bg-[#2A44A9] p-[2px] h-[30px] rounded-l-[30px] w-[60px] text-[12px] text-white justify-center items-center"
                          : "bg-[#2A44A9]  rounded-l-[30px] w-[90px] text-[18px] text-white justify-center items-center"
                      }
                    >
                       <a href="https://dashboard.analahinsurance.com/customer/login" target="blank">Login</a>
                      
                    </button>
                   
                   <Link href={"/Register"}>
                   <button
                      className={
                        matches
                          ? "border-[3px] border-[#2A44A9] w-[60px] p-[2px] rounded-r-[30px] text-[12px] text-[#2A44A9] justify-center items-center"
                          : "border-[3px] border-[#2A44A9] w-[90px] py-[2px]  rounded-r-[30px] text-[18px] text-[#2A44A9] justify-center items-center"
                      }
                    >
                      Register
                      
                    </button>
                   </Link>
                    
                  </div>
    </>
  );
}
