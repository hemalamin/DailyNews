import React from "react";
import loading from "../Spinner-black-bg.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" style={{ height: "40px" }} />
    </div>
  );
};

export default Spinner;
