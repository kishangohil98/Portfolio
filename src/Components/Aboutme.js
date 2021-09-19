import React, { Fragment, useEffect, useContext } from "react";
import "../css/aboutme.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faNodeJs,
  faCss3Alt,
  faBootstrap,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faTerminal,
  faDatabase,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import WOW from "wow.js";
import ThemeContext from "./ThemeContext";

export default function Aboutme() {
  useEffect(() => {
    new WOW().init();
  }, []);
  const themes = useContext(ThemeContext);

  return (
    <Fragment>
      <div className="main">
        <h1
          id="about"
          className="about-header mt-5 wow animate__animated animate__fadeIn">
          About
        </h1>
        <div className="header-border mb-5"></div>
        <Container className="container_about">
          <Row lg={2} md={2} sm={1}>
            <Col lg={6} md={6} sm={12} style={{ padding: "0px 30px" }}>
              <div className="about_me wow animate__animated animate__fadeInLeft">
                <h3 className="about_me_h3" style={{ color: themes.textColor }}>
                  Who's this guy?
                </h3>
                <p>
                  I am a ReactJS-Redux website developer in Vadodara, India.
                </p>
                <p>
                  I am a recently Graduated Computer Engineer from Gujrat
                  Technological University and having comprehension of{" "}
                  <span style={{ color: themes.highlightText }}>ReactJS</span>{" "}
                  and its core principles.
                </p>
                <p>
                  I possess sound technical orientation over{" "}
                  <span style={{ color: themes.highlightText }}>
                    Redux state management
                  </span>
                  , <span style={{ color: themes.highlightText }}>NodeJS</span>,{" "}
                  <span style={{ color: themes.highlightText }}>
                    JavaScript development
                  </span>{" "}
                  , and Conventional{" "}
                  <span style={{ color: themes.highlightText }}>
                    web technologies.
                  </span>
                </p>
                <p>
                  I am having around 6 months of website development experience
                  by working on self-learning projects.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} style={{ padding: "0px 30px" }}>
              <div className="about_skills wow animate__animated animate__fadeInRight">
                <h3
                  className="about_skills_h3"
                  style={{ color: themes.textColor }}>
                  Skills
                </h3>
                <div className="skills">
                  <Row className="justify-content-center">
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon icon={faReact} className="skill_icon" />
                      ReactJS
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        className="skill_icon"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}>
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}>
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#ffffff">
                            <path d="M82.41667,14.33333c-22.102,0 -39.41667,25.67313 -39.41667,58.43913c0,14.835 3.59823,28.14786 9.53223,38.33886c-0.33683,1.1395 -0.57389,2.30834 -0.57389,3.55534c0,6.923 5.61867,12.54167 12.54167,12.54167c6.923,0 12.54167,-5.61867 12.54167,-12.54167c0,-6.923 -5.61867,-12.54167 -12.54167,-12.54167c-0.172,0 -0.33191,0.04883 -0.50391,0.05599c-4.085,-7.86899 -6.66276,-18.19269 -6.66276,-29.40852c0,-23.908 11.48817,-44.1058 25.08333,-44.1058c9.21633,0 17.45061,9.29461 21.80794,22.71777c5.32483,0.85283 10.6332,2.3089 15.91504,4.12923c-4.859,-24.08717 -19.69165,-41.18034 -37.72298,-41.18034zM81.52083,60.91667c-6.923,0 -12.54167,5.61867 -12.54167,12.54167c0,6.923 5.61867,12.54167 12.54167,12.54167c4.9235,0 9.14108,-2.8567 11.19792,-6.9847c9.2665,0.41567 19.57822,3.10294 29.31055,8.37044c14.04667,7.611 24.64236,19.29166 27.63085,30.50033c1.54083,5.75483 0.99147,10.81237 -1.5957,15.0192c-5.14567,8.37067 -17.44098,11.72232 -31.46615,9.95215c-4.1495,4.2355 -8.88689,8.127 -14.02539,11.64583c7.16667,2.09267 14.2676,3.17741 20.9541,3.17741c16.01033,0 29.71983,-5.84229 36.74316,-17.25879c4.67267,-7.59667 5.7919,-16.66362 3.2334,-26.23112c-4.042,-15.10017 -17.00605,-29.84234 -34.65755,-39.40267c-12.89283,-6.9875 -26.31052,-10.24027 -38.45085,-10.1901c-2.27183,-2.279 -5.40568,-3.68132 -8.87435,-3.68132zM29.36654,84.15235c-10.46333,8.66449 -17.96795,19.23824 -20.85612,30.03841c-2.5585,9.5675 -1.43927,18.63479 3.2334,26.21712c7.009,11.4165 20.72566,17.25879 36.74316,17.25879c12.126,0 25.56619,-3.32209 38.40885,-10.28809c12.255,-6.63633 22.15687,-15.78536 28.4707,-25.7972c5.72617,-1.161 10.05013,-6.21955 10.05013,-12.28972c0,-6.923 -5.61867,-12.54167 -12.54167,-12.54167c-6.923,0 -12.54167,5.61867 -12.54167,12.54167c0,2.33633 0.68766,4.50515 1.80566,6.38281c-5.06683,7.27417 -12.77906,14.08261 -22.0599,19.10645c-22.35283,12.1045 -48.07389,11.23968 -56.14355,-1.88965c-2.58717,-4.20683 -3.12254,-9.25037 -1.58171,-15.00521c1.56233,-5.84083 5.22025,-11.81178 10.33008,-17.27279c-1.56233,-5.19583 -2.67238,-10.7061 -3.31738,-16.46093z"></path>
                          </g>
                        </g>
                      </svg>
                      Redux
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon
                        icon={faJsSquare}
                        className="skill_icon"
                      />
                      JavaScript
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon icon={faNodeJs} className="skill_icon" />
                      NodeJS
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon icon={faCode} className="skill_icon" />
                      html
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        className="skill_icon"
                      />
                      css
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon
                        icon={faBootstrap}
                        className="skill_icon"
                      />
                      Bootstrap
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="18px"
                        className="skill_icon"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}>
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}>
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#ffffff">
                            <path d="M54.86979,22.93333c-20.726,0 -29.42239,7.47645 -29.42812,25.55365v12.56407c0,10.60666 -2.84508,14.14296 -11.41068,14.14296v18.8237c8.55987,-0.00001 11.41068,3.53245 11.41068,14.06458v14.81485c0,18.49 8.77093,26.16953 29.42813,26.16953h7.14427v-14.88203h-3.05703c-11.01373,0 -14.54609,-3.26209 -14.54609,-13.86302v-17.67031c0,-10.39453 -4.90084,-16.51289 -14.14297,-17.40156v-1.22058c9.65493,-0.88293 14.14297,-6.17821 14.14297,-16.10261v-16.1138c0,-10.66973 3.46929,-13.93021 14.54609,-13.93021h3.05703v-14.94922zM109.98594,22.93333v14.94922h3.05703c11.0768,0 14.54609,3.26047 14.54609,13.93021v16.1138c0,9.91867 4.49377,15.21967 14.14297,16.10261v1.23177c-9.24787,0.88293 -14.14297,6.9901 -14.14297,17.39036v17.67031c0,10.60093 -3.53809,13.86302 -14.54609,13.86302h-3.05703v14.89323h7.14427c20.66293,0 29.42812,-7.68526 29.42812,-26.16953v-14.81484c0,-10.53787 2.84507,-14.07578 11.41067,-14.07578v-18.8237c-8.55987,0 -11.41067,-3.53083 -11.41067,-14.13177v-12.57526c0,-18.0772 -8.70213,-25.55365 -29.42812,-25.55365z"></path>
                          </g>
                        </g>
                      </svg>
                      JSON
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon
                        icon={faDatabase}
                        className="skill_icon"
                      />
                      MongoDB
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon
                        icon={faTerminal}
                        className="skill_icon"
                      />
                      MySql
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon icon={faJava} className="skill_icon" />
                      Java-Servlets
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon icon={faJava} className="skill_icon" />
                      JSP
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon
                        icon={faSyncAlt}
                        className="skill_icon"
                      />
                      Ajax
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="16px"
                        className="skill_icon"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}>
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}>
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#ffffff">
                            <path d="M102.74313,10.34688c-0.36281,0.05375 -0.72563,0.16125 -1.075,0.3225c-2.95625,1.46469 -6.31563,5.81844 -6.96063,6.67844c-0.04031,0.05375 -0.08062,0.1075 -0.1075,0.16125c-3.31906,4.97187 -5.09281,10.79031 -5.16,16.85062c-0.04031,4.54188 0.84656,9.04344 2.64719,13.38375c4.1925,10.06469 12.9,18.39594 23.26031,22.29281c0.34938,0.12094 0.68531,0.24188 1.29,0.45688c0.05375,0.02687 0.56438,0.18812 0.645,0.20156l0.37625,0.13438c0.5375,0.17469 1.08844,0.34937 1.62594,0.45687c2.72781,0.55094 5.38844,0.86 7.88781,0.94063c0.43,0 0.86,0.01344 1.29,0.01344c18.85281,0 26.16281,-13.30312 28.595,-17.7375c0.24188,-0.43 0.41656,-0.77937 0.57781,-0.99437c0,-0.01344 0,-0.01344 0.01344,-0.02688c1.06156,-1.57219 0.65844,-3.70875 -0.91375,-4.78375c-1.55875,-1.06156 -3.69531,-0.65844 -4.77031,0.91375h-0.01344c-5.02562,7.40406 -13.62562,9.64813 -25.54469,6.69188c-0.88688,-0.215 -1.85438,-0.55094 -2.71438,-0.87344c-1.12875,-0.40312 -2.2575,-0.87344 -3.30562,-1.38406c-2.08281,-1.03469 -4.04469,-2.27094 -5.81844,-3.64156c-10.48125,-8.12969 -14.57969,-25.0475 -8.45219,-34.81656c0.81969,-1.30344 0.67188,-2.99656 -0.36281,-4.13875c-0.77938,-0.86 -1.90813,-1.24969 -3.01,-1.10187zM72.26688,17.2c-0.77938,-0.01344 -1.57219,0.24188 -2.21719,0.77938c-5.20031,4.23281 -10.52156,11.16656 -10.75,11.44875c-0.02687,0.05375 -0.05375,0.09406 -0.09406,0.14781c-9.40625,13.69281 -10.11844,33.17719 -1.80063,49.63813c1.30344,2.60687 2.78156,5.09281 4.35375,7.37719l0.47031,0.67188c1.33031,1.94844 2.82187,4.15219 4.73,5.87219c0.65844,0.7525 1.37062,1.47812 2.06937,2.17687l0.33594,0.34938l0.28219,0.28219c0.71219,0.68531 1.43781,1.38406 2.19031,2.05594h0.01344c0.05375,0.08063 0.13437,0.13438 0.20156,0.20156c0.84656,0.7525 1.70656,1.46469 2.84875,2.365l0.30906,0.22844c0.88688,0.71219 1.78719,1.38406 2.71438,2.0425c0.09406,0.06719 0.18812,0.13438 0.28219,0.20156c0.3225,0.215 0.645,0.41656 0.9675,0.645l0.3225,0.215l0.37625,0.24188c0.68531,0.45687 1.35719,0.87344 2.31125,1.42437c0.61813,0.37625 1.27656,0.7525 1.70656,0.9675c0.18812,0.1075 0.38969,0.215 0.86,0.47031l1.04812,0.55094c0.05375,0.02688 0.29563,0.13438 0.34938,0.16125c0.68531,0.34938 1.3975,0.68531 2.10969,1.00781l1.08844,0.48375c0.71219,0.30906 1.43781,0.60469 2.32469,0.94062l0.40312,0.14781c0.02688,0.02688 0.36281,0.14781 0.38969,0.16125c0.645,0.22844 1.30344,0.45688 1.96188,0.67188l1.505,0.49719c0.7525,0.25531 1.62594,0.55094 2.58,0.71219c4.68969,0.77938 9.245,1.1825 13.55844,1.1825c0.51063,0 1.02125,-0.01344 1.51844,-0.01344c37.97438,-0.83313 47.85094,-33.09656 47.945,-33.41906c0.47031,-1.62594 -0.29562,-3.35937 -1.8275,-4.085c-1.53187,-0.72562 -3.35937,-0.215 -4.31344,1.1825c-9.62125,14.05563 -27.81562,19.995 -46.34594,15.10375c-0.86,-0.215 -1.69313,-0.45687 -2.72781,-0.79281c-0.17469,-0.05375 -0.3225,-0.1075 -0.60469,-0.215c-0.60469,-0.18812 -1.19594,-0.38969 -1.86781,-0.645l-0.95406,-0.36281c-0.55094,-0.215 -1.10187,-0.43 -1.77375,-0.72563l-0.44344,-0.20156c-0.81969,-0.34937 -1.6125,-0.73906 -2.32469,-1.08844l-1.96188,-1.02125c-0.44344,-0.215 -0.83312,-0.45687 -1.43781,-0.81969l-0.33594,-0.18813l-0.33594,-0.20156c-0.49719,-0.29563 -0.99437,-0.60469 -1.45125,-0.92719l-0.3225,-0.20156c-0.02687,-0.01344 -0.29562,-0.20156 -0.3225,-0.22844c-0.40312,-0.25531 -0.79281,-0.51062 -1.16906,-0.7525c-0.83312,-0.59125 -1.65281,-1.20937 -2.60687,-1.96187l-0.37625,-0.30906c-8.86875,-7.08156 -15.42625,-16.54156 -18.50344,-26.68687c-2.86219,-9.31219 -0.73906,-21.5 5.68406,-32.59938c0.83313,-1.43781 0.52406,-3.26531 -0.7525,-4.34031c-0.63156,-0.5375 -1.41094,-0.81969 -2.19031,-0.81969zM34.41344,27.52c-0.81969,0 -1.65281,0.29563 -2.31125,0.88688c-6.57094,5.89906 -11.48906,13.545 -12.02656,14.41844c-14.05563,20.46531 -11.34125,52.27187 -1.69313,71.71594c0.18813,0.40313 0.38969,0.79281 0.59125,1.1825l0.13438,0.215c0.17469,0.38969 0.37625,0.79281 0.44344,0.87344c0.1075,0.25531 0.26875,0.5375 0.33594,0.61813c0.16125,0.33594 0.3225,0.63156 0.61813,1.14219l1.10187,1.89469c0.16125,0.25531 0.3225,0.52406 0.37625,0.61813c0.215,0.34937 0.44344,0.71219 0.67188,1.075l0.5375,0.86c0.16125,0.25531 0.3225,0.48375 0.43,0.61812c0.5375,0.83313 1.075,1.66625 1.66625,2.45906c0.02687,0.04031 0.05375,0.06719 0.08062,0.09406l0.215,0.29562c0.48375,0.69875 0.98094,1.37063 1.42438,1.92156l1.96187,2.48594c0.02688,0.02688 0.24188,0.28219 0.25531,0.30906l0.28219,0.3225c0.59125,0.72563 1.22281,1.45125 1.85438,2.15c0.09406,0.1075 0.18812,0.20156 0.28219,0.30906c0.60469,0.65844 1.22281,1.31687 1.86781,2.00219l0.61812,0.59125c0.51063,0.5375 1.02125,1.06156 1.55875,1.55875c0,0.01344 0.25531,0.25531 0.25531,0.25531l0.5375,0.49719c0.645,0.61813 1.31687,1.23625 1.8275,1.66625c0.02687,0.04031 0.51062,0.45688 0.55094,0.48375c0.63156,0.56438 1.26313,1.10188 1.90813,1.62594l3.29219,2.60688c0.55094,0.40312 1.11531,0.80625 1.76031,1.27656c0.215,0.16125 0.44344,0.3225 0.67187,0.47031c0.09406,0.08063 0.20156,0.16125 0.26875,0.20156l2.4725,1.65281c0.90031,0.59125 1.80063,1.14219 2.9025,1.80062l0.59125,0.33594c0.68531,0.40312 1.38406,0.80625 2.0425,1.15562c0.38969,0.215 0.77938,0.40313 1.11531,0.57781c0.47031,0.25531 0.98094,0.5375 1.76031,0.91375c0.06719,0.04031 0.61812,0.30906 0.68531,0.33594c0.77938,0.38969 1.57219,0.7525 2.56656,1.19594c0,0.01344 0.3225,0.16125 0.3225,0.16125c0.91375,0.38969 1.80063,0.76594 2.96969,1.23625c0.18813,0.08063 0.37625,0.14781 0.41656,0.16125c0.83313,0.3225 1.70656,0.645 2.41875,0.90031c0.06719,0.02688 0.43,0.17469 0.49719,0.20156c0.95406,0.3225 1.89469,0.63156 3.10406,1.00781c0.20156,0.06719 0.41656,0.13437 0.44344,0.13437l0.68531,0.215c0.83313,0.25531 1.66625,0.52406 2.56656,0.69875c6.39625,1.16906 12.64469,1.77375 18.55719,1.77375h0.01344c49.27531,0 64.97031,-39.65406 65.13156,-40.05719c0.60469,-1.59906 -0.05375,-3.39969 -1.55875,-4.23281c-1.47812,-0.81969 -3.35937,-0.43 -4.4075,0.92719c-12.64469,16.64906 -36.49625,22.83031 -63.80125,16.555c-0.65844,-0.16125 -1.33031,-0.34937 -1.98875,-0.55094l-1.29,-0.38969c-0.87344,-0.26875 -1.74687,-0.56438 -2.59344,-0.86c-0.01344,0 -0.40313,-0.14781 -0.40313,-0.14781c-0.7525,-0.25531 -1.505,-0.55094 -2.16344,-0.80625l-0.7525,-0.29562c-0.83312,-0.33594 -1.66625,-0.68531 -2.4725,-1.04813l-0.47031,-0.20156c-0.72562,-0.33594 -1.42437,-0.65844 -2.12312,-1.00781c-0.05375,-0.02688 -0.60469,-0.29563 -0.65844,-0.30906c-0.48375,-0.24188 -0.9675,-0.49719 -1.58563,-0.83313l-2.80844,-1.505c-0.28219,-0.18812 -0.57781,-0.36281 -0.86,-0.51062c-0.84656,-0.52406 -1.72,-1.04813 -2.58,-1.59906c-0.20156,-0.12094 -0.37625,-0.25531 -0.71219,-0.48375c-0.59125,-0.37625 -1.16906,-0.76594 -2.01563,-1.35719l-0.33594,-0.24188c-0.57781,-0.40312 -1.14219,-0.83312 -1.6125,-1.1825c-0.29563,-0.215 -0.59125,-0.45687 -1.075,-0.81969c-0.43,-0.33594 -0.86,-0.65844 -1.26313,-0.98094l-0.7525,-0.61813c-0.63156,-0.51062 -1.22281,-1.04812 -1.84094,-1.57219c-0.08062,-0.08062 -0.14781,-0.13437 -0.24187,-0.20156c-0.68531,-0.63156 -1.38406,-1.26312 -2.21719,-2.05594l-2.43219,-2.41875c-0.59125,-0.60469 -1.1825,-1.22281 -1.85437,-1.96187c-0.61813,-0.68531 -1.20938,-1.37063 -2.00219,-2.31125l-1.45125,-1.77375c-0.17469,-0.25531 -0.36281,-0.51063 -0.59125,-0.77938c-0.49719,-0.67187 -0.99437,-1.33031 -1.49156,-2.02906c-13.38375,-18.43625 -16.8775,-56.92125 -6.45,-71.01719c1.04812,-1.41094 0.86,-3.39969 -0.45688,-4.59562c-0.645,-0.59125 -1.47812,-0.88688 -2.29781,-0.88688z"></path>
                          </g>
                        </g>
                      </svg>{" "}
                      JQuery
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon icon={faJava} className="skill_icon" />
                      Java
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="16px"
                        className="skill_icon"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}>
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}>
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#ffffff">
                            <path d="M151.05094,41.29344l-57.92906,-32.55906c-4.39406,-2.45906 -9.84969,-2.45906 -14.24375,0l-57.92906,32.55906c-4.43438,2.48594 -7.18906,7.14875 -7.18906,12.1475v65.11813c0,4.99875 2.75469,9.66156 7.18906,12.1475l57.92906,32.55906c2.20375,1.23625 4.66281,1.85437 7.12187,1.85437c2.45906,0 4.91813,-0.61812 7.12188,-1.85437l57.92906,-32.55906c4.43438,-2.48594 7.18906,-7.14875 7.18906,-12.1475v-65.11813c0,-4.99875 -2.75469,-9.66156 -7.18906,-12.1475zM86,127.28c-22.76312,0 -41.28,-18.51687 -41.28,-41.28c0,-22.76312 18.51688,-41.28 41.28,-41.28c13.0075,0 25.02063,6.03344 32.82781,16.31313l-15.07688,8.72094c-4.52844,-4.95844 -10.965,-7.83406 -17.75094,-7.83406c-13.27625,0 -24.08,10.80375 -24.08,24.08c0,13.27625 10.80375,24.08 24.08,24.08c6.78594,0 13.2225,-2.87562 17.75094,-7.83406l15.07688,8.72094c-7.80719,10.27969 -19.82031,16.31312 -32.82781,16.31312zM127.28,89.44h-6.88v6.88h-6.88v-6.88h-6.88v-6.88h6.88v-6.88h6.88v6.88h6.88zM151.36,89.44h-6.88v6.88h-6.88v-6.88h-6.88v-6.88h6.88v-6.88h6.88v6.88h6.88z"></path>
                          </g>
                        </g>
                      </svg>
                      C/C++
                    </p>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
