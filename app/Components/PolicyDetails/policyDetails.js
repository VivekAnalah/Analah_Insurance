// import { useMediaQuery } from "@mui/material";
import "../../Styles/policyDetails.css";
import Footer from "../footer";

function PolicyDetails({
  head,
  benefit_head,
  key_feature_head,
  subhead,
  list1,
  list2,
  list3,
  list4,
  img,
  Ins_Text_1,
  Ins_Text_2,
  Ins_Text_3,
  description_1,
  description_2,
  description_3,
  benefits,
  keyTerms,
  twoWheel,
  homeInsurance,
  RetirementInsurance,
  car,
  why,
  whyText,
  quotes,
  quotes_link,
  helping_verb,
  no_benefit,
}) {
  // const matches = useMediaQuery("(max-width:500px)");

  const title = head;
  const myArr = title.split(" ");

  console.log(myArr[0], Ins_Text_1);

  return (
    <div>
      <div
        id="insurance-scroll"
        className=" mx-auto lg:pb-[200px] md:pb-[150px] sm:pb-[120px] pb-[120px]   "
        style={{
          background:
            "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
        }}
      >
        <div className="flex flex-col sm:flex-row lg:gap-[12.2%] xl:gap-[15.2%] md:gap-[8%] gap-[5%] termLife relative items-center mt-[40px] pb-[20px]">
          <div className="lg:w-[45%] sm:w-[50%] w-[90%] order-2 sm:order-1 flex flex-col  pl-[8.5%] sm:pr-[0%] pr-[8.5%]">
            <div className=" ">
              <div className="flex items-center sm:mt-[0px] mt-[10px]">
                <h2 className="text-[#000000] font-normal  text-[24px]  md:text-[30px] sm:text-[27px] xl:text-[32px] pb-[2%]">
                  <span className="title-border-bottom">{myArr[0]}</span>{" "}
                  {myArr[1] === "Insurance" || myArr[1] === "Plans" ? (
                    <span className="text-[#2A44A9] font-medium">
                      {myArr[1]}
                    </span>
                  ) : (
                    <span>{myArr[1]} </span>
                  )}
                  <span className="text-[#2A44A9] font-medium">{myArr[2]}</span>
                </h2>
              </div>
              <h3 className=" text-base lg:text-2xl sm:font-[500] text-[18px] pt-[4%] text-[#000] pb-[2%]">
                {subhead}
              </h3>
              <ul className="font-light text-xl xl:text-2xl text-[#595959] list-outside ... list-disc ml-[15px]  ">
                <li className="pb-[7px] text-[1.2rem]">{list1}</li>
                <li className="pb-[7px] text-[1.2rem]">{list2}</li>
                <li className=" pb-[7px] text-[1.2rem]">{list3}</li>
                <li className="text-[1.2rem]">{list4}</li>
              </ul>
            </div>
          </div>
          <div className="order-1 sm:order-2 flex flex-col items-center xl:ml-[10%] lg:ml-[5%]">
            <img
              src={`/${img}.png`}
              alt={head}
              className=" lg:w-[320px] md:w-[250px] sm:w-[250px] w-[60%]  "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative xl:top-[-80px] lg:top-[-80px] md:top-[-80px] sm:top-[-60px] top-[-60px] ">
        <div className="text-center items-center   h-[20px] absolute top-[0%] ">
          <a href={quotes_link} target="blank">
            <button
              className="justify-center items-center py-2 text-[#FFFFFF] px-10 sm:text-[18px] text-[15px] "
              style={{
                background: "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
                borderRadius: 11,
              }}
            >
              {quotes}
            </button>
          </a>
        </div>
      </div>
      <div className="relative top-[0px]">
        <div
          className="items-center  w-[100%]   absolute lg:top-[-180px] md:top-[-150px] sm:top-[-120px] top-[-120px] lg:pl-[25%] lg:pr-[25%] md:pl-[20%] md:pr-[20%] sm:pl-[20%] sm:pr-[20%] pl-[5%] pr-[5%] "
          style={{ textAlign: "center" }}
        >
          {myArr[0] === "Term" || myArr[0] === "Car" ? (
            <h2 className="text-[#000000] text-center text-[16px]  md:text-[20px] sm:text-[18px] lg:text-[25px] xl:text-[28px] items-center">
              <span className="text-[#2A44A9] font-normal">{Ins_Text_1}</span>{" "}
              <span className="text-[#2A44A9] font-light">{Ins_Text_2}</span>{" "}
              <span className="text-[#2A44A9] font-light">{Ins_Text_3}</span>
            </h2>
          ) : (
            <h2 className="text-[#000000] text-center text-[16px]  md:text-[20px] sm:text-[18px] lg:text-[25px] xl:text-[28px] items-center">
              <span className="text-[#2A44A9] font-light">{Ins_Text_1}</span>{" "}
              <span className="text-[#2A44A9] font-normal">{Ins_Text_2}</span>{" "}
              <span className="text-[#2A44A9] font-light">{Ins_Text_3}</span>
            </h2>
          )}
        </div>

        <div
          className="headingLine m-[auto] w-[100%]"
          style={{
            background:
              "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
          }}
        >
          {/* <h2>Know more about {head}</h2> */}
        </div>
      </div>

      <div className="my-0 bg-[#F5F5F5]">
        <div className="relative ">
          <img
            alt="left triangle"
            // style={{ display: matches ? "none" : "" }}
            src={"/rightTriangle.png"}
            className="object-contain aspect-auto sm:w-[100px] w-[70px] absolute sm:top-[1%] top-[2.5%]  h-auto rotate-180 sm:block hidden"
          />
          <div className="bg-[#F5F5F5] pt-10 ml-[8.5%] mr-[8.5%] mx-auto pb-10 lg:pb-20">
            <div>
              <h2 className="font-semibold text-xl my-3 lg:my-5 lg:m-0 pb-8 lg:pb-11 lg:text-3xl text-center">
                <span className=" sm:border-b-[5px] sm:pb-[15px] sm:border-[#2a44a9]">
                  Know
                </span>{" "}
                more about {head}
              </h2>
            </div>
            <div>
              {RetirementInsurance ? (
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  Retirement or Pension Plans
                </h2>
              ) : (
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  {head}
                </h2>
              )}

              <p className="text-[#595959] text-base lg:text-lg text-justify pb-7 lg:pb-14">
                {description_1}

                {description_2 ? (
                  <>
                    {" "}
                    <br />
                    <br />
                    {description_2}
                  </>
                ) : (
                  <></>
                )}

                {description_3 ? (
                  <>
                    <br />
                    <br />
                    {description_3}{" "}
                  </>
                ) : (
                  <></>
                )}
              </p>
              {why ? (
                <>
                  <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                    Why {helping_verb} {head} essential?
                  </h2>{" "}
                  <ul className="list-disc ml-4 mb-10">
                    {whyText.map((item, index) => {
                      return (
                        <li
                          className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                  </ul>{" "}
                </>
              ) : (
                ""
              )}
              {no_benefit ? (
                ""
              ) : (
                <>
                  <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                    {benefit_head}
                  </h2>
                  <ul className="list-disc ml-4 mb-10">
                    {benefits.map((item, index) => {
                      return (
                        <li
                          className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                  </ul>{" "}
                </>
              )}

              <div className={"my-2 h-[10px] sm:my-4 sm:h-[10px]"} />
              {twoWheel ? (
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  Benefits of Group Health Insurance to the Employee:
                </h2>
              ) : homeInsurance ? (
                <></>
              ) : (
                <h2 className="text-[#2A44A9] text-xl  lg:text-2xl font-semibold mb-7">
                  {key_feature_head}
                </h2>
              )}
              {homeInsurance ? (
                <></>
              ) : (
                <ul className="list-disc ml-4 pb-[32px]">
                  {keyTerms.map((item, index) => {
                    return (
                      <li
                        className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                        key={index}
                      >
                        {car && item.id == 3 ? (
                          <>
                            <p>
                              <span className="font-[600]">Premiums:</span> The
                              premiums for Car Insurance are decided on the
                              basis of:
                            </p>
                            <li
                              className={
                                "text-[#595959] text-[14px] text-justify my-1 ml-[6%] sm:text-[16px]  sm:my-3 sm:ml-[5%]"
                              }
                            >
                              The type of Vehicle, Model Number, Fuel Type,
                              Capacity etc
                            </li>
                            <li
                              className={
                                "text-[#595959] text-[14px] text-justify my-1 ml-[6%] text-[#595959] sm:text-[16px] text-justify sm:my-3 sm:ml-[5%]"
                              }
                            >
                              The city
                            </li>
                            <li
                              className={
                                "text-[#595959] text-[14px] text-justify my-1 ml-[6%] text-[#595959] sm:text-[16px] text-justify sm:my-3 sm:ml-[5%]"
                              }
                            >
                              Age and profession
                            </li>
                            <li
                              className={
                                "text-[#595959] text-[14px] text-justify my-1 ml-[6%] text-[#595959] sm:text-[16px] text-justify sm:my-3 sm:ml-[5%]"
                              }
                            >
                              Accessories added or any modifications made in the
                              policy
                            </li>

                            <p
                              className={
                                "text-[#595959] text-[14px] text-justify my-1 font-[600] text-[#595959] sm:text-[16px] text-justify sm:my-3 font-[600]"
                              }
                            >
                              These are the factors that determine Car Insurance
                              quotes that are required to pay to buy the policy.
                              Use Car Insurance online calculators to find the
                              premium payable on a policy.
                            </p>
                          </>
                        ) : (
                          <>
                            {" "}
                            <span className="font-[600]">
                              {item.desc_head}
                            </span>{" "}
                            {item.desc}
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <Footer />
      </div>
    </div>
  );
}

export default PolicyDetails;
