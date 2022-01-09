import React from "react";
import "./index.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { SiGooglescholar } from "react-icons/si";
import { GrLineChart } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="nav-front">
        <div className="nav-ham">
          <BiMenuAltLeft style={{ margin: "0px 8px" }} />
        </div>
        <div className="nav-logo">
          <SiGooglescholar />
          <span style={{ margin: "0px 8px" }}>Luma</span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="nav-earning"
        >
          <GrLineChart />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0px 8px",
            }}
          >
            <span style={{ fontSize: "12px" }}>Earnings</span>
            <span style={{ fontSize: "8px" }}>$12.3k</span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="nav-sales"
        >
          <GrLineChart />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0px 8px",
            }}
          >
            <span style={{ fontSize: "12px" }}>Sales</span>
            <span style={{ fontSize: "8px" }}>$12.3k</span>
          </div>
        </div>
        <div className="nav-search">
          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="search"
            />
          </div>
        </div>
      </div>
      <div className="nav-back">
        <AiOutlineMail style={{ width: "20px", height: "20px" }} />
        <IoMdNotificationsOutline style={{ width: "20px", height: "20px" }} />
        <BiUserCircle style={{ width: "20px", height: "20px" }} />
      </div>
    </div>
  );
}

export default Navbar;
