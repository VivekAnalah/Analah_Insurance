import Dynamic_Buttons from "./Dynamic_Buttons";
import "../../Styles/value.css";

function Values() {
  return (
    <div className="bg-[#FAFFFF] pb-[50px]">
      <div className="flex md:space-y-5 flex-col justify-center items-center ">
        <div className="m-[auto] 2xl:mt-[114px] mt-[70px]  ">
          <div className="topicValue ">
            {" "}
            <sapn className="topic2Value title-border-bottom mb-[10px]">
              Values
            </sapn>
          </div>
          <p className="textStyleValue w-[80%] m-[auto] mt-[20px]">
            {" "}
            At Analah Insurance, we believe our values shape and define the
            culture of our company. Our values serve the foundation on how we
            work and make our business decisions.
          </p>
        </div>

        <Dynamic_Buttons />
      </div>
    </div>
  );
}

export default Values;
