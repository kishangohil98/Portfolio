import { createContext } from "react";

export const themes = [
  {
    bi1: "linear-gradient(to right, #0acffe 0%, #495aff 100%)",
    textColor: "#0082c8",
    bi2: "linear-gradient(to left, #0acffe 0%, #495aff 100%)",
    highlightText: "#0082c8",
    proHighLight: "#495aff",
    edBg: "#495aff",
  },
  {
    bi1:
      "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
    textColor: "#44107A",
    bi2:
      "linear-gradient(-225deg, #FFF800 0%, #FF1361 29%, #44107A 67%, #231557 100%)",
    highlightText: "#44107A",
    proHighLight: "#44107A",
    edBg: "#44107A",
  },
  {
    bi1: "linear-gradient(-120deg,#EE3124,#00A160,#FFC425)",
    textColor: "#00A160",
    bi2: "linear-gradient(-120deg,#FFC425,#00A160,#EE3124)",
    highlightText: "#00A160",
    proHighLight: "#00A160",
    edBg: "#00A160",
  },

  {
    bi1: "linear-gradient(to right, #b92b27, #1565c0)",
    bi2: "linear-gradient(to left, #b92b27, #1565c0)",
    textColor: "#1565c0",
    highlightText: "#1565c0",
    proHighLight: "#1565c0",
    edBg: "#1565c0",
  },
  {
    bi1: "linear-gradient(to right, #f7ff00, #db36a4)",
    bi2: "linear-gradient(to left, #f7ff00, #db36a4)",
    textColor: "#db36a4",
    highlightText: "#db36a4",
    proHighLight: "#db36a4",
    edBg: "#db36a4",
  },
];
const ThemeContext = createContext(themes.blue);

export default ThemeContext;
