
import Dynamic_Buttons from "./Dynamic_Buttons";
import "../../Styles/value.css";

function Values() {
  return (
      <div className="bg-[#FAFFFF]">
        <div className="flex md:space-y-5 flex-col justify-center items-center ">
          <h2 className="font-semibold text-2xl lg:text-3xl text-center m-auto lg:pb-[30px] pb-[0px]">
          <span className="title-border-bottom">Value</span>s
          </h2>
          <h5 className="text_font text-center  my-1 pt-[30px]">
            At Analah Insurance, we believe our values shape and define the
            culture of our company. Our values serve the foundation on how we work
            and make our business decisions.
          </h5>
  
      <Dynamic_Buttons />
        </div>
      </div>
    );
  }
  
  export default Values;