import React from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";

const Main = () => {
  return (
    <div className="main">
      
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={
                "https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM"
              }
              // {activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#ffff" }}>
          <div className="title">Bandana Punk {/* { activePunk.name } */}</div>
          <span className="itemNumber">*# 4 </span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={
                "https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM"
              }
              alt=""
            />
          </div>
          
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0xa188997d5Aa1D922BaCA4D44eEa5DE1ad70e9130</div>
              <div className="ownerHandle">@sarazastore</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
