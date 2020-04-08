import React from "react";
import "./App.scss";
import LinkedIn from "./images/linkedIn.png";
import Browser from "./images/browser.png";
import Server from "./images/servericon.png";
import Database from "./images/cloud.png";
import cloudData from "./images/data.png";
import JsIcon from "./images/jsicon.png";
import ReactIcon from "./images/reacticon.png";
import NodeIcon from "./images/nodeicon.png";
import Emoji from "./emoji";
import ProjectsGif from "./images/projects.gif";
import { Link } from "react-router-dom";
import hfLogo from "./images/hf-logo-3.png";

export default function Homepage() {
  const projects = [
    {
      title: "Fashion App",
      tColor: { backgroundColor: "#8c8a8a" },
      bColor: {
        background:
          " linear-gradient(45deg, rgba(228,228,228,1) 0%, rgba(224,219,219,1) 14%, rgba(190,188,188,1) 38%, rgba(142,140,140,1) 74%, rgba(121,121,121,1) 98%)",
      },
      description:
        "Fashion clothing project with fully functional E-Commerce Features!",
      tags: ["React", "HTML/CSS", "NodeJS/MongoDB"],
      thumb: "",
      route: "/fashion-app",
      emoji: <Emoji symbol="🕺" />,
    },
    {
      title: "MovieDB",
      tColor: { backgroundColor: "rgba(45,145,203,1) " },
      bColor: {
        background:
          "linear-gradient(45deg, rgba(81,165,214,1) 0%, rgba(45,145,203,1) 25%, rgba(18,111,166,1) 54%, rgba(14,122,185,1) 81%, rgba(20,90,131,1) 100%)",
      },
      description: "Searchable movie application",
      tags: ["React", "HTML", "CSS"],
      thumb: "",
      route: "/movie",
      source: "",
      emoji: <Emoji symbol="🎥" />,
    },
    {
      title: "Aim-Training",
      tColor: {
        backgroundColor: "#b70000",
      },
      bColor: {
        background:
          " linear-gradient(45deg, rgba(231,146,146,1) 0%, rgba(219,131,131,1) 11%, rgba(209,90,90,1) 32%, rgba(172,35,35,1) 58%, rgba(135,13,13,1) 92%)",
      },
      description: "FPS aim training game",
      tags: ["React", "HTML/CSS", "NodeJS/MongoDB"],
      thumb: "",
      route: "/aim-training",
      source: "",
      emoji: <Emoji symbol="🏹" />,
    },

    {
      title: "Portfolio",
      tColor: { backgroundColor: "#915ec1" },
      bColor: {
        background:
          "linear-gradient(45deg, rgba(165,151,177,1) 0%, rgba(146,117,173,1) 21%, rgba(146,97,191,1) 48%, rgba(131,72,187,1) 72%, rgba(134,79,187,1) 95%)",
      },
      description: "Portfolio website to showcase talent and skill.",
      tags: ["Javascript", "HTML", "Sass"],
      thumb: "",
      route: "/fashion-app",
      source: "",
      emoji: <Emoji symbol="📰" />,
    },
    {
      title: "Hunts Cafe",
      tColor: { backgroundColor: "rgba(149,121,98,1)" },
      bColor: {
        background:
          " linear-gradient(45deg, rgba(207,192,179,1) 0%, rgba(176,153,134,1) 16%, rgba(152,123,100,1) 41%, rgba(125,100,79,1) 74%, rgba(107,88,71,1) 98%)",
      },
      description: "Hunts Coffee store! best coffee in town!",
      tags: ["React", "HTML/CSS", "Stripe"],
      thumb: "",
      route: "/coffee",
      source: "",
      emoji: <Emoji symbol="☕" />,
    },

    {
      title: "Chat-Cord",
      tColor: { backgroundColor: "#63b043" },
      bColor: {
        background:
          " linear-gradient(45deg, rgba(192,233,175,1) 0%, rgba(158,224,157,1) 13%, rgba(118,212,111,1) 33%, rgba(112,171,97,1) 58%, rgba(93,153,68,1) 92%)",
      },
      description: "i need to add things up, so i make calculator",
      tags: ["React", "HTML/CSS", "NodeJS/SocketIO"],
      thumb: "",
      route: "/coffee",
      emoji: <Emoji symbol="💬" />,
      source: "",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>Hunter Foulk</h1>
          <h1>FRONT END SOFTWARE ENGINEER</h1>
          <div className="buttons-container">
            <button className="github-button">
              <img
                src="https://images.jrdn.tech/github.svg"
                className="github-svg"
                alt="github"
              />
              <span className="github-span">Github</span>
            </button>
            <button className="linkedin-button">
              <img className="linkedin-image" src={LinkedIn} alt="/"></img>
              <span className="linkedin-text">LinkedIn</span>
            </button>
          </div>
          <a className="projects-button" href="#projects-container">
            <span>
              See Projects <span className="down-arrow">▼</span>
            </span>
          </a>
        </div>
        <div className="section-one poly">
          <div className="tech-container1">
            <div className="tech-circles">
              <img src={Browser} className className="server-icon" alt="/" />
              <span>FRONT END</span>
              <p>HTML 5</p>
              <div className="text-line"></div>
              <p>CSS 3 | SASS</p>
              <div className="text-line"></div>
              <p>JavaScript</p>
              <div className="text-line"></div>
              <p>React | Redux |Context</p>
            </div>

            <div className="tech-circles">
              <div className="feature-box">
                <img src={Server} className="server-icon" alt="/" />

                <span className="server-text">SERVER</span>
                <p className="server-inlines">NodeJS</p>
                <div className="text-line"></div>
                <p className="server-inlines">Express</p>
              </div>
            </div>

            <div className="tech-circles">
              <img src={Database} className="server-icon" alt="/" />

              <span>DATABASE</span>
              <p>MongoDB</p>
              <div className="text-line"></div>
              <p>mySQL</p>
              <div className="text-line"></div>
              <p>PostgreSQL</p>
            </div>

            <div className="tech-circles">
              <img src={cloudData} className className="server-icon" alt="/" />
              <span>DEPLOYMENT</span>
              <p>Netlify</p>
              <div className="text-line"></div>
              <p>AWS</p>
            </div>
          </div>
        </div>

        <div className="projects-container" id="projects-container">
          {projects.map((item, i) => (
            <div className="card">
              <div key={i}>
                <h1 style={item.tColor}>
                  <span className="emoji">{item.emoji}</span>
                  {item.title}
                </h1>
                <div style={item.bColor} className="head">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                    className="waves"
                  >
                    <defs>
                      <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                      />
                    </defs>
                    <g>
                      <use
                        className="p1 parallax"
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="0"
                        fill="rgba(250,250,250,0.7)"
                      />
                      <use
                        className="p2 parallax"
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="3"
                        fill="rgba(250,250,250,0.7)"
                      />
                      <use
                        className="p3 parallax"
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="5"
                        fill="rgba(250,250,250,0.7)"
                      />
                      <use
                        className="p4 parallax"
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="7"
                        fill="#fafafa"
                      />
                    </g>
                  </svg>
                </div>

                {item.tags.map((item) => (
                  <div className="tags">
                    <p>{item}</p>
                    <div className="text-line2"></div>
                  </div>
                ))}
              </div>
              <button>
                <span>See Project</span>
              </button>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <Link to="/projects">
            <button>
              <span>
                View All <span className="left-arrow">►</span>
              </span>
            </button>
          </Link>
        </div>

        <div className="footer">
          <div className="links">
            <a href="/">Home</a>
            <a href="/projects ">Projects</a>
            <a href="/resume">Resume</a>
          </div>
          <img className="bottom-logo" src={hfLogo} />
          <p>© 2020 all rights reserved Hunter Foulk.</p>
        </div>
      </div>
    </>
  );
}
