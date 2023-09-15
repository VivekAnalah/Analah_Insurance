'use client'
import { Grid } from "@mui/material";
import "../Styles/howItWorks.css";


export default function HowItWorks() {
  
  return (
    <div className="  mx-auto w-[100%] max-w-[100%]">
    <div className="lg:pt-[4rem] md:pt-[3rem] sm:pt-[2rem] pt-[2rem] sm:pb-[5rem] pb-[2rem] relative">
    <h2 className="text-700 mb-9 lg:mb-[60px] text-center HowItText" >
      <span className="text-[#4C8CE7] text-center mb-[35px] HowItText">How </span>
      it works ?
    </h2>

    <div className="absolute left-0 top-20 lg:block hidden ">
          <img
            src={"/Images/partnerBg.png"}
            className="w-full "
            alt=""
          />
        </div>

        <div className="absolute right-0 top-20 lg:block hidden ">
          <img
            src={"/Images/partnerBg.png"}
            className="w-full "
            alt=""
          />
        </div>

      <div  className="lg:w-[73%] sm:w-[43%] w-[60%] grid lg:grid-cols-3 grid-cols-1 gap-[20px] m-auto">
         
       
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center "} 
            >
              <div className="flex flex-col items-center w-[90%] howItworksChild relative" >
                <div className={"flex justify-start w-auto h-auto"}>
                  <img
                    src={"/Images/Asset 3.png"}
                    alt=""
                    className="aspect-auto object-contain lg:w-[65px] lg:h-[65px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]  "
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px] howItworksText">
                    Fill up our form and submit a request to raise a claim.
                  </h3>
                </div>
                <div className="howItworksNumbering absolute top-[5px] right-[16px]">
                1
              </div>
              </div>
            
            </Grid>
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center "}
            >
              <div className="flex flex-col  items-center w-[90%] howItworksChild relative">
                <div className={" flex justify-start w-auto h-auto"}>
                  <img
                    src={"/Images/Asset 6.png"}
                    alt=""
                    className="aspect-auto object-contain lg:w-[65px] lg:h-[65px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]  m-auto"
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px] howItworksText">
                    Submit the requisite documents as requested by our team.
                  </h3>
                </div>
                <div className="howItworksNumbering  absolute top-[5px] right-[16px]">
                2
              </div>
              </div>
              
            </Grid>
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center"}
            >
              <div className="flex flex-col items-center w-[90%] howItworksChild relative">
                <div className={" flex justify-start w-auto h-auto"}>
                  <img
                    src={"/Images/Asset 1.png"}
                    alt=""
                    className="aspect-auto object-contain lg:w-[65px] lg:h-[65px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]  m-auto"
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px] howItworksText">
                    Leave it to us to resolve and work for your claim
                    settlement.
                  </h3>
                </div>
                <div className="howItworksNumbering  absolute top-[5px] right-[16px]">
                3
              </div>
              </div>
              
            </Grid>
        
    
      </div>
   
  </div>
  </div>
  )
}
