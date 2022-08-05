import React from "react";

const About = (props) => {
  return (
    <div
      style={{ marginTop: "10px", height: "710px" }}
      className={`bg-${props.mode === "dark" ? "white" : "dark"}`}
    >
      <h2
        className={`text-center text-${
          props.mode === "dark" ? "dark" : "white"
        }`}
        style={{ marginTop: "55px" }}
      >
        About DailyNews
      </h2>
      <div
        className="container my-4 text-danger border border-primary align-middle "
        style={{ borderRadius: "20px", padding: "10px", width: "50%" }}
      >
        <p className=" text-center">
          Hello! this is DailyNews web app where you can read all the daily
          updated News
        </p>
        <p className="text-center">
          We also have some catagories like Sports, Business,
          Entertainment,General,healt, science, technology etc...
        </p>
      </div>
    </div>
  );
};

export default About;
