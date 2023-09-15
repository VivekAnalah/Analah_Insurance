"use client";
import React, { useState } from "react";

import axios from "axios";

import "../../Styles/register.css";
import "../../Styles/guaranteeForm.css";
import { display } from "../../../Context/DisplayContext";
import AlertTag from "../../Components/Alert/AlertTag";
import { useContext } from "react";

import Link from "next/link";

function Guarantee() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

  const { setGuaranteeModal, openGuarantee } = useContext(display);

  const [isHovered, setIsHovered] = useState(false);
  const [Investment_User_Name, setInvestmentUser] = useState("");
  const [Investment_User_Mail, setInvestmentMail] = useState("");
  const [Investment_User_Mob_Num, setInvestmentMobNum] = useState("");
  const [Investment_Checked, setInvestmentChecked] = useState("");
  const [Email_valid, setEmail_valid] = useState(true);
  const [Mob_valid, setMob_valid] = useState(true);
  const validEmail = (e) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (e.target.value.match(validRegex)) {
      setEmail_valid(true);
      setInvestmentMail(e.target.value);
      console.log("valid");
    } else {
      setEmail_valid(false);
      console.log("not valid");
      setInvestmentMail("");
    }
  };
  const validMob = (e) => {
    let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
    let mobile_number = e.target.value;
    // if mobile_number
    // is empty return false
    if (mobile_number == null) {
      console.log("mob not valid");
      setInvestmentMobNum("");
      setMob_valid(false);
      return "false";
    }

    // Return true if the mobile_number
    // matched the ReGex
    if (regex.test(mobile_number) == true) {
      setInvestmentMobNum(e.target.value);
      setMob_valid(true);
      console.log("mob valid");
      return "true";
    } else {
      console.log("mob not valid");
      setInvestmentMobNum("");
      setMob_valid(false);
      return "false";
    }
  };
  const validStyle = {};
  const notValidStyle = {
    border: "1px solid red",
  };

  const handleInvestment = async (e) => {
    e.preventDefault();
    console.log(
      Investment_Checked,
      Investment_User_Mail,
      Investment_User_Mob_Num,
      Investment_User_Name
    );
    try {
      let res = await axios.post(
        "https://famous-teal-raven.cyclic.app/guarantee",
        {
          Gurantee_User_Name: Investment_User_Name,
          Gurantee_User_Mail: Investment_User_Mail,
          Gurantee_User_Mob_Num: Investment_User_Mob_Num,
        }
      );
      let data = res.data;
      if (data.Status === "Ok") {
        document.getElementById("GuaranteeName").value = "";
        document.getElementById("GuaranteeMail").value = "";
        document.getElementById("GuaranteeMob").value = "";

        setAlertType(false);
        setAlertMessage(data.msg);
        setAlertVisible(true);
        setAlertTitle("Success!");
      } else {
        setAlertType(true);
        setAlertMessage(data.msg);
        setAlertVisible(true);
        setAlertTitle("Error:");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className={openGuarantee ? "bgContainerRegister" : "hidden"}>
        <div className="registerContainer GuaranteeImage">
          <div className="headingContainer relative">
            <h3>
              Get the right plan Today!{" "}
              <Link href="/">
                <img
                  src={"/Images/close2.png"}
                  alt="close"
                  className="close_Button  sm:w-[20px] w-[15px] absolute top-[20px] right-[25px]  hover:cursor-pointer"
                  onClick={() => setGuaranteeModal()}
                />
              </Link>
            </h3>
          </div>

          <div className="FormContainer">
            <div className="input-text-register">
              {/* <label htmlFor="" className="sm:text-[16px] text-[14px] ">
                Full Name
              </label> */}
              <input
                type="text"
                className="sm:text-[16px] text-[14px] outline-none w-[100%]"
                placeholder="Name as per PAN card"
                onChange={(e) => setInvestmentUser(e.target.value)}
                id="GuaranteeName"
              />
            </div>

            <div
              className="sm:phoneInpt input-text-register"
              style={Mob_valid ? validStyle : notValidStyle}
            >
              {/* <label htmlFor="" className="sm:text-[16px] text-[14px]">
                Mobile No.
              </label> */}
              <input
                type="number"
                className="sm:text-[16px] text-[14px] outline-none appearance-none w-[100%] "
                placeholder="Mobile No."
                onChange={(e) => validMob(e)}
                id="GuaranteeMob"
              />
            </div>

            <div
              className="input-text-register"
              style={Email_valid ? validStyle : notValidStyle}
            >
              {/* <label htmlFor="" className="sm:text-[16px] text-[14px]">
                Email ID
              </label> */}

              <input
                type="email"
                className="sm:text-[16px] text-[14px] outline-none w-[100%]"
                placeholder="Email ID"
                onChange={(e) => validEmail(e)}
                id="GuaranteeMail"
              />
            </div>

            <div className="checkboxGuarantee pt-4 2xl:pt-8 2xl:mt-[10px]">
              <div className="roundGuarantee">
                <input
                  type="checkbox"
                  name=""
                  id="checkBoxGuarantee"
                  onClick={() => setInvestmentChecked(!Investment_Checked)}
                />
                <label htmlFor="checkBoxGuarantee"></label>
              </div>

              <p className="text-[12px] font-400 text-[#595959]	pr-5">
                {" "}
                I hereby agree to the{" "}
                <Link
                  href={"/Privacy-Policy"}
                  className="text-[#4C8CE7] hover:font-extrabold"
                  onClick={() => setGuaranteeModal(!openGuarantee)}
                >
                  Privacy Policy,
                </Link>{" "}
                <Link
                  href={"/Disclaimer"}
                  className="text-[#4C8CE7] hover:font-extrabold"
                  onClick={() => setGuaranteeModal(!openGuarantee)}
                >
                  Disclaimer
                </Link>{" "}
                and
                <Link
                  href={"/Term-Condition"}
                  className="text-[#4C8CE7] hover:font-extrabold"
                  onClick={() => setGuaranteeModal(!openGuarantee)}
                >
                  {" "}
                  Terms & Conditions{" "}
                </Link>
                .
              </p>
            </div>
            <div className="text-center button_bottom">
              <button
                className="divStyles"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => handleInvestment(e)}
                disabled={
                  !Investment_Checked ||
                  !Email_valid ||
                  !Mob_valid ||
                  !Investment_User_Name ||
                  !Investment_User_Mail ||
                  !Investment_User_Mob_Num
                }
              >
                Get Plan
              </button>
            </div>
          </div>
        </div>
        {alertVisible && (
          <AlertTag
            type={alertType}
            message={alertMessage}
            title={alertTitle}
          />
        )}

        <div></div>
      </div>
    </div>
  );
}

export default Guarantee;
