import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function PathHandler(props) {
  const { location } = props;
  const locArray = location.split("/");
  let pathArray = [];
  const generateIndiePath = () => {
    if (locArray.length === 2 && locArray[1] === "") {
      pathArray.push("/");
      return;
    }
    for (let item of locArray) {
      if (item == "") {
        pathArray.push("/");
      } else {
        pathArray.push(
          pathArray.lenght - 1 != 0
            ? "/" + item
            : pathArray[pathArray.length - 1] + "/" + item
        );
      }
    }
  };
  generateIndiePath();
  console.log(location, locArray, pathArray);
  return (
    <div className="path-area">
      {pathArray.map((path, i) => {
        return (
          <Link className="path-link secondary-text" key={i} to={path}>
            {locArray[i] === "" ? "home " : `> ${locArray[i]}`}
          </Link>
        );
      })}
    </div>
  );
}

export default PathHandler;
