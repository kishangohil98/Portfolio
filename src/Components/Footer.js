import React, { Fragment, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footer_img from "../images/footer.png";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import Typical from "react-typical";
import WOW from "wow.js";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <Fragment>
      <Container>
        <div className="ft_content">
          <div className="ft-header-border mb-3"></div>
          <h1 className="ft_header mb-3 wow animate__animated animate__fadeInDown">
            Let's Get Together
          </h1>
          <p className="ft_line wow animate__animated animate__fadeInUp">
            You can connect with me on the following, I would glad to Join you!
          </p>
          <div>
            <a href="mailto:gohilkishan159@gmail.com">
              <img
                src="https://img.icons8.com/fluent/40/000000/gmail.png"
                alt="Mail me"
                className="ft_link px-3 wow animate__animated animate__fadeInLeft"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kishan-gohil-9941a3193/"
              target="_blank">
              <img
                src="https://img.icons8.com/color/40/000000/linkedin.png"
                alt="Linked connect"
                className="ft_link px-3 wow animate__animated animate__fadeInRight"
              />
            </a>
          </div>
        </div>
      </Container>
      <div className="ft_background">
        <img src={footer_img} className="curve" alt="footer_image"></img>
        <FontAwesomeIcon
          className="uparrow"
          icon={faAngleDoubleUp}
          onClick={() => scroll.scrollToTop()}
        />
        <div className="mt-4 mb-4 thankyou_line">
          {" "}
          <Typical
            steps={[
              "Thank you for reaching out here ",
              2000,
              "I really appreciate your time ",
              2000,
              "Best Regards",
              2000,
            ]}
            loop={Infinity}
          />
        </div>
        <div>
          <h6>Kishan Gohil &copy; 2020</h6>
        </div>
      </div>
    </Fragment>
  );
}
