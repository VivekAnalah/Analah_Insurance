"use client";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

import {useContext} from "react";
import { Cheacked_Context } from "../../Context/Cheacked_Context";

export default function Logo({ children }) {
  console.log(children);

  const matches = useMediaQuery("(max-width:500px)");

  children[0].props.className = matches
    ? " ml-[-20px] mt-[0px] w-[230px]  justify-start"
    : "object-contain w-[185px] pt-0";
  console.log("client side");
  // const [navbarOpen, setNavbarOpen] = useState(false);
const { navbarOpen,Set_NavbarOpen} = useContext(Cheacked_Context) ;
console.log(navbarOpen)

  return (
    <>
      <Link href={"/"}>{children[0]}</Link>

      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={()=> Set_NavbarOpen()}
      >
        {children[1]}
      </button> 
    </>
  );
}
