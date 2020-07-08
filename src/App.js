import React, { Fragment } from "react";
import Landing from "./Components/Landing";
import Aboutme from "./Components/Aboutme";
import Project from "./Components/Project";
import Education from "./Components/Education";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Fragment>
      <Landing />
      <Aboutme />
      <Project />
      <Education />
      <Footer />
    </Fragment>
  );
}
