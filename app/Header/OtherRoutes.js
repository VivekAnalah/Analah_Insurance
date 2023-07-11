"use client";

import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { Cheacked_Context } from "../../Context/Cheacked_Context";
import { usePathname } from "next/navigation";
import Auth from "./Auth";
export default function OtherRoutes() {
  const matches = useMediaQuery("(max-width:500px)");
  const location = usePathname();
  console.log("client side");

  const { navbarOpen } = useContext(Cheacked_Context);
  console.log(navbarOpen);
  return (
    <>
      <div
        id="example-navbar-danger"
        className={
          "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link href={"/"}>
              <h2
                className={`${location === "/" && "active"} ${
                  matches
                    ? "text-[12px] font-[400] hover:text-[#2a44a9]"
                    : "text-[18px] lg:text-[16px] font-[400] hover:text-[#2a44a9]"
                } `}
              >
                Insurance Products
              </h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Raise-a-claim">
              <h2
                className={`${
                  matches
                    ? "text-[12px] font-[400] hover:text-[#2a44a9]"
                    : "text-[18px] lg:text-[16px] font-[400] hover:text-[#2a44a9]"
                } ${location === "/Raise-a-claim" && "active"}`}
              >
                Raise a Claim
              </h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/Become-a-PoSP"}>
              {" "}
              <h2
                className={`${
                  matches
                    ? "text-[12px] font-[400] hover:text-[#2a44a9]"
                    : "text-[18px] lg:text-[16px] font-[400] hover:text-[#2a44a9]"
                } ${location === "/Become-a-PoSP" && "active"}`}
              >
                Become a PoSP with us
              </h2>
            </Link>
          </li>
          <li className="nav-item">
            <Auth />
          </li>
        </ul>
      </div>
    </>
  );
}
