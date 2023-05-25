

export default function Raise() {
  console.log("server side")
  return (
    <div className="">
        <div className="flex flex-col sm:flex-row gap-[6%]  mt-[50px] relative items-center">
          <div className="mycontainer_raise sm:w-[36.6%] w-[70%] order-2 sm:order-1 flex flex-col  ml-[8.5%]  xl:pl-0 sm:ml-[9.5%] sm:mt-[0px] mt-[15px]">
            <div className="md:mt-[20px] space-y-5 lg:space-y-10">
              <h2 className="font-semibold  sm:text-[25px] text-[24px] md:text-[32px] text-[#2A44A9]">
                <span className="title-border-bottom ">Rais</span>e a Claim
              </h2>
              <h3 className="md:text-[24px] leading-[30px] font-[600] text-[#000000] text-[20px] sm:text-[20px] xs:text-[16]">
                Raise your claim request in only a few clicks.
              </h3>
              <h4 className="font-[400] text-base lg:text-xl text-[#595959]">
                You may raise a claim request, even if you did not buy your
                policy with us.
              </h4>
              <div className="text-center my-6 sm:text-left sm:my-0 ">
                <button
                  className="justify-center items-center py-2 text-[#FFFFFF] px-10 text-[18px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
                    borderRadius: 11,
                  }}
                >
                  Raise Claim
                </button>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 order-1 sm:order-2 flex flex-col w-[70%]  sm:w-[50%]">
            <div className="">
              <div
                className="rounded-tr-[349px] ml-auto w-auto h-full py-16 max-w-[100%] sm:max-w-[100%] xl:max-w-[100%] "
                style={{
                  background:
                    "linear-gradient(172.81deg, #2A44A9 -68.4%, rgba(255, 255, 255, 0.06) 87.56%)",
                  borderRadius: "500.5px 0px 0px 0px",
                }}
              >
                <img
                  alt="insurance"
                  src={"/RaiseClaim.png"}
                  className="pt-16  md:h-[50vh]  h-[250px]  mx-auto"
                />
                {/* h-[500px] */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
