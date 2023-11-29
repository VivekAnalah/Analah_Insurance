import "./Styles/home.css";
import Insurance from "./Components/Insurance/Insurance";
import ChooseUs from "./Components/ChooseUs/chooseUs";
import OurPartner from "./Components/OurPartners/ourPartner";
import About from "./Components/About/page";
import Values from "./Components/Value/value";
import FoundingTeam from "./Components/FoundingTeam/foundingTeam";
import Footer from "./Components/footer";
import { OrbitingIcons } from "./Components/OrbitingIcons/OrbitingIcons";
export default function Home() {
  console.log("Server Side");
  const insurance_data = [
    {
      id: 1,
      name: "Term-Life",
      insurance: "Insurance",
      img: "Term_ins_logo1.png",
    },
    {
      id: 2,
      name: "Health",
      insurance: "Insurance",
      img: "Orbit_1_4.png",
    },
    {
      id: 3,
      name: "Family Health",
      insurance: "Insurance",
      img: "Orbit_2_1.png",
    },
    {
      id: 4,
      name: "Group Health",
      insurance: "Insurance",
      img: "Group_ins_logo1.png",
    },
    {
      id: 5,
      name: "Car",
      insurance: "Insurance",
      img: "Orbit_1_1.png",
    },
    {
      id: 6,
      name: "2-Wheeler",
      insurance: "Insurance",
      img: "Bike_ins_logo1.png",
    },

    {
      id: 7,
      name: "Travel",
      insurance: "Insurance",
      img: "Orbit_2_2.png",
    },
    {
      id: 8,
      name: "Home",
      insurance: "Insurance",
      img: "Orbit_1_3.png",
    },
    {
      id: 9,
      name: "Retirement",
      insurance: "Plans",
      img: "Orbit_2_4.png",
    },
    {
      id: 10,
      name: "Investment",
      insurance: "Plans",
      img: "Inner_logo_3.png",
    },
    {
      id: 11,
      name: "Guaranteed Return Plans",
      img: "Guaranteed_ins1.png",
    },
  ];
  return (
    <div >
      {/* <Header /> */}
      <div className="main-hero pt-[50px]">
 
        <div className="homeLeft lg:pl-[6.5%] pl-[8.5%]">
          <div className="py-0 px-5">
            <h1 className="text-[25px] sm:text-[30px] md:text-[40px] leading-[40px]  md:leading-[50px] lg:leading-[55px] font-normal font-500 text-[#FFFFFF]">
              Get the Best&nbsp;
              <span className="text-[#FFFFFF] font-500">Insurance</span>
              <br /> for your needs.
            </h1>
            <h4 className="text-[16px] font-[300] lg:text-[16px] pt-2 pb-7 text-[#FFFFFF]">
              Let us help you choose a suitable plan.
            </h4>

            <div className="cstm-grid gap-4 w-[90%] mb-[53px]">
              {insurance_data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#FFFFFF] text-center rounded-[25px] hover:scale-110"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      boxShadow: "rgba(67, 71, 85, 0.2) 0px 0px 5.6px 0px, rgba(90, 125, 188, 0.05) 0px 5.6px 8px 0px"
                    }}
                  >
                    <Insurance ins={item.name} item={item} index={index} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[120px] lg:right-[20%] md:right-[10%] block   mt-[100px] ">
        <div className="">
          <OrbitingIcons />
        </div>
      </div>

        <ChooseUs />
    
      <div className={"my-5 h-[10px] sm:my-8 sm:h-[10px]"} />
      <div className="relative">
        <div className="absolute left-0 top-0 ">
          <img
            src={"/Images/partnerBg.png"}
            alt=""
            className="w-full lg:block hidden"
          />
        </div>
        <div className="relative">
          <img
            alt="Right triangle"
            src={"/Images/rightTriangle.png"}
            className="object-contain aspect-auto h-auto absolute right-0 sm:w-[100px] w-[70px] sm:top-[-3.5%] top-[-1%] "
          />
          <div className=" "><OurPartner /></div>
        </div>
      </div>
      <div className="relative">
        <img
          alt="left triangle"
          src={"/Images/rightTriangle.png"}
          className="object-contain aspect-auto sm:w-[100px] w-[70px] absolute sm:top-[-3.5%] top-[-0.5%]  h-auto rotate-180"
        />
        <About />
      </div>
      <div className={"my-5 h-[10px] sm:my-8 sm:h-[10px]"} />
      <div className="relative mt-[50px]">
        <img
          alt="Right triangle"
          src={"/Images/rightTriangle.png"}
          className="object-contain aspect-auto h-auto absolute right-0 sm:w-[100px] w-[70px] sm:top-[-5.5%] top-[-3%] "
        />
        <Values />
      </div>

      <div className="container-fluid mx-auto bg-[#E9F2FF]">
        <div className={"mt-[30px]  sm:mt-[50px] "} />
        <FoundingTeam />
       
      </div>
      <Footer />
    </div>
  );
}
