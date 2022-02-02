/* © BacoFinance 2022 by Baco Group */
import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt=""/>
      </div>

      <div className="searchBar">
          <div className="searchIconContainer">
              <img src={searchIcon} alt="" />
          </div>
        <input className="searchInput" placeholder="Collection, item or user..."/>
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      
      <div className="headerActions">
          <div className="themeSwitchContainer">
              <img src={themeSwitchIcon} alt="" />
          </div>
          <div className="loginButton"> CONNECT </div>
      </div>
    </div>
  );
};

export default Header;
