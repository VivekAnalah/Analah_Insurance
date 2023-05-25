
import PolicyDetails from "../../Components/PolicyDetails/policyDetails";


function CarInsurance() {
    const benefits = [
      {
        id: 1,
        desc_head: "",
        desc: "In the event of an accident, an insurance policy offers financial compensation to the survivors and assistance with medical treatment expenses. Additionally, it offers death benefits to the nominee or to the family members of the insured or deceased.",
      },
      {
        id: 2,
        desc_head: "",
        desc: "It protects the insured and compensates for any lawsuits and legal fees associated with the accident.",
      },
      {
        id: 3,
        desc_head: "",
        desc: "A Car Insurance policy covers for the costs of repairing any accident-related car damage.",
      },
      {
        id: 4,
        desc_head: "",
        desc: "A Car Insurance policy covers damage to the car brought on by fire, natural disasters, theft, and other man-made incidents.",
      },
      {
        id: 5,
        desc_head: "",
        desc: "In the event that the car is stolen, a car insurance policy offers discounts on premiums for having more than one insurance policy with the same insurance company..",
      },
      {
        id: 6,
        desc_head: "",
        desc: "An insurance policy also provides extended coverage for other people driving the car of the policyholder with permission.",
      },
      {
        id: 7,
        desc_head: "",
        desc: "Rewards are offered by insurance policies in the form of No Claim Bonus and other benefits.",
      },
    ];
  
    const keyTerms = [
      {
        id: 1,
        desc_head: "Covers for risk: ",
        desc: "The policyholder is protected by Car Insurance from the risk of damages caused by man-made disasters like fire, rioting, theft, etc., and natural disasters like flood, earthquake, landslide, etc., and damage while in transit, etc.",
      },
      {
        id: 2,
        desc_head: "The insured value: ",
        desc: "The car is covered by an insurance policy for its ‘Insured Declared Value’ which is determined on the price of the manufacturer less the depreciation.",
      },
      {
        id: 3,
        desc_head: "",
        desc: ".",
      },
      {
        id: 4,
        desc_head: "Add-ons: ",
        desc: "With this feature, the policyholder can add additional cover to protect themselves against risks that are not covered under the basic policy. Such additional covers include No Claim Bonus Protection, Zero Depreciation, Hospitalization for Accidents, Coverage for Fellow Passengers and the Driver etc.",
      },
    ];
  
    return (
      <div>
        <PolicyDetails
          head={"Car Insurance"}
          benefit_head = {"Benefits of Car Insurance"}
          key_feature_head = {"Key Features of Car Insurance"}
          subhead={"Buy a Car Insurance Plan in a few simple steps."}
          list1={"Compare Car Insurance plans"}
          list2={"Instant policy issuance"}
          list3={"Free claims assistance"}
          list4={"Get plan recommendation in seconds"}
          Ins_Text_1={"Don't be stuck in neutral"}
          Ins_Text_2={"- start your coverage today!"}
          Ins_Text_3={""}
          img={"Car_ins"}
          description_1={`A Car Insurance coverage protects against a variety of risks associated with driving. To obtain a Car Insurance coverage from an insurer, you need to pay an insurance premium. In case your car faces damages or you cause damage to others via the insured car, your insurer will provide financial help, as per the applicable terms and conditions. At Analah Insurance, we have curated different car insurance plans to suit your specific needs. Whether you are looking for a basic Third-party Insurance Policy or Bumper-to-Bumper Car Insurance, you can choose from different types of insurance plans for your car.`}
          description_2={
            "Additionally, if a comprehensive policy is in place, you can customise the Insured Declared Value (IDV) and select from a variety of eligible add-on covers to enhance the coverage. To continue receiving coverage, you must renew your Car Insurance policy within the expiry date. Through our simple and easy-to-use platform, you can easily renew your Car Insurance policy online."
          }
          benefits={benefits}
          keyTerms={keyTerms}
          car={true}
          quotes={"View Car Insurance Quotes"}
          quotes_link ={"https://car.analahinsurance.com/car/lead-page"}
        />
      </div>
    );
  }
  
  export default CarInsurance;
  