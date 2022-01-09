import React, { useEffect } from "react";
import "./index.css";
import { useLocation, useHistory } from "react-router-dom";
import PathHandler from "../PathHandler";
function Home() {
  let location = useLocation();
  let history = useHistory();
  let pathname = location.pathname === "/" ? "Home" : "";
  useEffect(() => {});
  return (
    <div className="home-wrapper">
      <div className="home-title">
        <h3>Home</h3>
      </div>
      <PathHandler location={location.pathname} />
      <button
        style={{ marginTop: "20px" }}
        type="button"
        class="btn btn-sm btn-secondary"
        onClick={() => {
          history.push("/editpath");
        }}
      >
        Edit Course
      </button>
    </div>
  );
}

export default Home;
