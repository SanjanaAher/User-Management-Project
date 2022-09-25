import React from "react";
import "./Header.css";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";

function Header({ setIsAdding }) {
  const {  t } = useTranslation(["home"]);

 

 

  return (
    <>
      <header className="header" id="head">
        <h1>{t("USER MANAGEMENT SYSTEM")}</h1>
      </header>

     
    
    </>
  );
}

export default Header;
