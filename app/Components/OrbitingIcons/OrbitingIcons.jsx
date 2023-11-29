import React from "react";
import "../../Styles/orbitingIcons.css";

export const OrbitingIcons = () => {
  return (
    <div className="containerOrbit">
      <div className="orbit">
        <div className="center-image">
          <img src={"/Insurance_Images/Center_ins_img.png"} alt="Center" />
        </div>
        <ul>
          <li>
            <div>
              <img src={"/Insurance_Images/Car_ins_logo.png"} alt="Car" />
            </div>
          </li>
          <li>
            <div>
              <img src={"/Insurance_Images/Family_ins_logo.png"} alt="Family" />
            </div>
          </li>
          <li>
            <div>
              <img src={"/Insurance_Images/Term_ins_logo.png"} alt="Term" />
            </div>
          </li>
          <li>
            <div>
              <img src={"/Insurance_Images/Home_ins_logo.png"} alt="Home" />
            </div>
          </li>
        </ul>
      </div>

      <div className="orbit2">
        <ul>
          <li>
            <div>
              <img
                src={"/Insurance_Images/Travel_ins_logo.png"}
                alt="Travel"
                className="max-w-[70%]"
              />
            </div>
            {/* <p>Investment Insurance</p> */}
          </li>
          <li>
            <div>
              <img
                src={"/Insurance_Images/Health_ins_logo.png"}
                alt="Health"
                className="max-w-[70%]"
              />
            </div>
            {/* <p>Guaranteed Returne Plans</p> */}
          </li>
          <li>
            <div>
              <img
                src={"/Insurance_Images/Group_ins_logo.png"}
                alt="Group"
                className="max-w-[70%]"
              />
            </div>
            {/* <p>Group Health Insurnace</p> */}
          </li>
          <li>
            <div>
              <img
                src={"/Insurance_Images/Retirement_ins_logo.png"}
                alt="Retirement"
                className="max-w-[70%]"
              />
            </div>
            {/* <p>Retirement Plans</p> */}
          </li>
        </ul>
      </div>

      <div id="bike" className="iconsSize">
        <img src={"/Insurance_Images/Bike_ins_logo.png"} alt="Bike" />
      </div>

      <div id="heart" className="iconsSize">
        <img src={"/Insurance_Images/health_ins_img.png"} alt="Health" />
      </div>

      <div id="investment" className="iconsSize">
        <img
          src={"/Insurance_Images/Investment_ins_logo.png"}
          alt="Investment"
        />
      </div>

      <div id="guaranteed" className="iconsSize">
        <img src={"/Insurance_Images/Guaranteed_ins.png"} alt="Guaranteed" />
      </div>
    </div>
  );
};
