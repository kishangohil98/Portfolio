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
  faWolfPackBattalion,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faTerminal,
  faDatabase,
  faLayerGroup
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
                  I am a Javascript developer in Ahmedabad, India.
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
                  I am having around 1 year of professional work experience by working on NodeJS API development and 6 months of ReactJS experience by working on self-learning projects.
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
                        icon={faWolfPackBattalion}
                        className="skill_icon"
                      />
                      NestJS
                    </p>
                    <p
                      className="skill"
                      style={{ backgroundColor: themes.highlightText }}>
                      <FontAwesomeIcon
                        icon={faDatabase}
                        className="skill_icon"
                      />
                      ORM
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
                      />
                      SQL
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
                      <FontAwesomeIcon icon={faJava} className="skill_icon" />
                      Java-Servlets
                    </p>
                    <p className="skill">
                      <FontAwesomeIcon icon={faJava} className="skill_icon" />
                      JSP
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
