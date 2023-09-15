"use client";


import Link from "next/link";
import { useContext } from "react";
import { Cheacked_Context } from "../../Context/Cheacked_Context";
import { usePathname } from "next/navigation";
import Auth from "./Auth";
export default function OtherRoutes() {
  
  const location = usePathname();

  const { navbarOpen } = useContext(Cheacked_Context);
  console.log(navbarOpen);

  const textStyles =
  "text-[14px]  font-[400] hover:text-[#4C8CE7] text-[#808080]";
  
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
                className={`${location === "/" && "active"} ${textStyles} `}
              >
                Insurance Products
              </h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Raise-a-claim">
              <h2
                className={`${textStyles} ${location === "/Raise-a-claim" && "active"}`}
              >
                Raise a Claim
              </h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/Become-a-PoSP"}>
              {" "}
              <h2
                className={`${textStyles} ${location === "/Become-a-PoSP" && "active"}`}
              >
                Become a PoSP with us
              </h2>
            </Link>
          </li>
          <li className="nav-item w-[140px]">
            <Auth />
          </li>
        </ul>
      </div>
    </>
  );
}
