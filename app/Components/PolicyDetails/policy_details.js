import "../../Styles/policyDetails.css";
import TopSection from "./TopSection";
import KnowMore from "./knowMoreSection";
import { KnowSectionContainer } from "./KnowSectionContainer";
import Footer from "../footer";

export default function Policy_Detail({
    head,
    benefit_head,
    key_feature_head,
    subhead,
    list1,
    list2,
    list3,
    list4,
    img,
    Ins_Text_1,
    Ins_Text_2,
    Ins_Text_3,
    description_1,
    description_2,
    description_3,
    benefits,
    keyTerms,
    twoWheel,
    homeInsurance,
    RetirementInsurance,
    car,
    why,
    whyText,
    quotes,
    quotes_link,
    helping_verb,
    no_benefit,
    isRequired,
    whyRequired_head,
    whyRequired_Text,
    what,
    whatText,
    whatHeadingText,
    whatDefinition,
    gridText,
    gridHeader,
    document_data,
    add_ons_array,
    extra_data,
    gridTopRight,
    gridTopLeft,
    button_overlap,
}){

    return (

        <>
        <TopSection 
        head = {head}
        
        
        subhead = {subhead}
        list1 = {list1}
        list2 = {list2}
        list3 = {list3}
        list4 = {list4}
        img = { img}
        Ins_Text_1 = {Ins_Text_1}
        Ins_Text_2 ={Ins_Text_2}
        Ins_Text_3 ={Ins_Text_3}
        RetirementInsurance = {RetirementInsurance}
        
        quotes = {quotes}
        quotes_link = {quotes_link}
       
        button_overlap ={button_overlap}
        
        />
<KnowSectionContainer img = { img}>

<KnowMore  
         head = {head}
         benefit_head = {benefit_head}
         key_feature_head = {key_feature_head}
        
         description_1 = {description_1}
         description_2 = {description_2}
         description_3 = {description_3}
         benefits ={benefits}
         keyTerms = {keyTerms}
         twoWheel ={twoWheel}
         homeInsurance ={homeInsurance}
         RetirementInsurance = {RetirementInsurance}
         car = {car}
         why ={why}
         whyText = {whyText}
         
         helping_verb ={helping_verb}
         no_benefit = {no_benefit}
         isRequired = {isRequired}
         whyRequired_head = {whyRequired_head}
         whyRequired_Text ={whyRequired_Text}
         what = {what}
         whatText ={whatText}
         
         whatDefinition ={whatDefinition}
         gridText = {gridText}
         gridHeader ={gridHeader}
         document_data ={document_data}
         add_ons_array ={add_ons_array}
         extra_data ={extra_data}
         gridTopRight = {gridTopRight}
         gridTopLeft = {gridTopLeft}
        
        
        />
</KnowSectionContainer>
       

<div className="mt-[20px]">
        <Footer />
      </div>
        
        
        </>

    )

}