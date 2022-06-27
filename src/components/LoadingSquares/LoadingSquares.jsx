import React from "react";
import useDetectHeight from "../../utilities/customHooks/useDetectHeight";

import "./LoadingSquares.css";

const LoadingSquares = () => {
  const height = useDetectHeight();

  return (
    <div
      className="container"
      style={{ lineHeight: `calc(${height}px - 65px)`, touchAction: "none" }}
    >
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
