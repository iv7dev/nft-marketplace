import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className='punkDetails' style={{color: '#ffff'}}>
        <div className='title'>
            { activePunk.name }
        </div>
        <span className="itemNumber" ></span>
        </div>
      </div>
    </div>
  );
};

export default Main;
