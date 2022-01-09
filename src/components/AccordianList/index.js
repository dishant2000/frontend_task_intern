import React from "react";
import "./index.css";
import { MdDragHandle } from "react-icons/md";
function AccordianList(props) {
  return (
    <ul className="accordian-list">
      {props.data.map((item, i) => {
        return (
          <li key={i} className="accordianlist-item">
            <div className="item-header">
              <MdDragHandle style={{ fontSize: "large" }} />
              <div style={{ margin: "0px 8px" }}>{item.title}</div>
            </div>
            <div>{item.timestamp}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default AccordianList;
