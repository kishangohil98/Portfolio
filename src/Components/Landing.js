import React, { useEffect } from "react";
import my_picture from "../images/my_photo.jpg";
import "../css/landing.css";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import curve from "../images/curve.png";
import WOW from "wow.js";
import { Link } from "react-scroll";

export default function Landing() {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      <div>
        <Parallax
          bgImage={require("../images/coding_bg.jpg")}
          bgImageAlt="programming background image"
          strength={200}
          className="programming_img">
          <div style={{ height: "300px" }} />
        </Parallax>
        <div className="photo_center">
          <img
            src={my_picture}
            alt="My_picture"
            className="my_photo animate__animated animate__pulse"></img>
        </div>
        <div className="backGround">
          <div className="imgMargin">
            <div className="wow animate__animated animate__fadeInUp">
              <p className="heythere ">hey there !</p>
              <h1 className="heading ">I am Kishan Gohil</h1>
              <h4 className="subHeader">Javascript Developer</h4>
            </div>
            <div className="social-icon">
              <a
                href="https://github.com/kishangohil98"
                target="_blank"
                rel="noopener noreferrer"
                className="git">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.instagram.com/key_son_gohel/"
                target="_blank"
                rel="noopener noreferrer"
                className="insta">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.linkedin.com/in/kishan-gohil-9941a3193/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCm7pEIDEIUwbZe0zxUwdG_Q"
                className="yt"
                rel="noopener noreferrer"
                target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.facebook.com/kishan.gohil.58323431/"
                target="_blank"
                rel="noopener noreferrer"
                className="fb">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div>
              <Link to="about" smooth={true} offset={-80} className="id_link">
                <FontAwesomeIcon
                  className="downarrow"
                  icon={faChevronCircleDown}
                />
              </Link>
            </div>
          </div>
          <img src={curve} className="curve" alt="curve"></img>
        </div>
      </div>
    </>
  );
}
