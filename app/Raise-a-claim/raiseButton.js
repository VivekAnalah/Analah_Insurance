'use client'

import { useState } from "react";


export default function RaiseButton (){
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    const divStyles = {
      
        background: isHovered
          ? "white"
          : "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
          boxShadow: isHovered ? "5px 10px" : "",
        color: isHovered ? "#2A44A9" : "#ffffff",
        borderRadius: 11,
      };
    return (
        <button
        style={divStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" justify-center items-center py-2 text-[#FFFFFF] px-10 text-[18px] "
        id="raise-button"
      >
        Raise Claim
      </button>  
    )

}