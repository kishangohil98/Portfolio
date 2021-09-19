import React, { Fragment, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import "../css/education.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faAward,
  faGraduationCap,
  faChalkboardTeacher,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import WOW from "wow.js";
import ThemeContext from "./ThemeContext";

export default function Education() {
  useEffect(() => {
    new WOW().init();
  }, []);
  const themes = useContext(ThemeContext);

  return (
    <Fragment>
      <div>
        <h1 className="edu-header mt-2 wow animate__animated animate__fadeInDown">
          Academic
        </h1>
        <div className="edu-header-border mb-5"></div>
        <Container className="edu_container">
          <Accordion defaultActiveKey="0">
            <div className="mt-3">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="ad_header"
                  style={{ background: themes.edBg }}
                  eventKey="0">
                  <span className="mr-3 ">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    Bachelor of Engineering(Computer)
                  </span>
                  <span className="ad_subheader">2016-2020</span>
                  <span className="down_arrow align-middle">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Pursued Bachelor of Engineering in Computer (2016-2020) with
                    7.83 CGPA from Neotech Institute of Technology, Vadodara
                    that is affiliated under Gujarat Technological University.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>

            <div className="mt-3">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="ad_header"
                  style={{ background: themes.edBg }}
                  eventKey="1">
                  <span className="mr-3 ">
                    <FontAwesomeIcon icon={faAward} className="mr-2" />
                    Internship at TheOneWebTechnolory, Vadodara
                  </span>
                  <span className="ad_subheader">Jun-Jul 2019</span>
                  <span className="down_arrow align-middle">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Summer Internship 2019 at{" "}
                    <a
                      href="https://www.theonewebtechnology.com/"
                      style={{
                        textDecoration: "underline",
                        color: themes.textColor,
                      }}
                      rel="noopener noreferrer"
                      target="_blank">
                      TheOneWebTechnology
                    </a>
                    , Vadodara where I enhanced the fundamental knowledge of Web
                    development mainly html, css, bootstrap.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>

            <div className="mt-3">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="ad_header"
                  style={{ background: themes.edBg }}
                  eventKey="2">
                  <span className="mr-3 ">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="mr-2"
                    />
                    Front-end development online course
                  </span>
                  <span className="ad_subheader">Jan-Feb 2020</span>
                  <span className="down_arrow align-middle">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    I successfully completed 15 total hours of Front-end
                    development course provided by{" "}
                    <a
                      href="https://www.udemy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "underline",
                        color: themes.textColor,
                      }}>
                      Udemy
                    </a>
                    . It was a great experience to complete the course, I got
                    the chance to sharpen my JavaScript and JQuery skills.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>

            <div className="mt-3">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="ad_header"
                  style={{ background: themes.edBg }}
                  eventKey="3">
                  <span className="mr-3 ">
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                    Core Java and Advanced Java Course from IIHT, Vadodara
                  </span>
                  <span className="ad_subheader">2018-2019</span>
                  <span className="down_arrow align-middle">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    I was enrolled in Core Java and Advanced Java course from{" "}
                    <a
                      href="https://www.iiht.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "underline",
                        color: themes.textColor,
                      }}>
                      IIHT
                    </a>
                    , Vadodara where I practically learned the concepts of Java
                    Technology in the year 2018-2019.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>

            <div className="mt-3">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="ad_header"
                  style={{ background: themes.edBg }}
                  eventKey="4">
                  <span className="mr-3 ">
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                      C/C++ Course from IIHT, Vadodara
                  </span>
                  <span className="ad_subheader">2017</span>
                  <span className="down_arrow align-middle">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    I was enrolled in C/C++ course from{" "}
                    <a
                      href="https://www.iiht.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "underline",
                        color: themes.textColor,
                      }}>
                      IIHT
                    </a>
                    , Vadodara and successfully completed the course in the year
                    2017.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
          </Accordion>
        </Container>
      </div>
    </Fragment>
  );
}
