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
    whatHeadingText,
    whatDefinition,
    gridHeader,
    gridText,
    document_data,
    add_ons_array
  } = props;

  return (
    <div className="my-0 bg-[#F5F5F5]">
      <div className="relative ">
        <img
          alt="left triangle"
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
                  {whyText &&
                    whyText.map((item, index) => {
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

            {what ? (
              <>
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  What is Travel Insurance?
                </h2>{" "}
                <p className="text-[#595959] text-base lg:text-lg text-justify">
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
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  {benefit_head}
                </h2>
                <ul className="list-disc ml-4 mb-10">
                  {benefits &&
                    benefits.map((item, index) => {
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
                            premiums for Car Insurance are decided on the basis
                            of:
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

          {/* What is covered Travel Insurance section */}

          {gridHeader ? (
            <>
              <div className="w-[100%]">
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  {gridHeader}
                </h2>

                <div className="flex gap-[5px] mt-[5px]">
                  <div className="w-[30%] text-[#595959] text-base font-[600]  bg-[#FFFFFF] p-[2%] flex  items-center">
                    Coverage Benefit
                  </div>
                  <div className="text-[#595959] text-base p-[2%] w-[70%] text-justify  bg-[#FFFFFF] font-[600]">
                    Meaning
                  </div>
                </div>
                {gridText &&
                  gridText.map((text, index) => (
                    <div className="flex gap-[5px] mt-[5px]" key={index}>
                      <div className="w-[30%] text-[#595959] text-base font-[600]  bg-[#FFFFFF] p-[2%] flex  items-center">
                        {text.title}
                      </div>
                      <div className="text-[#595959] text-base p-[2%] w-[70%] text-justify  bg-[#FFFFFF]">
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
              <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                {whyRequired_head}
              </h2>
              <ul className="list-disc ml-4 mb-10">
                {whyRequired_Text.map((item, index) => {
                  return (
                    <li
                      className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
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
          <div>
            <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
              Add-ons in a Car Insurance Policy
            </p>
            <p className="text-[#595959] text-base lg:text-lg ml-[16px] text-justify mb-4 lg:mb-6">
              In addition to the standard Car Insurance coverage, Insurance
              companies also offer ‘Add-on Covers’, which are additional covers
              that protect your car and offer extra coverage. By paying an
              additional premium, which is added to the Car Insurance quotes to
              determine the final premium payable for the policy, Add-on Covers
              can be purchased. Comprehensive Car Insurance packages provide
              Add-ons. Below are some examples of frequent Add-ons:
            </p>
            {/* <ul className="list-disc ml-4 mb-10">
              {whyRequired_Text.map((item, index) => {
                return (
                  <li
                    className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                    key={index}
                  >
                    <p className="font-[600] text-[20px] mb-4">
                      {item.require_head}
                    </p>{" "}
                    <p>{item.require}</p>
                  </li>
                );
              })}
            </ul>{" "} */}
            <ul className="list-disc ml-4 mb-10">
              {add_ons_array && add_ons_array.map((item, index) => {
                return (
                  <li
                    className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
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
            <p className="text-[#595959] text-base lg:text-lg ml-[16px] text-justify mb-4 lg:mb-6">
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
                    className="text-[#595959] text-base lg:text-lg text-justify  ml-[5%]"
                    key={index}
                  >
                 
                    {item.require}
                  </li>
                );
              })}
            </ul>{" "}
          </div>
        </div>
        <img
          alt="left triangle"
          src={"/rightTriangle.png"}
          className="object-contain aspect-auto sm:w-[100px] w-[70px] absolute  bottom-[0%] right-[0%]  h-auto  sm:block hidden"
        />
      </div>
    </div>
  );
}
