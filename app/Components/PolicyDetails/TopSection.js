
import "../../Styles/policyDetails.css";

export default function TopSection ({
    head,
   
    subhead,
    list1,
    list2,
    list3,
    list4,
    img,
    Ins_Text_1,
    Ins_Text_2,
    Ins_Text_3,
 
    RetirementInsurance,
    
    quotes,
    quotes_link,
    
    button_overlap,
}){

    const title = head;
    const myArr = title.split(" ");
const subhadText = "lg:text-[16px] md:text-[12px] text-[14px]";

    return (
        <div
        id="insurance-scroll"
        className=" mx-auto  pb-[30px]   "
        style={{
          background:
            "linear-gradient(5deg, rgb(188 207 227) 0%, rgba(255, 255, 255, 0.06) 59.90%)",
        }}
      >
        <div className="flex flex-col md:flex-row md:gap-[0px] gap-[60px]  termLife items-center pt-[50px] pb-[20px] w-[90%] m-auto">
          <div className="lg:w-[45%]  w-[100%] order-2 md:order-1 flex flex-col  md:pl-[8.5%]  md:pr-[8.5%] justify-center items-center ">
            <div className=" ">
              <div className="flex items-center sm:mt-[0px] mt-[20px]">
                {/* Done */}
                <h2 className="textHeader1 pb-[2%]">
                  <span className="title-border-bottom">{myArr[0]}</span>{" "}
                  {myArr[1] === "Insurance" || myArr[1] === "Plans" ? (
                    <span className="textHeader2">{myArr[1]}</span>
                  ) : (
                    <span>{myArr[1]} </span>
                  )}
                  <span className="textHeader2">{myArr[2]}</span>
                </h2>
                {/* ---- */}
              </div>
              {/* done */}
              <h3
                className={` ${subhadText} lg:text-[16px] md:text-[12px] font-[400] lg:pt-[25px] pt-[1rem] text-[#000] pb-[2%]`}
              >
                {subhead}
              </h3>

              <div className="listBox h-[50px]">
                <ul className={`${subhadText}  font-400 `}>
                  <li className="p-[7px] flex">
                    <img
                      src={"/Images/point.png"}
                      alt=""
                      className="bulletImage"
                    />
                    <p className="text-[#494949]   absolute left-[13%] top-[15px]">
                      {list1}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="listBox mt-[12px] h-[50px]">
                <ul
                  className={`${subhadText} text-[#217BF4] font-400 ml-[25px]`}
                >
                  <li className="p-[7px] ">
                    <img
                      src={"/Images/point.png"}
                      alt=""
                      className="bulletImage"
                    />
                    <p className="text-[#494949] absolute left-[13%] top-[15px]">
                      {list2}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="listBox mt-[12px] h-[50px]">
                <ul
                  className={` ${subhadText}  text-[#217BF4] font-400 ml-[25px]  `}
                >
                  <li className="p-[7px] ">
                    <img
                      src={"/Images/point.png"}
                      alt=""
                      className="bulletImage"
                    />
                    <p className="text-[#494949] absolute left-[13%] top-[15px]">
                      {list3}
                    </p>
                  </li>
                </ul>
              </div>

              <div
                className={
                  RetirementInsurance
                    ? "listBox h-[65px] mt-[12px]"
                    : "listBox mt-[12px] h-[50px]"
                }
              >
                <ul
                  className={` ${subhadText}  text-[#217BF4] font-400 ml-[25px]  `}
                >
                  <li className="p-[7px] ">
                    <img
                      src={"/Images/point.png"}
                      alt=""
                      className="bulletImage"
                    />
                    <p className="text-[#494949] absolute left-[13%] top-[15px]">
                      {list4}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* -------- */}

          {/* Top Vector Section */}
          <div className="order-1 md:order-2  items-center xl:ml-[10%] lg:ml-[5%] md:w-[50%] w-[80%] ">
            <div className="relative m-auto w-[fit-content]">
              <div className="w-[50px] h-[50px] bg-[#F2F2F2] absolute top-[-14px] left-[-18px]"></div>
              <img
                src={"/Images/partnerBg.png"}
                alt="leftDot"
                className="absolute bottom-[-10%] left-[-10%] w-[120px] h-[43px]"
              />
              <img
                src={"/Images/partnerBg.png"}
                alt="RightDot"
                className="absolute top-[-10%] right-[-20%] w-[120px] h-[43px]"
              />
              <div className="w-[50px] h-[50px] bg-[#F2F2F2] absolute bottom-[-7%] right-[-7%]"></div>
              <img
                src={`/policy_details/${img}.png`}
                alt={head}
                className=" lg:w-[300.073px] md:w-[200.073px] z-2 relative top-0 rounded-[27px]"
              />
            </div>

            <div className="">
              <div
                className="mt-[20px] w-[80%] m-auto"
                style={{ textAlign: "center" }}
              >
                {myArr[0] === "Term" ? (
                  <h2 className=" lg:text-[24px] md:text-[20px] items-center ">
                    <span className="text-[#4C8CE7] font-600">
                      {Ins_Text_1}
                    </span>{" "}
                    <span className="text-[#000] font-400">{Ins_Text_2}</span>{" "}
                    <span className="text-[#000] ">{Ins_Text_3}</span>
                  </h2>
                ) : (
                  <h2 className="lg:text-[24px] md:text-[20px] text-center">
                    <span className="text-[#4C8CE7] font-600">
                      {Ins_Text_1}
                    </span>{" "}
                    <span className="text-[#000] font-400">{Ins_Text_2}</span>{" "}
                    <span className="text-[#4C8CE7] ">{Ins_Text_3}</span>
                  </h2>
                )}
              </div>

              <div
                className="headingLine m-[auto] w-[100%]"
                style={{
                  background:
                    "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
                }}
              ></div>
            </div>

{/* ---------------- Client Side ------------------------------------------------- */}
            <div className=" justify-center items-center ">
              {button_overlap ? (
                <>
                  <div className="text-center items-center h-[20px] mt-[20px]">
                    <a href={quotes_link} target="blank">
                      <button className="justify-center items-center font-700 text-[#FFFFFF] sm:text-[16px] text-[15px] divStyles">
                        {quotes}
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center items-center h-[20px] mt-[20px]">
                    <a href={quotes_link} target="blank">
                      <button className="justify-center items-center font-700 text-[#FFFFFF] sm:text-[16px] text-[15px] divStyles">
                        {quotes}
                      </button>
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* --------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    )
        
    

}