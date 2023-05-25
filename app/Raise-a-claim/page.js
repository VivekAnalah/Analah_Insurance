// 'use client';

// import {useMediaQuery } from "@mui/material";
import Raise from "./raise";
import HowItWorks from "./howItWorks";
import RaiseClaimForm from "./raiseClaimForm";
import Footer from "../Components/footer";

export default function RaiseClaim() {
  // const matches = useMediaQuery("(max-width:500px)");
  console.log("server side")
  return (
    <div>
      {/* <div className={matches ? "" : ""} /> */}
     <Raise />
     <div className={ "my-5 h-[10px] sm:my-8 sm:h-[10px]"} />
    <HowItWorks />
    <div className={"my-5 sm:my-8"} />
    <RaiseClaimForm />
    <div className={"my-5 h-[10px] sm:my-8 sm:h-[10px]"} />
      <Footer />
    
    </div>
  );
}




  


