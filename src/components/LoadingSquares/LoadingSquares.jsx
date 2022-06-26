import React from "react";

import "./LoadingSquares.css";

const LoadingSquares = () => {
  return (
    <div className="container">
      <div className="group">
        <div className="bigSqr">
          <div className="square first"></div>
          <div className="square second"></div>
          <div className="square third"></div>
          <div className="square fourth"></div>
        </div>
        <div className="text">Loading, Please Wait</div>
      </div>
    </div>
  );
};

export default LoadingSquares;
