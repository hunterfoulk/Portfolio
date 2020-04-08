import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import projects from "./projects";
import homepage from "./homepage";
import NavLinks from "./navlinks";
import about from "./about";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <Router>
      <NavLinks />
      <ScrollToTop />
      <Route exact path="/" component={homepage} />
      <Route exact path="/about" component={about} />
      <Route path="/projects" component={projects} />
    </Router>
  );
}
