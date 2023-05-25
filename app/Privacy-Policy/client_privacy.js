"use client"
import {useMediaQuery } from "@mui/material";


import  { useContext } from "react";

import { Cheacked_Context } from "../../Context/Cheacked_Context";

export default function Client_privacy({children}) {
     const {cheacked_disclaimer,cheacked_T_C,cheacked_privacy } = useContext(Cheacked_Context);
   
    const matches = useMediaQuery("(max-width:500px)");

   
  return (
   
       <div className="tab_container" id="privacy">
         <input id="tab1" type="radio" name="tabs" defaultChecked={cheacked_privacy} />
         <label for="tab1" className="tab1 ">
           Privacy Policy
         </label>

         <input id="tab2" type="radio" name="tabs" defaultChecked={cheacked_disclaimer}/>
         <label for="tab2" className="tab2">
           <span>Disclaimer</span>
         </label>

         <input id="tab3" type="radio" name="tabs" defaultChecked={cheacked_T_C}/>
         <label for="tab3" className="tab3">
           <span>Terms & Conditions</span>
         </label>

 {children[0]}
 {children[1]}
 {children[2]}
         
       </div>

      
  )
}
