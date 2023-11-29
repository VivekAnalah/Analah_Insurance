import "../../Styles/about.css";

function About() {
  const aboutUs_detials = [
    {
      icons: "target1.png",
      heading: "Objective",
      text: "Provide a broad range of insurance products from trusted insurers, ensuring the best possible coverage.",
    },
    {
      icons: "compare11.png",
      heading: "Compare policies",
      text: "Ability to compare various policies' features and prices for the best value.",
    },
    {
      icons: "fastTime1.png",
      heading: "Quick Process",
      text: "Complete policy-related tasks quickly and efficiently with a few clicks.",
    },
    {
      icons: "discount1.png",
      heading: "Competitive Pricing",
      text: "Offer the most competitive rates for high-level protection.",
    },
    {
      icons: "bestCustomerExperience1.png",
      heading: "Experienced Professionals",
      text: "Dedicated team to help maximize policy benefits and protect against potential risks.",
    },
    {
      icons: "paymentSystem1.png",
      heading: "Online Renewal and Claims",
      text: "Hassle-free service for policy renewal and claims, even for policies not bought with us.",
    },
  ];

  return (
    <div
      className="w-[100%] aboutContainer mt-[0px] scroll-mt-[50px]"
      id="about"
    >
      <div className="m-[auto]">
        <div className="topicAbout ">
          About <sapn className="topic2About">Us</sapn>
        </div>
        <p className="textStyleAbout">
          Analah Insurance is an IRDAI regulated Insurance Broking Firm, with
          headquarters in Mumbai's prestigious BKC area.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-[auto] w-[64%] mt-[50px]">
        {aboutUs_detials &&
          aboutUs_detials.map((ele, i) => (
            <div className="p-[6%] grid grid-cols-[20%,80%]  gridStyle" key={i}>
              <div className="">
                <img
                  src={`/Images/${ele.icons}`}
                  className="aboutIcons"
                  alt="Icons"
                />
              </div>
              <div>
                <h5 className="textHeadings">{ele.heading}</h5>
                <p className="contentTextStyle mt-[15px]">{ele.text}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default About;
