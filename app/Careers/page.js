import Footer from "../Components/footer";
import "../Styles/careers.css";

function Careers() {
  
  return (
    <>
      <div>
       

        <div className="bred">
          {/* Title */}
          <h2 class="CareerHeader lg:text-[32px] sm:text-[28px] text-[24px] absolute lg:left-[28%] sm:left-[20%] left-[20%] sm:top-[40%] top-[15%]">
            <span class=" title-border-bottom">Caree</span>rs
          </h2>
                 {/* ------------------------------------------------------------------------------------------ */}   
                  {/* Dotted Images */}
          <div>
          <img
              src={"/Images/partnerBg.png"}
              className="w-[94px] h-[34px] absolute lg:left-[19%] sm:left-[10%] left-[0%] top-[26.56px]"
              alt=""
            />
          </div>
          <div>
          <img
              src={"/Images/partnerBg.png"}
              className="w-[135px] h-[49px] absolute lg:bottom-[23.27px] bottom-[20%] lg:left-[43.45%] sm:left-[47.45%] left-[20.45%]"
              alt=""
            />
          </div>
          <div>
          <img
              src={"/Images/partnerBg.png"}
              className="w-[135px] h-[49px] absolute top-[57px] lg:right-[22%] right-[12%]"
              alt=""
            />
          </div>
                 {/* ------------------------------------------------------------------------------------------ */}   
{/* Left SIde Image */}
          <div className="">
              <img
                src={"/Images/background_left_1.png"}
                alt="left"
                className=" absolute bottom-[0px] left-[0px] w-[20%] "
                
              />
            </div>
            {/* -------------- */}

            {/* Right SIde Image */}
            <div className="">
              <img
                src={"/Images/background_right_1.png"}
                alt="right"
                className="absolute  right-[0px] bottom-[0px] w-[20%] "
              />
            </div>
 {/* ------------------------------------------------------------------------------------*/}
  {/* Hiring Image*/}
            <div className="absolute sm:top-[60px] top-[40%] lg:right-[31.34%] sm:right-[20.34%] right-[30.34%] HiringContainer">
            <img
                src={"/Images/Hiring 1.png"}
                alt="hiring"
                className="lg:w-[100%] sm:w-[80%] sm:h-auto w-[140px] h-[125px] m-auto" 
              />
            </div>
       {/* ------------------------------------------------------------------------------------------ */}   


        </div>

        <div className="w-[75%] m-auto" >
          <div className="flex flex-col lg:flex-row gap-3 pt-[60px] relative items-center sm:pb-[100px]">
            <>
              <div className="lg:w-1/2 flex flex-col">
                <div className="">
                  <h2 className="textHeader1Lite">
                    <span className=" title-border-bottom textHeader1">Let’s </span>
                    grow together
                  </h2>

                  <h4 className=" text-justify mt-[43px] growTogetherText lg:text-[16px] sm:text-[14px] text-[12px]">
                    InsurTech is disrupting the insurance domain in India. If
                    you're looking for a dynamic opportunity and want to be a
                    part of something that's truly transformative, then
                    InsurTech is the place for you. We're looking for people who
                    are ready to take their ideas and run with them. You'll have
                    the opportunity to work with some of the brightest minds in
                    the industry and build solutions that are changing the
                    insurance landscape.
                  </h4>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col">
                <div className="flex  gap-4 justify-center ">
                 <img src={"/Images/Grow_Together.png"} alt="grow_together" className="mt-[60px]" />
                </div>
              </div>
{/* Dotted Image */}
              <div>
          <img
              src={"/Images/partnerBg.png"}
              className="w-[135px] h-[49px] absolute top-[102px] right-[5%] sm:block hidden"
              alt=""
            />
          </div>

          <div>
          <img
              src={"/Images/partnerBg.png"}
              className="w-[135px] h-[49px] absolute bottom-[80px] right-[40%] sm:block hidden"
              alt=""
            />
          </div>

          <div>
          <img
              src={"/Images/partnerBg.png"}
              className="w-[135px] h-[49px] absolute bottom-[0px] left-[0%] sm:block hidden"
              alt=""
            />
          </div>

                 {/* ------------------------------------------------------------------------------------------ */}   
            </>
          </div>


          {/* -----------------Get In Touch Section ----------------------------------- */}
          <div className="flex flex-col items-center justify-center mt-[46.52px]  sm:mb-[150px] mb-[100px]">
            <h2 className="textHeader1Lite">
             <span className="textHeader1">Ge</span><span className="title-border-bottom "><span className="textHeader1">t</span>  in tou</span>ch{" "}
            </h2>

            <div className=" w-[100%] flex justify-center sm:mt-[70px] mt-[40px]" >
              <img src={"/Images/Career_Get_in_touch.png"} alt="Get in touch" className="xl:w-[30%] sm:w-[50%] w-[80%] "/>
            </div>

            <h5 className="CurrentOpenings lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] text-center sm:mt-[90px] mt-[55px]">
              Current Openings
            </h5>
            <h5 className="CancelPolicyText text-center mt-[20px] sm:w-[50%] w-[80%]">
              If you're ready to make a difference, come and join us. 
              <br />
              Send us
              your resume at{" "}
              <span className="text-[#4C8CE7]">
                <b><a href="mailto:contactus@analahinsurance.com" >contactus@analahinsurance.com</a></b>
              </span>
              .
            </h5>
            <div className="flex  flex-col items-center justify-center w-full mt-[50px]">
              <div className="text-center flex gap-5 items-center w-[100%] justify-center">
                <div className="divStylesCareer SalesText lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] flex justify-center items-center w-[25%]   h-[54px] ">
                  Sales Executive
                </div>

                <div className="divStylesCareer SalesText flex justify-center items-center lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] w-[25%] h-[54px]">
                  Sales Manager
                </div>
              </div>
              <div className="m-auto w-[70%]  mt-[40px]" >
                <h4 className="CurrentOpenings text-center lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                  If you don't see a job opening which interests you, don't
                  worry!
                </h4>
                <p className="CancelPolicyText text-center mt-[25px]">
                  We accept applications for future positions. Simply send us
                  your resume and we will get in touch if we have a suitable
                  opening for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Careers;
