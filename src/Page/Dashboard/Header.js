import React from "react";
import "./Header.css";
import { useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Header({ setIsAdding }) {
  const { i18n, t } = useTranslation(["home", "edit"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  function changeFontSize(type){
    let ids=["#font"];
    ids.forEach(id => {
      let el = document.querySelector(id);
      let fontSize = window.getComputedStyle(el,null).getPropertyValue("font-size")
      fontSize = parseFloat(fontSize);
      if(type === 'increase'){
        el.style.fontSize =(fontSize +5) + "px";

      }
      else{
        el.style.fontSize =(fontSize -5) + "px";
      }
    });
  }

  return (
    <>
      <header className="header">
        <h1>{t("USER MANAGEMENT SYSTEM")}</h1>
      </header>

      <div className="select-items"  >
        <select
          className="lang"
          value={localStorage.getItem("i18nextLng")}
          onChange={handleLanguageChange}
        >
          <option  value="en" >English</option>
          <option value="fr">Français (French)</option>
          <option value="es">español (Spanish)</option>
        </select>
        <button className="font-btn" onClick={() =>changeFontSize('increase')}>A+</button>
        <button className="font-btn" onClick={() =>changeFontSize('decrease')}>A-</button>
      </div>
      <div>
     

      </div>
    </>
  );
}

export default Header;
