import React from 'react'
import './Header.css' 
import { useEffect } from 'react';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next'

function Header({setIsAdding}) {
  const {i18n,t} = useTranslation(["home","edit"]);

  useEffect(() => {
    if(localStorage.getItem("i18nextLng")?.length>2){
      i18next.changeLanguage("en");
    }
  },[]);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
        <header className='header'>
            <h1>
                {t("USER MANAGEMENT SYSTEM")}
            </h1>
            
        </header>
        <div>
          <select className='lang' value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">Français (French)</option>
            <option value="es">español (Spanish)</option>

          </select>
        </div>
    </>
  )
}

export default Header