import React from "react";
import "./index.css";
import { useLocation, useHistory, Link } from "react-router-dom";
import TextEditor from "../TextEditor";
import Accordian from "../Accordian";
import AccordianList from "../AccordianList";
import { AiOutlineCheck } from "react-icons/ai";
import ReactPlayer from "react-player";
import TagsInput from "../TagsInput/index.js";
import PathHandler from "../PathHandler/index.js";
function EditTab() {
  let location = useLocation();
  let history = useHistory();
  let pathname =
    location.pathname === "/" ? "Home" : "Home > " + location.pathname.slice(1);
  const accordianData = [
    {
      title: "Introduction",
      timestamp: "8m42s",
    },
    {
      title: "Introduction",
      timestamp: "8m42s",
    },
    {
      title: "Introduction",
      timestamp: "8m42s",
    },
    {
      title: "Introduction",
      timestamp: "8m42s",
    },
  ];
  return (
    <div className="edit-wrapper">
      <div className="edit-title">
        <h3>Edit Course</h3>
      </div>
      <div>
        <PathHandler location={location.pathname} />
      </div>
      <div className="edit-content">
        <div className="edit-main">
          <div className="edit-section">
            <div className="section-title">
              <span>BASIC INFORMATION</span>
              <hr
                style={{
                  display: "inline-block",
                  width: "100%",
                  margin: "0px 8px",
                  whiteSpace: "nowrap",
                }}
              />
            </div>
            <div className="edit-subsec">
              <div className="subsec-title">COURSE TITLE</div>
              <div className="subsec-body">
                <div className="title-name">Angular Fundamentals</div>
                <div
                  style={{
                    fontSize: "x-small",
                    fontWeight: "600",
                    color: "var(--color-sec)",
                  }}
                >
                  Please see our course title guideline
                </div>
              </div>
            </div>
            <div className="edit-subsec">
              <div className="subsec-title">DESCRIPTION</div>
              <div className="subsec-body">
                <div className="edit-textedit">
                  <TextEditor />
                  <div
                    style={{
                      fontSize: "x-small",
                      fontWeight: "600",
                      color: "var(--color-sec)",
                    }}
                  >
                    Shortly describe this course
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-section">
            <div className="section-title">
              SECTIONS
              <hr
                style={{
                  display: "inline-block",
                  width: "100%",
                  margin: "0px 8px",
                  whiteSpace: "nowrap",
                }}
              />
            </div>
            <div className="edit-body">
              <Accordian title="Course Overview" id="One">
                <AccordianList data={accordianData} />
              </Accordian>
              <Accordian title="Getting Started with Angular" id="Two">
                <AccordianList data={accordianData} />
              </Accordian>
              <Accordian
                title="Exploring the Angular Template Syntax"
                id="Three"
              >
                <AccordianList data={accordianData} />
              </Accordian>
            </div>
          </div>
        </div>
        <div className="edit-sidebar">
          <div className="edit-section">
            <div className="edit-savecard">
              <div className="savecard-header">
                <button type="button" className="btn btn-sm btn-danger">
                  Save Changes
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "8px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px rgb(219, 219, 219) solid",
                  color: "var(--color-sec)",
                  fontSize: "smaller",
                }}
              >
                Save Draft
                <AiOutlineCheck />
              </div>
              <div
                style={{ color: "red", padding: "8px", fontSize: "smaller" }}
              >
                Delete Course
              </div>
            </div>
          </div>
          <div className="edit-section">
            <div className="section-title">
              VIDEO
              <hr
                style={{
                  display: "inline-block",
                  width: "100%",
                  margin: "0px 8px",
                  whiteSpace: "nowrap",
                }}
              />
            </div>
            <div className="edit-body">
              <div className="videosection-card">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  url="https://www.youtube.com/watch?v=AhP5Tg_BLIk"
                />
                <div style={{ padding: "10px" }}>
                  <div className="subsec-title">URL</div>
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue="https://www.youtube.com/watch?v=AhP5Tg_BLIk"
                    />
                    <br />
                  </div>
                  <div
                    style={{
                      fontSize: "x-small",
                      fontWeight: "600",
                      color: "var(--color-sec)",
                    }}
                  >
                    Enter a valid video URL...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-section">
            <div className="section-title">
              OPTIONS
              <hr
                style={{
                  display: "inline-block",
                  width: "100%",
                  margin: "0px 8px",
                  whiteSpace: "nowrap",
                }}
              />
            </div>
            <div className="options-card">
              <div className="subsec-title">CATEGORY</div>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                style={{
                  fontSize: "12px",
                }}
              >
                <option defaultValue value="1">
                  Vue.js
                </option>
                <option value="2">React.js</option>
                <option value="3">Angular.js</option>
              </select>
              <div className="secondary-text">Select a category</div>
              <div className="subsec-title">PRICE</div>
              <div
                className="input-group input-group-sm"
                style={{ width: "50%", margin: "0" }}
              >
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  $
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div className="secondary-text">
                The recommended price is between $17 and $24
              </div>
              <div className="subsec-title">TAGS</div>
              <TagsInput tags={["Nodejs"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTab;
