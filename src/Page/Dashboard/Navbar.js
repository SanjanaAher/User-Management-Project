import React, { useEffect, useState } from "react";

import "./Navbar.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes";
import styled, { ThemeProvider } from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Navbar = () => {
  const { i18n, t } = useTranslation(["home"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  function changeFontSize(type) {
    let ids = ["#font", "#search", "#table"];
    ids.forEach((id) => {
      let el = document.querySelector(id);
      let fontSize = window
        .getComputedStyle(el, null)
        .getPropertyValue("font-size");
      fontSize = parseFloat(fontSize);
      if (type === "increase") {
        el.style.fontSize = fontSize + 5 + "px";
      } else {
        el.style.fontSize = fontSize - 5 + "px";
      }
    });
  }

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="user__navbar">
      <div className="navbar__btn">
        <div className="user__btn">
          <div className="user__logo">
            {/* <img src={logo} alt="logo" /> */}
          </div>
          <div className="select-items">
            <select
              className="lang"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="fr">Français (French)</option>
              <option value="es">español (Spanish)</option>
            </select>
          </div>
          <div>
            <button
              className="font-btn"
              onClick={() => changeFontSize("increase")}
            >
              A+
            </button>
            <button
              className="font-btn"
              onClick={() => changeFontSize("decrease")}
            >
              A-
            </button>
          </div>
        </div>
        {/* User Management System */}
      </div>
      <div>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <StyledApp>
            <button className="mode" onClick={() => themeToggler()}>
              Eye Protection Mode
            </button>
          </StyledApp>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Navbar;
