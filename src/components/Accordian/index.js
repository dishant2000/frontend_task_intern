import React from "react";
import "./index.css";
function Accordian(props) {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#panelsStayOpen-collapse${props.id}`}
            aria-expanded="true"
            aria-controls={`#panelsStayOpen-collapse${props.id}`}
          >
            {props.title}
          </button>
        </h2>
        <div
          id={`panelsStayOpen-collapse${props.id}`}
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
