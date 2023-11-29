import Link from "next/link";
import Footer from "../Components/footer";
import "../Styles/privacy-policy.css";

function Disclaimer() {
  return (
    <div>
      <div className=" ml-[5%] mr-[5%] mx-auto">
        <div className={"my-5 h-[10px] sm:my-8 sm:h-[10px]"} />
        <div className="tab_container" id="privacy">
          <input id="tab1" type="radio" name="tabs" defaultChecked={false} />
          <Link href="/Privacy-Policy">
            <label className="tab1 labelDiv">Privacy Policy</label>
          </Link>

          <input id="tab2" type="radio" name="tabs" defaultChecked={true} />
          <Link href="/Disclaimer">
            <label className="tab2 labelDiv">Disclaimer</label>
          </Link>

          <input id="tab3" type="radio" name="tabs" defaultChecked={false} />
          <Link href="/Term_Condition">
            <label for="tab3" className="tab3 labelDiv">
              Terms & Conditions
            </label>
          </Link>

          <section id="content2" className="tab-content text-justify">
            <p>
              <p>
                Analah Insurance aims to offer transparent and unbiased
                information regarding our insurance products and services. All
                the information provided is generic in nature. We strive to
                provide accurate, correct and unbiased information to the best
                of our ability. We disclaim all liability for any discrepancies
                or omissions in the data published or presented on our website
                or platform.
              </p>
            </p>

            <p>
              We do not intend to violate any ancillary or intellectual property
              rights. Information provided on our website or platform is subject
              to change at any time without any prior notice. However, any
              modifications to public utilities will be announced on our website
              or platform.
            </p>
            <p>
              Despite our best efforts, the content uploaded on the website may
              not always meet our high standards for quality, clarity, and
              accuracy. Analah Insurance is not legally responsible for the same
              in any matter whatsoever.
            </p>
            <p>
              Any loss, harm, or damage resulting from the use of information
              from the website is not the responsibility of Analah Insurance’s
              employees, partners, group entities or affiliates. Customers
              should not rely solely on the information published or presented
              and should perform personal due diligence or consult with an
              independent professional third-party advisor prior to making any
              decisions.
            </p>
            <p>
              Insurance products are subject matter of solicitation and market
              risks. It is solely the responsibility of the customer to
              understand the risks and limitations of insurance policies. Analah
              Insurance under no circumstance, form or manner, takes any
              liability in such cases. We strongly recommend you to read the
              subject and offer documents carefully.
            </p>
            <p>
              It is agreed upon by both parties that customers' use of the
              website or platform is done solely at the discretion and risk of
              the customer.
            </p>
            <p>
              You hereby acknowledge and agree that you shall be solely
              responsible for the authenticity of the documents you have
              uploaded on the website. Analah Insurance is acting only as a
              facilitator and the acceptance or rejection of a claim is the sole
              discretion of the insurer.
            </p>
            <p>
              Users of this website or platform and every third party is hereby
              informed that the owners of this website, viz., Analah Insurance
              Broking Private Limited, are not the agents, corporate agents,
              related party or intermediaries of the insurers, whose products
              are dealt with on this website. We are also not the sub-agents or
              sub-intermediaries of the agents and intermediaries of the
              respective insurers.
            </p>
            <p>
              We make every effort to ensure complete accuracy about
              product/policy comparisons, quotes, features etc. based on the
              information provided by insurers. Analah Insurance Broking Private
              Limited, its group companies, directors, shareholders, officers,
              partners, employees and analahinsurance.com are in no way
              responsible or liable for one for his/her investment decision, and
              every prospect/investor/policyholder shall be solely responsible
              for the consequences of his/her decision.
            </p>
            <p>
              {" "}
              <b>Last updated on: 26th December 2022</b>{" "}
            </p>
          </section>
        </div>

        <div className={"my-5 h-[10px] sm:my-8"} />
      </div>

      <Footer />
    </div>
  );
}

export default Disclaimer;
