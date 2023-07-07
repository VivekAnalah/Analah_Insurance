// import { useMediaQuery } from "@mui/material";
import "../../Styles/policyDetails.css";
import Footer from "../footer";
import KnowMore from "./knowMoreSection";

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
  isRequired ,
  whyRequired_head ,
  whyRequired_Text ,
  what,
  whatText,
  whatHeadingText,
  whatDefinition,
  gridText,
  gridHeader,
  document_data,
  add_ons_array

}) {
  // const matches = useMediaQuery("(max-width:500px)");

  const title = head;
  const myArr = title.split(" ");

  console.log(myArr[0], Ins_Text_1);

  return (
    <div>
      {/* Top Section */}

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
          {myArr[0] === "Term"  ? (
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

      {/* Know More Section */}
      <KnowMore
        head={head}
        RetirementInsurance={RetirementInsurance}
        description_1={description_1}
        description_2={description_2}
        description_3={description_3}
        helping_verb={helping_verb}
        why={why}
        whyText={whyText}
        no_benefit={no_benefit}
        benefit_head={benefit_head}
        benefits={benefits}
        twoWheel={twoWheel}
        homeInsurance={homeInsurance}
        key_feature_head={key_feature_head}
        keyTerms={keyTerms}
        car={car}
        isRequired = {isRequired} 
  whyRequired_head = {whyRequired_head}
  whyRequired_Text ={whyRequired_Text}
  what = {what}
  whatText = {whatText}
  whatHeadingText = {whatHeadingText}
  whatDefinition = {whatDefinition}
  gridHeader = {gridHeader}
  gridText = {gridText}
  document_data = {document_data}
  add_ons_array = {add_ons_array}
      />
      <div className="mt-[20px]">
        <Footer />
      </div>
    </div>
  );
}

export default PolicyDetails;
