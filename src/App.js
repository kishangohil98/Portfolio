import React, { Fragment, useState } from "react";
import Landing from "./Components/Landing";
import Aboutme from "./Components/Aboutme";
import Project from "./Components/Project";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import colorIcon from "./images/color-icon.svg";
import "./App.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ThemeContext, { themes } from "./Components/ThemeContext";

export default function App() {
  const [theme_count, setThemeCount] = useState(0);
  //var theme_count = 0;
  const [theme, setTheme] = useState(themes[theme_count]);

  const theme_toggler = () => {
    setThemeCount((preState) => (preState === 4 ? 0 : preState + 1));
    // if (theme_count == 4) {
    //   theme_count = 0;
    // }
    // theme_count++;
    setTheme(themes[theme_count]);
  };
  return (
    <Fragment>
      <ThemeContext.Provider value={theme}>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Click here to Change Theme</Tooltip>}>
          <button className="theme_button">
            <img
              src={colorIcon}
              className="color_changer"
              alt="Theme change icon"
              onClick={theme_toggler}></img>
          </button>
        </OverlayTrigger>

        <Landing />
        <Aboutme />
        <Project />
        <Education />
        <Footer />
      </ThemeContext.Provider>
    </Fragment>
  );
}
// <OverlayTrigger
//           placement="top"
//           overlay={<Tooltip>Click here to change theme color</Tooltip>}>
//           <button className="theme_button" onClick={theme_toggler}>
//             <img src={colorIcon} className="color_changer"></img>
//           </button>
//         </OverlayTrigger>
