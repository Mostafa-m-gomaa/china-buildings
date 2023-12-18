import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom';
import adFoto from "../../assets/WhatsApp Image 2023-04-29 at 08.28.37.jpg"
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const [t,i18n]=useTranslation()
  return (
<div className="hero">
    {/* <div className="back-light"></div> */}
    <div className="container">

   <div className="ad">

<img src={adFoto} alt="" />
<div className="text">
  <h2>{t('jinan-header')}</h2>
  <span>{t('jinan-para')}</span>
 <a href="http://jnluoqianyi.en.alibaba.com" target='blank'>{t('alibaba')}</a>
</div>
   </div>
  
    </div>
    </div>


  )
}

export default Hero
