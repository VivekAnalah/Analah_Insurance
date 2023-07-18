"use client";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

import { useContext } from "react";
import { Cheacked_Context } from "../../Context/Cheacked_Context";

export default function Logo({ children }) {
  const matches = useMediaQuery("(max-width:500px)");

  children[0].props.className = " ml-[-20px] mt-[0px] w-[230px]  justify-start sm:ml-[0px] sm:mt-[0px] sm:justify-center sm:object-contain sm:w-[185px] sm:pt-0";

  const { navbarOpen, Set_NavbarOpen } = useContext(Cheacked_Context);

  return (
    <>
      <Link href={"/"}>{children[0]}</Link>

      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => Set_NavbarOpen()}
      >
        {children[1]}
      </button>
    </>
  );
}
