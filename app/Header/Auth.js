"use client";

import { useState } from "react";
import "../Styles/register.css";
import Link from "next/link";

import AlertTag from "../Components/Alert/AlertTag";
import axios from "axios";

export default function Auth() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

  const [registerOpen, setRegisterOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [Investment_User_Name, setInvestment] = useState("");
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
        "https://famous-teal-raven.cyclic.app/signup",
        {
          name: Investment_User_Name,
          email: Investment_User_Mail,
          mobile: Investment_User_Mob_Num,
        }
      );
      let data = res.data;
      if (data.Status === "Ok") {
        document.getElementById("RegisterName").value = "";
        document.getElementById("RegisterMail").value = "";
        document.getElementById("RegisterMob").value = "";

        setAlertType(false);
        setAlertMessage(data.msg);
        setAlertVisible(true);
        setAlertTitle("Success!");
        setTimeout(() => {
          setAlertVisible(false);
          window.open(
            "https://dashboard.analahinsurance.com/customer/login",
            "_blank"
          );
        }, 2000);
      } else {
        setAlertType(true);
        setAlertMessage(
          "You're already a registered user! 🎉 Kindly log in for further access 🚀"
        );
        setAlertVisible(true);
        setAlertTitle("Error:");
        setTimeout(() => {
          setAlertVisible(false);
          window.open(
            "https://dashboard.analahinsurance.com/customer/login",
            "_blank"
          );
        }, 3000);
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
    <>
      <div className={"mt-[7px] flex gap-[20px]"}>
        <button
          className={"text-[#4c8ce7] text-[14px] font-600 hover:text-[#000] "}
        >
          <a
            href="https://dashboard.analahinsurance.com/customer/login"
            target="blank"
          >
            Login
          </a>
        </button>

        <button
          className="w-[60%] text-[#FFF] text-[14px] font-600 register_text"
          onClick={() => setRegisterOpen(!registerOpen)}
        >
          Register
        </button>
      </div>

      <div className={registerOpen ? "bgContainerRegister" : "hidden"}>
        <div className="registerContainer">
          <div className="headingContainer relative">
            <h3>
              Register Now!{" "}
              <img
                src={"/Images/close2.png"}
                alt="close"
                className="close_Button  sm:w-[20px] w-[15px] absolute top-[20px] right-[25px]  hover:cursor-pointer"
                onClick={() => setRegisterOpen(!registerOpen)}
              />
            </h3>
          </div>

          <div className="FormContainer">
            <div className="input-text-register">
              {/* <label htmlFor="" className="sm:text-[16px] text-[14px] ">Full Name</label> */}
              <input
                type="text"
                className="ml-[15px] sm:text-[16px] text-[14px] outline-none w-[100%]"
                placeholder="Name as per PAN card"
                onChange={(e) => setInvestment(e.target.value)}
                id="RegisterName"
              />
            </div>

            <div
              className="sm:phoneInpt input-text-register"
              style={Mob_valid ? validStyle : notValidStyle}
            >
              {/* <label htmlFor="" className="sm:text-[16px] text-[14px]">Mobile No.</label> */}
              <input
                type="number"
                className="ml-[15px] sm:text-[16px] text-[14px] outline-none appearance-none w-[100%]"
                placeholder="Mobile No."
                onChange={(e) => validMob(e)}
                id="RegisterMob"
              />
            </div>

            <div
              className="input-text-register"
              style={Email_valid ? validStyle : notValidStyle}
            >
              {/* <label htmlFor="" className="sm:text-[16px] text-[14px]">Email ID</label> */}

              <input
                type="email"
                className="ml-[15px] sm:text-[16px] text-[14px] outline-none w-[100%]"
                placeholder="Email ID"
                onChange={(e) => validEmail(e)}
                id="RegisterMail"
              />
            </div>

            <div className=" checkbox pt-4 2xl:pt-8 2xl:mt-[10px]">
              <div className="round">
                <input
                  type="checkbox"
                  name=""
                  id="checkBox"
                  onClick={() => setInvestmentChecked(!Investment_Checked)}
                />
                <label htmlFor="checkBox"></label>
              </div>

              <p className="text-[12px] font-400 text-[#595959]	pr-5">
                {" "}
                I hereby agree to the{" "}
                <Link
                  href={"/Privacy-Policy"}
                  className="text-[#4C8CE7] hover:font-extrabold"
                  onClick={() => setRegisterOpen(!registerOpen)}
                >
                  Privacy Policy,
                </Link>{" "}
                <Link
                  href={"/Disclaimer"}
                  className="text-[#4C8CE7] hover:font-extrabold"
                  onClick={() => setRegisterOpen(!registerOpen)}
                >
                  Disclaimer
                </Link>{" "}
                and
                <Link
                  href={"/Term_Condition"}
                  className="text-[#4C8CE7] hover:font-extrabold"
                  onClick={() => setRegisterOpen(!registerOpen)}
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
                Sign Up
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
      </div>
    </>
  );
}
