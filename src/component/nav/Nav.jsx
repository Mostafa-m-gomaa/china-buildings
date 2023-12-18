import React, { useContext, useEffect, useState } from 'react'
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom';
import "./nav.css"
import burger from "../../assets/6351903_burger_list_menu_navigation_icon.png"
import { AppContext } from '../../App';
import { useTranslation } from 'react-i18next';


function Nav(props) { 
const {lang,setLang}=useContext(AppContext)
const [t,i18n]=useTranslation()

  const burgerClick =(e)=>{
    document.querySelector(".list").classList.toggle("menu-active")
  }
  const linkClick =(e)=>{
    document.querySelector(".list").classList.remove("menu-active")
  }

  function handleOptionChange(event) {
    // Get the value of the selected option
    setLang(event.target.value)
    const selectedValue = event.target.value;

    if(selectedValue=="en"){
      i18n.changeLanguage("en")
    }
    if(selectedValue=="ch"){
      i18n.changeLanguage("ar")
    }
    if(selectedValue=="ru"){
      i18n.changeLanguage("ru")
    }
  }

  return (
    <div  className="nav">

       
    <div className="container">
    <Link onClick={linkClick} to="/"><img src={logo} alt="" /></Link>
    <img src={burger} alt="" className="burger" onClick={burgerClick}/>
     
        <div className="list">

        <Link onClick={linkClick} className='about' to="/about-us">{t('about-us')}</Link>
        <Link onClick={linkClick} to="/factory">{t('Factories')}</Link>
        <Link onClick={linkClick} to="/products">{t('Products')}</Link>
        <Link onClick={linkClick} className='logis' to="/logistics">{t('Logistics')}</Link>
        <Link onClick={linkClick} to="/tender">合作伙伴</Link>
        <select name="" onChange={handleOptionChange}>
         
          <option value="ch"  >عربي</option>
          <option value="en" >English</option>
          <option value="ru" >ٌRussian</option>
        </select>
        <Link onClick={linkClick} className='login' to="/">Login</Link>
     
            </div>
        </div>
    </div>
  )
}

export default Nav