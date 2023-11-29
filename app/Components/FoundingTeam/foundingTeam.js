import "../../Styles/foundingTeam.css";
import { ReadMore } from "./ReadMore";
import { ReadMore2 } from "./ReadMore2";

function FoundingTeam() {
  const bg = {
    background: "linear-gradient(180deg, #F5F5F5 0%, #F6FAFE 100%)",
  };

  return (
    <div className="w-[100%] lg:pt-[80px] md:pt-[60px] pt-[40px] pb-[100px] bg-[#F2F9FF]">
      <div className="topic pb-[5px] ">
        <span className="title-border-bottom"> Founding </span>{" "}
        <sapn className="topic2">Team</sapn>
      </div>

      <div
        className={`FoundingTeamGrid 2xl:w-[60%] lg:w-[70%] w-[75%] m-[auto] ${bg} grid grid-cols-[28%,65%]  gap-[3%] mt-[50px] foundingBg  relative h-[auto] `}
      >
        <div className="flex">
          <img
            src={"/Images/Vaishali_Dhankani2.png"}
            alt="Vaishali Dhankani"
            className="foundingImagesWidth mb-[0px]"
          />
        </div>
        <div className="mt-[20px] ContentContainer ">
          <div>
            <p className="textStyleFounding">
              Vaishali holds over two decades of expertise in the Finance,
              Banking and Insurance sector.
            </p>
            <p className="textStyleFounding mt-[15px]">
              She is the CEO of Analah Insurance and the founder of the Analah
              Group and oversees investment transactions worth more than USD 900
              million.
            </p>
          </div>
          {/* ----------- Read More Section --------- */}
          <ReadMore>
            <span className=" hover:cursor-pointer hover:text-[#595959] textStyleFounding_read border-b-[2px]">
              Read More
            </span>

            {/* ---------------------  Hidden Text -------------------- */}

            <p className="textStyleFounding mt-[15px]">
              She leads investments for the group's Financial Services and
              Insurance sectors.
            </p>
            <p className="textStyleFounding mt-[15px]">
              She has been majorly focusing on Pre-IPO, venture capital and
              early-stage investments.
            </p>
            <p className="textStyleFounding mt-[15px]">
              Her recommendations have generated multi-bagger returns for
              onshore and offshore investors.
            </p>
            <p className="textStyleFounding mt-[15px]">
              Her foresight and stock picking abilities in private markets has
              helped investors and institutions diversify their portfolio, in
              turn generating high returns.
            </p>

            <p className="textStyleFounding mt-[15px]">
              Vaishali is a Chartered Accountant by profession, along with a
              Diploma in Systems Management (DNIIT).
            </p>
            <p className="textStyleFounding mt-[15px]">
              She has also held various senior positions in leading
              organizations such as ICICI Bank and National Payments Corporation
              of India (set up by the Reserve Bank of India & Indian Banking
              Association).
            </p>

            {/* ----------- Less Section --------- */}

            <span className="hover:cursor-pointer  hover:text-[#595959] textStyleFounding_read border-b-[2px] ">
              Less
            </span>
          </ReadMore>
          <div className="flex gap-[20px] mt-[15px] pb-[15px] ">
            <h3 className="name">Vaishali Dhankani</h3>

            <p className="text-[16px] text-[#4481E4] font-400 md:text-[14px] mt-[4px] designation">
              CEO
            </p>
          </div>
        </div>

        {/* Comma Image */}

        <div className="absolute top-[3%] 2xl:left-[25%] lg:left-[24%] md:left-[23%]  CommaImage">
          <img
            src={"/Images/Comma.png"}
            alt="Comma"
            className="2xl:w-[15%] xl:w-[14%]  lg:w-[13%] w-[12%]"
          />
        </div>
      </div>

      {/* ----------- Hitesh Dhankani (Co-Founder) --------------*/}

      <div
        className={`FoundingTeamGrid 2xl:w-[60%] lg:w-[70%] w-[75%]  m-[auto] ${bg} grid grid-cols-[28%,65%]  gap-[3%] mt-[50px] foundingBg  relative h-[auto] `}
      >
        <div className="flex">
          <img
            src={"/Images/hitesh_dhankani4.png"}
            alt="Hitesh Dhankani"
            className=" foundingImagesWidth2 mb-[0px]"
          />
        </div>

        <div className="mt-[20px] ContentContainer2 ">
          <div>
            <p className="textStyleFounding">
              Hitesh is reckoned as a reputable, thoughtful & an action oriented
              leader with proven success in Asset Management, Fundraising,
              Distribution, Sales, Marketing, Research and Advisory across
              Financial Services, Insurance, Real Estate and Technology.
            </p>

            <p className="textStyleFounding mt-[15px]">
              He is the Co-founder of the Analah group, wherein, he is
              responsible for performance, strategy & growth of the company.
            </p>
          </div>

          {/* ----------- Read More Section --------- */}
          <ReadMore2>
            <span className=" hover:cursor-pointer hover:text-[#595959] textStyleFounding_read border-b-[2px]">
              Read More
            </span>

            {/* ---------------------  Hidden Text -------------------- */}

            <p className="textStyleFounding mt-[15px]">
              Hitesh has done his Software Engineering in Systems Management
              (GNIIT) and B.com (Hons).
            </p>
            <p className="textStyleFounding mt-[15px]">
              He also holds a Masters in Business, SMP from the Indian Institute
              of Management (IIM) - Calcutta.
            </p>
            <p className="textStyleFounding mt-[15px]">
              His leadership competence also dives across the Equity sector
              among leading Asset Management Companies, NBFC’s, and Banks.
            </p>

            <p className="textStyleFounding mt-[15px]">
              He possesses a proven entrepreneurial prowess having been a key
              member of core startup teams responsible for the successful launch
              of top notch organizations like HDFC Bank, SBI Asset Management,
              Mirae Asset and Prudential Incorporation (Pramerica AMC).
            </p>

            {/* ----------- Less Section --------- */}

            <span className="hover:cursor-pointer  hover:text-[#595959] textStyleFounding_read border-b-[2px] ">
              Less
            </span>
          </ReadMore2>

          <div className="flex gap-[20px] mt-[15px] pb-[15px]">
            <h3 className="name">Hitesh Dhankani</h3>

            <p className="text-[16px] text-[#4481E4] font-400 md:text-[14px] mt-[4px] designation">
              Co-Founder
            </p>
          </div>
        </div>

        {/* Comma Image */}

        <div className="absolute top-[3%] 2xl:left-[25%] lg:left-[24%] md:left-[23%]  CommaImage">
          <img
            src={"/Images/Comma.png"}
            alt="Comma"
            className="2xl:w-[15%] xl:w-[14%]  lg:w-[13%] w-[12%]"
          />
        </div>
      </div>
    </div>
  );
}

export default FoundingTeam;
