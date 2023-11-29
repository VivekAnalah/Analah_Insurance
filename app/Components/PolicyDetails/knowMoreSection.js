export default function KnowMore(props) {
  const {
    head,
    benefit_head,
    key_feature_head,

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

    helping_verb,
    no_benefit,
    isRequired,
    whyRequired_head,
    whyRequired_Text,
    what,
    whatText,

    whatDefinition,
    gridText,
    gridHeader,
    document_data,
    add_ons_array,
    extra_data,
    gridTopRight,
    gridTopLeft,
  } = props;

  return (
    <div className="my-0 ">
      <div className="relative ">
        <img
          alt="left triangle"
          src={"/Images/rightTriangle.png"}
          className="object-contain aspect-auto sm:w-[100px] w-[0px] absolute sm:top-[1%] top-[2.5%]  h-auto rotate-180 md:display hidden"
        />
        <div
          className={
            gridText
              ? " pt-10 sm:ml-[8.5%] sm:mr-[8.5%] ml-[5%] mr-[5%] mx-auto pb-20"
              : " pt-10 sm:ml-[8.5%] sm:mr-[8.5%] ml-[5%] mr-[5%] mx-auto pb-10 lg:pb-20"
          }
        >
          <div>
            <h2 className=" pb-8 lg:pb-11 text-center textHeader2">
              Know more about <span className="textHeader1">{head}</span>
            </h2>
          </div>

          {/* Flex Table of Conent  */}

          <div className="flex sm:w-[90%] w-[100%] sm:ml-[50px] ml-[0%] gap-[5%]">
            <div className="lg:w-[285px] w-[250px] sm:block hidden h-[fit-content] sm:ml-[5%] ml-[0%] rounded-[19px] bg-[#eceff3] pb-[20px] sticky top-[80px]">
              <div className="anchorParent">
                {/* Client Side */}
                <a href="#top">
                  <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                    <div className="sideDot mt-[4px]"></div>
                    {RetirementInsurance ? (
                      <div
                        className="text-[#595959] text-[12px] font-400 text-start"
                        id="retirementText"
                      >
                        Retirement or Pension Plans
                      </div>
                    ) : (
                      <div className="text-[#595959] text-[12px] font-400 text-start">
                        {head}
                      </div>
                    )}

                    <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                  </button>
                </a>
                {/* ----------------- */}
              </div>

              {why ? (
                <div className="anchorParent">
                  {/* Client Side */}
                  <a href="#why">
                    <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                      <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                      <div className="text-[#595959] text-[12px] font-400 text-start">
                        Why {helping_verb} {head} essential?
                      </div>
                      <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                    </button>
                  </a>
                  {/* ------------- */}
                </div>
              ) : (
                ""
              )}

              {what ? (
                <>
                  <div className="anchorParent">
                    {/* Client side  */}
                    <a href="#what">
                      <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                        <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                        <div className="text-[#595959] text-[12px] font-400 text-start">
                          What is Travel Insurance?
                        </div>
                        <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                      </button>
                    </a>
                    {/* --------- */}
                  </div>
                </>
              ) : (
                <></>
              )}

              {no_benefit ? (
                <></>
              ) : (
                <>
                  <div className="anchorParent">
                    {/* Client Side */}
                    <a href="#no_benefit">
                      <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                        <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                        <div className="text-[#595959] text-[12px] font-400 text-start">
                          {benefit_head}
                        </div>
                        <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                      </button>
                    </a>
                    {/* -------------- */}
                  </div>
                </>
              )}

              {twoWheel ? (
                <>
                  <div className="anchorParent">
                    {/* Client Side */}
                    <a href="#twoWheel">
                      <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                        <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                        <div className="text-[#595959] text-[12px] font-400 text-start">
                          {benefit_head}
                        </div>
                        <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                      </button>
                    </a>
                    {/* -------------- */}
                  </div>
                </>
              ) : (
                <></>
              )}

              {twoWheel ? (
                <>
                  <div className="anchorParent">
                    {/* Client Side */}
                    <a href="#key_terms">
                      <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                        <div className="sideDot mt-[4px]"></div>
                        <div className="text-[#595959] text-[12px] font-400 text-start">
                          How to choose a Two-wheeler Insurance Policy?
                        </div>
                        <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                      </button>
                    </a>
                    {/* -------------- */}
                  </div>
                </>
              ) : homeInsurance ? (
                <></>
              ) : (
                <>
                  <div className="anchorParent">
                    {/* Client Side */}
                    <a href="#key_terms">
                      <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                        <div className="sideDot mt-[4px]"></div>
                        <div className="text-[#595959] text-[12px] font-400 text-start">
                          {key_feature_head}
                        </div>
                        <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                      </button>
                    </a>
                    {/* -------------- */}
                  </div>
                </>
              )}
              {homeInsurance ? <></> : <></>}

              {gridHeader ? (
                <>
                  <div className="anchorParent">
                    {/* Client Side */}
                    <a href="#gridHeader">
                      <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                        <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                        <div className="text-[#595959] text-[12px] font-400 text-start">
                          {gridHeader}
                        </div>
                        <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                      </button>
                    </a>
                    {/* -------------- */}
                  </div>
                </>
              ) : (
                <></>
              )}

              {isRequired ? (
                <>
                  <div className="anchorParent">
                    {/* Client Side */}
                    <a href="#isRequired">
                      <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                        <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                        <div className="text-[#595959] text-[12px] font-400 text-start">
                          {whyRequired_head}
                        </div>
                        <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                      </button>
                    </a>
                    {/* -------------- */}
                  </div>
                </>
              ) : (
                <></>
              )}

              {extra_data ? (
                <>
                  <div className="anchorParent">
                    {/* Client Side */}
                    <a href="#extra">
                      <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                        <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                        <div className="text-[#595959] text-[12px] font-400 text-start">
                          Add-ons in a Car Insurance Policy
                        </div>
                        <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                      </button>
                    </a>
                    {/* -------------- */}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            <div className=" w-[80%] m-auto">
              <div>
                <section id="top" className="scroll-mt-[100px]">
                  {RetirementInsurance ? (
                    <h2 className="text-[#4C8CE7] md:text-[18px] text-[16px] lg:text-[20px] font-semibold mb-[20px] font-600">
                      Retirement or Pension Plans
                    </h2>
                  ) : (
                    <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                      {head}
                    </h2>
                  )}

                  <p className="text_font text-justify font-400 pb-[40px] lg:pb-[40px]">
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
                </section>

                <section id="why" className="scroll-mt-[100px]">
                  {why ? (
                    <>
                      <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                        Why {helping_verb} {head} essential?
                      </h2>{" "}
                      <ul className="list-disc ml-4 mb-10">
                        {whyText.map((item, index) => {
                          return (
                            <li
                              className="text_font font-[400] text-justify mb-4 lg:mb-6"
                              key={index}
                            >
                              <span className="font-[600]">
                                {item.desc_head}
                              </span>{" "}
                              {item.desc}
                            </li>
                          );
                        })}
                      </ul>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </section>

                <section id="what" className="scroll-mt-[100px]">
                  {what ? (
                    <>
                      <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                        What is Travel Insurance?
                      </h2>{" "}
                      <p className="text_font text-justify">{whatDefinition}</p>
                      <p className="text-[#595959] font-[600] text-base lg:text-lg text-justify mb-4 mt-4 lg:mb-6">
                        Types of Travel Insurance in India
                      </p>
                      <ul className="list-disc ml-4 mb-10">
                        {whatText &&
                          whatText.map((item, index) => {
                            return (
                              <li
                                className="text_font text-justify mb-4 lg:mb-6"
                                key={index}
                              >
                                <span className="font-[600]">
                                  {item.desc_head}
                                </span>{" "}
                                {item.desc}
                              </li>
                            );
                          })}
                      </ul>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </section>

                <section id="no_benefit" className="scroll-mt-[100px]">
                  {no_benefit ? (
                    ""
                  ) : (
                    <>
                      <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                        {benefit_head}
                      </h2>
                      <ul className="list-disc ml-4 mb-10">
                        {benefits.map((item, index) => {
                          return (
                            <li
                              className="text_font text-justify mb-4 lg:mb-6"
                              key={index}
                            >
                              <span className="font-[600]">
                                {item.desc_head}
                              </span>{" "}
                              {item.desc}
                            </li>
                          );
                        })}
                      </ul>{" "}
                    </>
                  )}
                </section>

                <section id="twoWheel" className="scroll-mt-[100px]">
                  {twoWheel ? (
                    <>
                      <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
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
                              <span className="font-[600]">
                                {item.desc_head}
                              </span>{" "}
                              {item.desc}
                            </li>
                          );
                        })}
                      </ul>{" "}
                      <p className="text-[#595959] text-[16px] text-justify mb-4 lg:mb-6 font-[600]">
                        It is important to carefully assess the coverage, terms,
                        and conditions offered by different insurance providers
                        and choose a policy that best suits your requirements
                        and budget.
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </section>

                <section id="key_terms" className="scroll-mt-[100px]">
                  {twoWheel ? (
                    <>
                      <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                        How to choose a Two-wheeler Insurance Policy?
                      </h2>
                      <p className="text_font text-justify mb-4 lg:mb-6">
                        Once you understand the significance of having a bike
                        insurance policy, the subsequent step is to familiarize
                        yourself with the types of bike insurance policies
                        available. In the market, there are two categories of
                        bike insurance policies. The first is a third-party bike
                        insurance, which is a fundamental policy providing
                        coverage for damages caused to a third party due to your
                        bike. On the other hand, a comprehensive bike insurance
                        plan offers coverage for both you and the third party
                        involved.
                      </p>
                      <p className="text_font text-justify mb-4 lg:mb-6">
                        Nevertheless, similar to any other purchase, it is
                        crucial to conduct thorough research and compare your
                        needs with affordability before buying a bike insurance
                        policy. Here are some valuable tips that can assist you
                        in selecting the best bike insurance plan:
                      </p>
                    </>
                  ) : homeInsurance ? (
                    <></>
                  ) : (
                    <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
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
                                  <span className="font-[600]">Premiums:</span>{" "}
                                  The premiums for Car Insurance are decided on
                                  the basis of:
                                </p>
                                <li
                                  className={
                                    "text_font text-justify my-1 ml-[6%] sm:text_font sm:text-justify sm:my-3 sm:ml-[5%]"
                                  }
                                >
                                  The type of Vehicle, Model Number, Fuel Type,
                                  Capacity etc
                                </li>
                                <li
                                  className={
                                    "text_font text-justify my-1 ml-[6%] sm:text_font sm:text-justify sm:my-3 sm:ml-[5%]"
                                  }
                                >
                                  The city
                                </li>
                                <li
                                  className={
                                    "text_font text-justify my-1 ml-[6%] sm:text_font sm:text-justify sm:my-3 sm:ml-[5%]"
                                  }
                                >
                                  Age and profession
                                </li>
                                <li
                                  className={
                                    "text_font text-justify my-1 ml-[6%] sm:text_font sm:text-justify sm:my-3 sm:ml-[5%]"
                                  }
                                >
                                  Accessories added or any modifications made in
                                  the policy
                                </li>

                                <p
                                  className={
                                    "text_font text-justify my-1 ml-[6%] sm:text_font sm:text-justify sm:my-3 sm:ml-[5%]"
                                  }
                                >
                                  These are the factors that determine Car
                                  Insurance quotes that are required to pay to
                                  buy the policy. Use Car Insurance online
                                  calculators to find the premium payable on a
                                  policy.
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
                </section>
              </div>

              {/* What is covered Travel Insurance section */}

              <section id="gridHeader" className="scroll-mt-[100px]">
                {gridHeader ? (
                  <>
                    <div className="w-[100%] mb-[15px]">
                      <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                        {gridHeader}
                      </h2>

                      <div className="flex gap-[5px] mt-[5px]">
                        <div className="w-[30%]   font-[600] text-[#595959] sm:text-[16px] text-[14px] bg-[#FFFFFF] p-[2%] flex  items-center">
                          {gridTopLeft}
                        </div>
                        <div className=" p-[2%] w-[70%] text-justify text-[#595959] sm:text-[16px] text-[14px] bg-[#FFFFFF] font-[600]">
                          {gridTopRight}
                        </div>
                      </div>
                      {gridText &&
                        gridText.map((text, index) => (
                          <div className="flex gap-[5px] mt-[5px]" key={index}>
                            <div className="w-[30%]  font-[600] text-[#595959] sm:text-[16px] text-[14px] bg-[#FFFFFF] p-[2%] flex  items-center">
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
              </section>

              {/* Why required section for Car  */}
              <section id="isRequired" className="scroll-mt-[100px]">
                {isRequired ? (
                  <>
                    <h2 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[20px] font-600">
                      {whyRequired_head}
                    </h2>
                    <ul className="list-disc ml-4 mb-10">
                      {whyRequired_Text &&
                        whyRequired_Text.map((item, index) => {
                          return (
                            <li
                              className="text_font text-justify mb-4 lg:mb-6"
                              key={index}
                            >
                              <span className="font-[600]">
                                {item.require_head}
                              </span>{" "}
                              {item.require}
                            </li>
                          );
                        })}
                    </ul>{" "}
                  </>
                ) : (
                  ""
                )}
              </section>

              {/* Add-ons In car  */}

              <section id="extra" className="scroll-mt-[100px]">
                {extra_data ? (
                  <div>
                    <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
                      Add-ons in a Car Insurance Policy
                    </p>
                    <p className="text_font ml-[16px] text-justify mb-4 lg:mb-6">
                      In addition to the standard Car Insurance coverage,
                      Insurance companies also offer ‘Add-on Covers’, which are
                      additional covers that protect your car and offer extra
                      coverage. By paying an additional premium, which is added
                      to the Car Insurance quotes to determine the final premium
                      payable for the policy, Add-on Covers can be purchased.
                      Comprehensive Car Insurance packages provide Add-ons.
                      Below are some examples of frequent Add-ons:
                    </p>
                    <ul className="list-disc ml-4 mb-10">
                      {add_ons_array &&
                        add_ons_array.map((item, index) => {
                          return (
                            <li
                              className="text_font text-justify mb-4 lg:mb-6"
                              key={index}
                            >
                              <span className="font-[600]">
                                {item.require_head}
                              </span>{" "}
                              {item.require}
                            </li>
                          );
                        })}
                    </ul>{" "}
                    <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
                      Documents required to Raise Car Insurance Claim:
                    </p>
                    <p className="text_font ml-[16px] text-justify mb-4 lg:mb-6">
                      There is no actual paperwork required to raise a claim
                      against your policy. The following documents must instead
                      be uploaded digitally via our digital platform (mobile
                      website/app). Please note that depending on the claim, the
                      list of required documents may change.
                    </p>
                    <ul className="list-disc ml-4 mb-10">
                      {document_data &&
                        document_data.map((item, index) => {
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
              </section>
            </div>
          </div>
        </div>
        <img
          alt="left triangle"
          src={"/Images/rightTriangle.png"}
          className="object-contain aspect-auto sm:w-[100px] w-[0px] absolute  bottom-[0%] right-[0%]  h-auto  sm:block hidden"
        />
      </div>
    </div>
  );
}
