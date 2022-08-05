import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "./Components/News";
import About from "./Components/About";
import Navbar from "./Components/NavBar";
import { useState } from "react";

const App = (props) => {
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              key="national"
              category={"national"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/national"
          element={
            <News
              key="national"
              category={"national"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              key="business"
              category={"business"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              key="sports"
              category={"sports"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              key="entertainment"
              category={"entertainment"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              key="health"
              category={"health"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              key="science"
              category={"science"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              key="technology"
              category={"technology"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/world"
          element={
            <News
              key="world"
              category={"world"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/startup"
          element={
            <News
              key="startup"
              category={"startup"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/miscellaneous"
          element={
            <News
              key="miscellaneous"
              category={"miscellaneous"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/hatke"
          element={
            <News
              key="hatke"
              category={"hatke"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/automobile"
          element={
            <News
              key="automobile"
              category={"automobile"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/politics"
          element={
            <News
              key="politics"
              category={"politics"}
              mode={mode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          exact
          path="/about"
          element={<About mode={mode} toggleMode={toggleMode} />}
        />
      </Routes>
    </>
  );
};

export default App;
