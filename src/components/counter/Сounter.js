import React from "react";
import Count from "./Count";
import ofdphoto from "./img/ofd.png";
import "./counter.css";
import img from "./img/count_img.svg";
const Counter = () => {
  return (
    <div className="counter">
      <div className="kassy__content-bottom">
        <div className="counter__wrapper">
      <div className="counter-content">
          <div className="ofd__block">
            <h1 className="counter-1">
              <span>Чеков за сегодня</span>
              <Count />
            </h1>
          </div>
          <img src={img} alt="" />

          <div className="ofd__block">
            <h1 className="counter-1">
              <span>Чеков за все время</span> <Count />
            </h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
