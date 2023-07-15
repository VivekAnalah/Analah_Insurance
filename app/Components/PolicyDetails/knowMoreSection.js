export default function KnowMore(props) {
  const {
    head,
    RetirementInsurance,
    description_1,
    description_2,
    description_3,
    helping_verb,
    why,
    whyText,
    no_benefit,
    benefit_head,
    benefits,
    twoWheel,
    homeInsurance,
    key_feature_head,
    keyTerms,
    car,
    isRequired,
    whyRequired_head,
    whyRequired_Text,
    what,
    whatText,
    
    whatDefinition,
    gridHeader,
    gridText,
    document_data,
    add_ons_array,
    extra_data,
  gridTopRight,
  gridTopLeft,
  
  } = props;

  return (
    <div className="my-0 bg-[#F5F5F5]">
      <div className="relative ">
        <img
          alt="left triangle"
          src={"/rightTriangle.png"}
          className="object-contain aspect-auto sm:w-[100px] w-[0px] absolute sm:top-[1%] top-[2.5%]  h-auto rotate-180 sm:block hidden"
        />

<div className={ gridText ? "bg-[#F5F5F5] pt-10 ml-[8.5%] mr-[8.5%] mx-auto pb-20" : "bg-[#F5F5F5] pt-10 ml-[8.5%] mr-[8.5%] mx-auto pb-10 lg:pb-20"}>
          <div>
          <h2 className="font-semibold my-3 lg:my-5 lg:m-0 pb-8 lg:pb-11 text-center sm:text-[22px] text-[24px] 2xl:text-[32px] lg:text-[28px] md:text-[26px]">
              <span className=" sm:border-b-[5px] sm:pb-[15px] sm:border-[#2a44a9]">
                Know
              </span>{" "}
              more about {head}
            </h2>
          </div>

          <div>
            {RetirementInsurance ? (
              <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
                Retirement or Pension Plans
              </h2>
            ) : (
              <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
                {head}
              </h2>
            )}

            <p className="text_font text-justify pb-7 lg:pb-14">
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
                <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
                  Why {helping_verb} {head} essential?
                </h2>{" "}
                <ul className="list-disc ml-4 mb-10">
                  {whyText &&
                    whyText.map((item, index) => {
                      return (
                        <li
                          className="text_font text-justify mb-4 lg:mb-6"
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

            {what ? (
              <>
                <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
                  What is Travel Insurance?
                </h2>{" "}
                <p className="text_font text-justify">
                  {whatDefinition}
                </p>
                <p className="text-[#595959] font-[600] text-base lg:text-lg text-justify mb-4 mt-4 lg:mb-6">
                  Types of Travel Insurance in India
                </p>
                <ul className="list-disc ml-4 mb-10">
                  {whatText &&
                    whatText.map((item, index) => {
                      return (
                        <li
                          className="text-[#595959] text-base lg:text-base text-justify mb-4 lg:mb-6"
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
                <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
                  {benefit_head}
                </h2>
                <ul className="list-disc ml-4 mb-10">
                  {benefits &&
                    benefits.map((item, index) => {
                      return (
                        <li
                          className="text_font text-justify mb-4 lg:mb-6"
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
 {twoWheel ? (
                <>
                  <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
                    {benefit_head}
                  </h2>
                  <p className="text_font text-justify mb-4 lg:mb-6">
                    Bike insurance in India offers several benefits to
                    policyholders. Some of the key advantages include:
                  </p>
                  <ul className="list-disc ml-4 mb-10">
                    {benefits.map((item, index) => {
                      return (
                        <li
                          className="text_font text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                  </ul>{" "}
                  <p className="text_font text-justify mb-4 lg:mb-6 font-[600]">
                    It is important to carefully assess the coverage, terms, and
                    conditions offered by different insurance providers and
                    choose a policy that best suits your requirements and
                    budget.
                  </p>
                </>
              ) : (
                <></>
              )}
            <div className={"my-2 h-[10px] sm:my-4 sm:h-[10px]"} />
            {twoWheel ? (
               <>
              <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
             How to choose a Two-wheeler Insurance Policy?
              </h2>
               <p className="text_font text-justify mb-4 lg:mb-6">
               Once you understand the significance of having a bike
               insurance policy, the subsequent step is to familiarize
               yourself with the types of bike insurance policies
               available. In the market, there are two categories of bike
               insurance policies. The first is a third-party bike
               insurance, which is a fundamental policy providing coverage
               for damages caused to a third party due to your bike. On the
               other hand, a comprehensive bike insurance plan offers
               coverage for both you and the third party involved.
             </p>
             <p className="text_font text-justify mb-4 lg:mb-6">
               Nevertheless, similar to any other purchase, it is crucial
               to conduct thorough research and compare your needs with
               affordability before buying a bike insurance policy. Here
               are some valuable tips that can assist you in selecting the
               best bike insurance plan:
             </p>
           </>
            ) : homeInsurance ? (
              <></>
            ) : (
              <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
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
                      className="text_font text-justify mb-4 lg:mb-6"
                      key={index}
                    >
                      {car && item.id == 3 ? (
                        <>
                          <p>
                            <span className="font-[600]">Premiums:</span> The
                            premiums for Car Insurance are decided on the basis
                            of:
                          </p>
                          <li
                            className={
                              "text_font text-justify my-1 ml-[6%] sm:my-3 sm:ml-[5%]"
                            }
                          >
                            The type of Vehicle, Model Number, Fuel Type,
                            Capacity etc
                          </li>
                          <li
                            className={
                              " text_font my-1 ml-[6%] text-justify sm:my-3 sm:ml-[5%]"
                            }
                          >
                            The city
                          </li>
                          <li
                            className={
                              "text_font  text-justify my-1 ml-[6%]  sm:my-3 sm:ml-[5%]"
                            }
                          >
                            Age and profession
                          </li>
                          <li
                            className={
                              "text_font  text-justify my-1 ml-[6%]  sm:my-3 sm:ml-[5%]"
                            }
                          >
                            Accessories added or any modifications made in the
                            policy
                          </li>

                          <p
                            className={
                              "text_font text-justify my-1 font-[600] sm:my-3"
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

          {/* What is covered Travel Insurance section */}

          {gridHeader ? (
            <>
              <div className="w-[100%] mb-[15px]">
                <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
                  {gridHeader}
                </h2>

                <div className="flex gap-[5px] mt-[5px]">
                  <div className="w-[30%] text_font  font-[600]  bg-[#FFFFFF] p-[2%] flex  items-center">
                  {gridTopLeft}
                  </div>
                  <div className=" p-[2%] w-[70%] text-justify text_font  bg-[#FFFFFF] font-[600]">
                  {gridTopRight}
                  </div>
                </div>
                {gridText &&
                  gridText.map((text, index) => (
                    <div className="flex gap-[5px] mt-[5px]" key={index}>
                      <div className="w-[30%] text_font font-[600]  bg-[#FFFFFF] p-[2%] flex  items-center">
                        {text.title}
                      </div>
                      <div className="text_font p-[2%] w-[70%] text-justify  bg-[#FFFFFF]">
                        {text.desc}
                      </div>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <></>
          )}
          {/* Why required section for Car  */}
          {isRequired ? (
            <>
              <h2 className="text-[#2A44A9] text-[18px] lg:text-[23px] font-semibold mb-7">
                {whyRequired_head}
              </h2>
              <ul className="list-disc ml-4 mb-10">
                {whyRequired_Text && whyRequired_Text.map((item, index) => {
                  return (
                    <li
                      className="text_font text-justify mb-4 lg:mb-6"
                      key={index}
                    >
                      <span className="font-[600]">{item.require_head}</span>{" "}
                      {item.require}
                    </li>
                  );
                })}
              </ul>{" "}
            </>
          ) : (
            ""
          )}

          {/* Add-ons In car  */}
          {extra_data ? (
          <div>
            <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
              Add-ons in a Car Insurance Policy
            </p>
            <p className="text_font ml-[16px] text-justify mb-4 lg:mb-6">
              In addition to the standard Car Insurance coverage, Insurance
              companies also offer ‘Add-on Covers’, which are additional covers
              that protect your car and offer extra coverage. By paying an
              additional premium, which is added to the Car Insurance quotes to
              determine the final premium payable for the policy, Add-on Covers
              can be purchased. Comprehensive Car Insurance packages provide
              Add-ons. Below are some examples of frequent Add-ons:
            </p>
            
            <ul className="list-disc ml-4 mb-10">
              {add_ons_array && add_ons_array.map((item, index) => {
                return (
                  <li
                    className="text_font text-justify mb-4 lg:mb-6"
                    key={index}
                  >
                    <span className="font-[600]">{item.require_head}</span>{" "}
                    {item.require}
                  </li>
                );
              })}
            </ul>{" "}
            <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
              Documents required to Raise Car Insurance Claim:
            </p>
            <p className="text_font ml-[16px] text-justify mb-4 lg:mb-6">
              There is no actual paperwork required to raise a claim against
              your policy. The following documents must instead be uploaded
              digitally via our digital platform (mobile website/app). Please
              note that depending on the claim, the list of required documents
              may change.
            </p>
            <ul className="list-disc ml-4 mb-10">
              {document_data && document_data.map((item, index) => {
                return (
                  <li
                    className="text_font text-justify  ml-[5%]"
                    key={index}
                  >
                 
                    {item.require}
                  </li>
                );
              })}
            </ul>{" "}
          </div>
          ) : (
            <></>
          )}
        </div>
        <img
          alt="left triangle"
          src={"/rightTriangle.png"}
          className="object-contain aspect-auto sm:w-[100px] w-[0px] absolute  bottom-[0%] right-[0%]  h-auto  sm:block hidden"
        />
      </div>
    </div>
  );
}
