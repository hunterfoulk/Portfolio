import React from "react";
import "./App.scss";
import portIcon from "./images/port-icon.png";
import { Link } from "react-router-dom";

export default function navlinks() {
  return (
    <div className="nav-links">
      <Link className="nav-name" to="/">
        <div className="nav-name">
          <img src={portIcon} />
          <h1>HUNTER FOULK</h1>
        </div>
      </Link>
      <div className="nav-span-links">
        <Link className="about-link" to="/about">
          <span>About Me</span>
        </Link>
        <Link className="projects-link" to="/projects">
          <span>Projects</span>
        </Link>
        <span>Resume</span>
      </div>
    </div>
  );
}
