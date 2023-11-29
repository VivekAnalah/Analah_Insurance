"use client";
import { useEffect } from "react";
import Footer from "../Components/footer";
import "../Styles/becomeAPosp.css";
// import PoSPButton from "./PoSPButton";

export default function BecomePoSP() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");

        if (entry.intersectionRatio > 0) {
          document
            .querySelector(` .anchorParent a[href="#${id}"]`)
            .classList.add("activesB");
        } else {
          document
            .querySelector(` .anchorParent a[href="#${id}"]`)
            .classList.remove("activesB");
        }
      });
    });

    // Track all sections that have an `id` applied

    const whyBecome = document.getElementById("whyBecome");
    const Eligibility = document.getElementById("Eligibility");
    const steps = document.getElementById("steps");
    observer.observe(whyBecome);
    observer.observe(Eligibility);
    observer.observe(steps);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div className="pb-4">
        <div className="container-fluid containerStyle relative backgroundStylePosp">
          <div className="flex flex-col sm:flex-row  sm:pt-[50px] relative w-[90%] m-auto pb-[67px]">
            <div className="flex flex-col sm:w-[50%] w-[80%]  ml-[10%] m-auto  order-2 sm:order-1 sm:mt-[0px] mt-[45px] PospContentContainer">
              <div className="">
                <h2 className="PospHeader">
                  Become an <br />
                  <span className="textHeader1">
                    {" "}
                    <span className="title-border-bottom">Insura</span>nce PoSP
                  </span>{" "}
                  <span className=" pospSubhead">(Point of Salesperson) </span>
                </h2>
                <div className="  w-[70%] text-justify mt-[29.47px] pospSubTextContainer">
                  <h4 className="pospSubText">
                    Join our growing network of Insurance Partners{" "}
                    <span className="dots-text">...</span>
                    <span className="hidden hiddenText">
                      and work with the most respected names and companies in
                      the insurance industry. Our extensive product range
                      consists of both Life & Non-life Insurance products.
                      <br />
                      <br />
                      <span>
                        We value your referrals and offer excellent commissions
                        on all our plans. So what are you waiting for? Join our
                        team today, sell insurance online as a PoSP and start
                        earning passive income!
                      </span>
                    </span>
                  </h4>

                  <h4 className="pospSubBoldText mt-[11.7px] text-justify">
                    A PoSP is a type of insurance agent who works with insurance
                    companies or brokers to sell insurance policies directly to
                    customers.
                  </h4>
                  <div className=" my-6 sm:mt-[30px] sm:mb-[20px] ">
                    <a href="https://pos.analahinsurance.com/" target="blank">
                      <button className="justify-center items-center divStyles ">
                        Become a PoSP
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col order-1 sm:order-2 w-[70%] sm:w-[50%] PospImageContainer">
              <div className="items-center flex justify-center">
                <div className="w-[100%] flex justify-center">
                  <img
                    alt="insurance"
                    src={"/Images/Asset 15.png"}
                    className="2xl:w-[448px] 2xl:h-[310px] w-[335px] h-[223px] BecomePospImage"
                  />
                </div>
              </div>
            </div>
            {/* Left and Right Side Images */}
          </div>
          <div className="absolute bottom-[0px] left-[0px]">
            <img
              src={"/Images/background_left.png"}
              alt="left"
              className="w-[80%] leftPospImage"
            />
          </div>
          <div className="absolute  right-[0px] bottom-[0px] flex justify-end">
            <img
              src={"/Images/background_right.png"}
              alt="right"
              className="w-[60%] RightPospImage"
            />
          </div>
        </div>

        {/* Why Become a PoSP Section */}
        <div className="relative">
          <img
            src={"/Images/partnerBg.png"}
            className="sm:w-[100px] w-[0px] absolute top-[3%]"
            alt=""
          />

          <img
            src={"/Images/partnerBg.png"}
            className="sm:w-[100px] w-[0px] absolute right-[0px] sm:top-[3%]"
            alt=""
          />

          <div className="pt-10 sm:ml-[8.5%] sm:mr-[8.5%] ml-[5%] mr-[5%] mx-auto ">
            <div>
              <h2 className="textHeader1Lite pb-8 lg:pb-11 text-center ">
                <span className="textHeader1">Why </span>become an Analah
                Insurance PoSP?{" "}
              </h2>
            </div>

            <div className="flex sm:w-[90%] w-[100%] sm:ml-[50px] ml-[0%] gap-[5%]">
              <div className="lg:w-[285px] w-[250px] sm:block hidden h-[fit-content] sm:ml-[5%] ml-[0%] rounded-[19px] bg-[#eceff3] pb-[20px] sticky top-[80px]">
                <div className="anchorParent">
                  <a href="#whyBecome">
                    <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                      <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                      <div className="text-[#595959] text-[12px] font-400 text-start w-[95%]">
                        Why become an Analah Insurance PoSP?
                      </div>
                      <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                    </button>
                  </a>
                </div>

                <div className="anchorParent">
                  <a href="#Eligibility">
                    <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                      <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                      <div className="text-[#595959] text-[12px] font-400 text-start w-[95%]">
                        Eligibility to become a PoSP
                      </div>
                      <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                    </button>
                  </a>
                </div>

                <div className="anchorParent">
                  <a href="#steps">
                    <button className="h-[50px] grid grid-cols-[5%,90%]  gap-[10px] mt-[12%] ml-[5%] relative">
                      <div className="sideDot mt-[4px] bg-[#a3a7a9]"></div>
                      <div className="text-[#595959] text-[12px] font-400 text-start w-[95%]">
                        Simple Steps to Become an IRDAI PoSP
                      </div>
                      <div className="sideLine ml-[4px] mt-[-10px] absolute top-[28px]"></div>
                    </button>
                  </a>
                </div>
              </div>

              <div className="w-[80%] m-auto">
                <div>
                  <section id="whyBecome" className="scroll-mt-[100px]">
                    <ul className="posp-content text_font text-justify  mb-4 lg:mb-6">
                      <li>
                        <b className="pospsubheadingtext">Passive Income:</b>{" "}
                        Earn passive income for each plan that you sell. IRDAI
                        sets a predetermined and fixed level of commissions that
                        PoSPs are paid. Simply cultivate a strong clientele and
                        refer people to our insurance services and develop a
                        steady stream of revenue through policy renewals.
                        Additional work will increase your income further.
                      </li>
                      <li>
                        <b>Ongoing Support & Regular Training:</b> When it comes
                        to insurance, knowledge is key. Avail thorough and
                        regular training from industry experts on latest
                        products.
                      </li>
                      <li>
                        <b>Work from anywhere at any time:</b> All PoSPs use
                        online processes to sell policies, and hence are not
                        required to travel anywhere to sell insurance. Being a
                        PoSP agent gives you the flexibility to work from
                        anywhere at any time, whether you wish to work full-time
                        or part-time.
                      </li>
                      <li>
                        <b> Designated Relationship Manager:</b> Joining our
                        network of PoSPs ensures you are never alone during the
                        sales process. A designated Relationship Manager is
                        assigned to you, who helps you in every step of the way.
                      </li>
                      <li>
                        <b>Scope for High Earnings:</b> As there is no fixed
                        income or any maximum limit, your income will be based
                        on a commission basis and will depend on the number of
                        policies you sell and the renewals you receive. Set your
                        own targets; the more policies you sell, the higher you
                        can earn as a PoSP.
                      </li>
                      <li>
                        <b>Awards and Recognition:</b> Gain national and
                        international recognition by qualifying for global
                        awards like Asia’s Trusted Life Insurance Agents and
                        Advisors and more.
                      </li>
                      <li>
                        <b>Monitor your Performance:</b> Our backend support &
                        MIS helps you track your performance and records.
                      </li>
                    </ul>
                  </section>

                  <section id="Eligibility" className="scroll-mt-[100px]">
                    <h5 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[10px] font-600 ">
                      Eligibility to become a PoSP:
                    </h5>

                    <ul className="list-disc ml-4  text_font text-justify mb-4 lg:mb-6">
                      <li>At least 18 years of age</li>
                      <li>
                        Basic Educational Qualifications (Completed Class 10)
                      </li>
                      <li>
                        Valid Identity Proof (Aadhaar Card, PAN Card and a Bank
                        Account)
                      </li>
                    </ul>
                  </section>

                  <section id="steps" className="scroll-mt-[100px]">
                    <h5 className="text-[#4C8CE7] text-[18px] lg:text-[20px] font-semibold mb-[10px] font-600">
                      Simple Steps to Become an IRDAI PoSP:
                    </h5>

                    <ul className="list-disc ml-4 text_font text-justify mb-4 lg:mb-6">
                      <li>Registration and Complete your KYC</li>
                      <li>Training</li>
                      <li>Examination</li>
                      <li>IRDAI Approved Certification</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>

            {/* <div className="my-8 flex  flex-col  items-center justify-center text-justify "></div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
