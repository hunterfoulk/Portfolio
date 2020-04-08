import React from "react";
import aboutPicOne from "./images/aboutpicone.svg";
import aboutPicTwo from "./images/aboutpic2.svg";
import { Link } from "react-router-dom";
import hfLogo from "./images/hf-logo-3.png";
import JsIcon from "./images/jsicon.png";
import ReactIcon from "./images/reacticon.png";
import NodeIcon from "./images/nodeicon.png";

export default function About() {
  return (
    <div className="about-me-main">
      <div className="about-header-container">
        <h1>About Me</h1>
      </div>
      <div className="about-section-main">
        <div className="about-me-container-one">
          <div className="about-me-part">
            <img className="about-pic-one" src={aboutPicOne} />

            <h1 className="about-text">About Me</h1>
            <div className="about-me-para">
              <div className="about-para-text">
                <p>
                  Greetings, my name is Hunter! I'm a self taught Software
                  Engineer currently based in Tucson, Arizona. I have many
                  passions and developted skills in programming and many other
                  areas in the technical world. Since i was young I've always
                  been around and involved in coding with a huge passion in
                  working in team environments whether it be coding and
                  developing new applications or brain storming new ideas for
                  future applications I've felt are needed in todays world.
                  Since then I've shifted my learning and focuses to the web,
                  thriving in fulfillment learning new and modern technologies
                  of Full Stack Web Development such as modern
                  Javascript,HTML,CSS and frameworks such as
                  Angular,React,Gatsby and how far every programming language
                  and other technologies have come. Some of my hobbies outside
                  of programming are daily exercising, hanging out with my also
                  coding friends and just living everyday to the fullest!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="technical-part">
            <img className="about-pic-two" src={aboutPicTwo} />
            <h1 className="tech-text">Technical Experience</h1>
            <div className="tech-para">
              <div className="skills-para">
                <h2>Skills</h2>
                <li>2+ years HTML,CSS,JavaScript</li>
                <li>1+ year React.js,Node.js,Gatsby,Express(javascript)</li>
                <li>Relational Databases:MySQL,PostgreSQL</li>
                <li>Non-relational Databases: MongoDB</li>
                <li>Cloud Platforms: Netlify & AWS & Azure</li>
              </div>
            </div>
            <div className="techy-icons">
              <img src={JsIcon} className="bottom-icons" alt="/" />
              <img src={ReactIcon} className="bottom-icons" alt="/" />
              <img src={NodeIcon} className="bottom-icons" alt="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <a href="/">Home</a>
          <Link to="/projects">Projects</Link>
          <a href="/resume">Resume</a>
        </div>
        <img className="bottom-logo" src={hfLogo} />
        <p>© 2020 all rights reserved Hunter Foulk.</p>
      </div>
    </div>
  );
}
