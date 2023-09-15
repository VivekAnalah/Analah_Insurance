
import RaiseButton from "./raiseButton"

export default function Raise() {
  
  return (
    <div className="relative backgroundStyle">
        <div className="flex flex-col sm:flex-row gap-[10%]  sm:pt-[50px] relative sm:w-[70%] w-[90%] m-[auto]">
          <div className=" m-auto sm:w-[60%] w-[80%] order-1 sm:order-1 flex flex-col  sm:ml-[8.5%]  xl:pl-0 sm:ml-[9.5%] sm:mt-[0px] mt-[15px] ">
            <div className="mt-[30px]">
              <h2 className="textHeader1">
                <span className="title-border-bottom ">Rais</span>e a Claim
              </h2>
              <h3 className="font-[500] text-[#000000]  mt-[27px] textStyleRaise">
                Raise your claim request in only a few clicks.
              </h3>
              <h4 className="font-[400] text-[#595959] mt-[15px] textStyleRaise">
                You may raise a claim request, even if you did not buy your
                policy with us.
              </h4>
              <div className="text-center sm:text-left  mt-[45px] sm:relative absolute bottom-[15%] sm:right-[0%] right-[25%] raiseButtonContainer">
                <a href="#raiseform">

                  <RaiseButton />
                </a>
                
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 order-1 sm:order-2 flex flex-col w-[70%]  sm:w-[30%] m-auto sm:mt-[0px] mt-[15px] sm:ml-[0px] ml-[60px]">
            <div className="">
              <div
                className="ClaimImage"
               
              >
                <img
                  alt="insurance"
                  src={"/Images/Raise_claim.png"}
                  className="mt-[30px]"
                />
                
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[0%]  ">
          <img
            src={"/Images/background_left.png"}
            alt="left"
            className="lg:w-[100%] md:w-[70%] sm:w-[50%] w-[50%] leftImage"
          />
        </div>
        <div className="absolute bottom-[0%] right-[0px] flex justify-end">
          <img
            src={"/Images/background_right.png"}
            alt="right"
            className="lg:w-[90%] md:w-[70%] sm:w-[50%] w-[40%] RightImage"
          />
        </div>
      </div>
  )
}
