import React, { Fragment, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import "../css/project.css";
import projectWave from "../images/project_wave.png";
import projectBottomWave from "../images/pro_bottom.png";
import alf from "../images/alf.png";
import pa from "../images/pa.png";

import tabib from "../images/tabib.png";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import WOW from "wow.js";
import ThemeContext from "./ThemeContext";

export default function Project() {
  useEffect(() => {
    new WOW().init();
  }, []);
  const themes = useContext(ThemeContext);

  return (
    <Fragment>
      <div className="pro_backGround" style={{ background: themes.bi2 }}>
        <img src={projectWave} className="curve" alt="curve"></img>
        <Container className="project_container">
          <h1 className="project-header mt-5 wow animate__animated animate__fadeInDown">
            Projects
          </h1>
          <div className="pro_header-border mb-5"></div>
          <Row>
            <CardDeck>
              <Col lg={4} md={12} sm={12}>
                <Card className="pro_card wow animate__animated animate__fadeInLeft">
                  <Card.Img variant="top" src={pa} />
                  <Card.Body>
                    <Card.Title className="card_title">
                      Plant Awesome(Blog)
                    </Card.Title>
                    <p className="pro_time">Mar-May 2020</p>
                    <div className="pro_border"></div>
                    <Card.Text>
                      Created a Blog Website for self-learning using{" "}
                      <span style={{ color: themes.proHighLight }}>
                        ReactJs
                      </span>{" "}
                      and{" "}
                      <span style={{ color: themes.proHighLight }}>Redux</span>{" "}
                      state management as front-end and{" "}
                      <span style={{ color: themes.proHighLight }}>
                        MongoDB, NodeJs, ExpressJs
                      </span>{" "}
                      as back-end. I have implemented various operation such as
                      postblog, like/dislike blog, delete blog including JWT
                      authentication services.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={12} sm={12}>
                <Card className="pro_card">
                  <Card.Img variant="top" src={tabib} />
                  <Card.Body>
                    <Card.Title className="card_title">
                      Disease Diagnosis
                    </Card.Title>
                    <p className="pro_time">Oct 19-Apr 20</p>
                    <div className="pro_border"></div>
                    <Card.Text>
                      Worked on project under submission to GTU on “Diseasis
                      Diagnosis“ where Patient can chat with Doctor, can book
                      appointment, update their profile with necessary
                      authentication. Front-end:{" "}
                      <span style={{ color: themes.proHighLight }}>
                        JSP,html,css, Bootstarp.
                      </span>
                      Back-end:{" "}
                      <span style={{ color: themes.proHighLight }}>
                        Java Servlets, MySql
                      </span>{" "}
                      database.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={12} sm={12}>
                <Card className="pro_card wow animate__animated animate__fadeInRight">
                  <Card.Img variant="top" src={alf} />
                  <Card.Body>
                    <Card.Title className="card_title">
                      Akshar Lining & Furniture
                    </Card.Title>
                    <p className="pro_time">Jun-Jul 2019</p>
                    <div className="pro_border"></div>
                    <div className="pb-3 pt-3">
                      <FontAwesomeIcon icon={faLink} className="pro_icon" />
                      <a
                        href="http://aksharlining.ml/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ color: themes.textColor }}>
                        http://aksharlining.ml/
                      </a>
                    </div>
                    <Card.Text>
                      Developed a Business Marketing Website for “Aksharlining
                      and Furniture” and hosted in July 2019. Frontend:{" "}
                      <span style={{ color: themes.proHighLight }}>
                        html, css, Bootstrap{" "}
                      </span>{" "}
                      and bit of JavaScript. Back-end: NA
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CardDeck>
          </Row>
        </Container>
        <img src={projectBottomWave} className="curve" alt="curve"></img>
      </div>
    </Fragment>
  );
}
