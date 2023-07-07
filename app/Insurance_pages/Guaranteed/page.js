

import Footer from "@/app/Components/footer";
import GuaranteedReturnsForm from "./GuaranteeForm";
import "../../Styles/Guarantee.css"

function GuaranteedReturns() {
  return (
    <>
      <div className="pb-4">
      
        <div id="insurance-scroll"
          className=" mycontainer1 mx-auto lg:pb-[200px] md:pb-[150px] sm:pb-[120px] pb-[120px]   "
          style={{
            background:
              "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
          }}>
            <GuaranteedReturnsForm />
         
        </div>
        <div className="relative top-[0px]">
          <div
            className="headingLine m-[auto] w-[100%]"
            style={{
              background:
                "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
            }}
          ></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default GuaranteedReturns;
