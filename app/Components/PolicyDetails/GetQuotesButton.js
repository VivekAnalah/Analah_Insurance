'use client'

import { useState } from "react";


export default function QuoteButton (props){
    const {quotes} = props
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
        className=" justify-center items-center py-2 text-[#FFFFFF] px-10 sm:text-[18px] text-[15px] "
        
      >
       {quotes}
      </button>  
    )

}