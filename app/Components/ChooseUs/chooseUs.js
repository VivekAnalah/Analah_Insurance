import "../../Styles/chooseUs.css";

function ChooseUs() {
  const IconsProps = "md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] w-[30px]";
  const iconsProps =
    "lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[40px] sm:h-[40px] w-[35px]";

  return (
    <div className=" w-[100%] pt-[50px] bg-[#f6fafe]  ChooseContainer">
      <div className="topic">
        Why <sapn className="topic2">Choose Us?</sapn>
      </div>

      <div className="content xl:w-[80%] lg:w-[900px] md:w-[600px] sm:w-[500px] w-[90%]">
        <input type="radio" name="slider" defaultChecked={false} id="home" />
        <input type="radio" name="slider" defaultChecked={false} id="blog" />
        <input type="radio" name="slider" defaultChecked={true} id="help" />
        <input type="radio" name="slider" defaultChecked={false} id="code" />

        <div className="list ">
          <label htmlFor="home" className="home">
            <div className="iconsDiv">
              <img
                src={"/WhyChoose/calculator51.png"}
                alt="calculation"
                className={`${iconsProps} ml-[-6%]`}
              />
            </div>

            <div className="w-[70%] headingsChooseUs">
              <span>Calculate in Minutes</span>
            </div>
          </label>
          <label htmlFor="blog" className="blog">
            <div className="iconsDiv">
              <img
                src={"/WhyChoose/partnership1.png"}
                alt="Partners"
                className={`${iconsProps}`}
              />
            </div>

            <div className="w-[70%] headingsChooseUs">
              <span>30+ Insurance Partners</span>
            </div>
          </label>
          <label htmlFor="help" className="help">
            <div className="iconsDiv">
              <img
                src={"/WhyChoose/insurance81.png"}
                alt="Get Insured"
                className={`${IconsProps}`}
              />
            </div>

            <div className="w-[70%] headingsChooseUs">
              <span>Simplest Way to Get Insured</span>
            </div>
          </label>

          <label htmlFor="code" className="code">
            <div className="iconsDiv">
              <img
                src={"/WhyChoose/claim1.png"}
                alt="claim"
                className={`${IconsProps}`}
              />
            </div>

            <div className="sm:w-[70%] headingsChooseUs">
              <span> Claims Assistance</span>
            </div>
          </label>

          <div className="slider"></div>
        </div>

        <div className="text-content lg:w-[493.505px] sm:w-[280px] mb-[30px]">
          <div className="home text">
            <p>
              Calculate premiums like never before. All insurance quotes are
              system generated, which eradicate the scope of any human error and
              reduce the time needed to calculate premiums.
            </p>
          </div>
          <div className="blog text">
            <p>
              Compare features and prices of multiple insurance policies easily.
              Shortlist plans that best meet your needs.
            </p>

            <ul className="list-disc ml-[5%] mt-[20px] space-y-2">
              <li>Get best quotes from top insurers instantly</li>
              <li className="mt-[10px]">
                Compare plans and shortlist the best plan
              </li>
            </ul>
          </div>
          <div className="help text">
            <p>
              Applying for Insurance has never been easier! We have online forms
              that ask questions based on the applicant’s demographics and
              profile.
            </p>

            <ul className="list-disc ml-[5%] mt-[20px] space-y-2">
              <li>
                All plans are explained in English. No additional research is
                required
              </li>
              <li className="mt-[10px]">
                Application process is completely online
              </li>
              <li className="mt-[10px]">
                Unbiased advice from experts with extensive experience
              </li>
            </ul>
          </div>
          <div className="code text">
            <p>
              We know how exhausting it can get to raise a claim. We at Analah
              Insurance, have support built in with every policy for help,
              especially when you need it the most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
