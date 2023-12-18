import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './aboutUs.css'
import face from "../../assets/386622_facebook_icon.png"
import what from "../../assets/986960_whatsapp_icon.png"
import { useTranslation } from 'react-i18next';
const AboutUs = () => {
    const [t,i18n]=useTranslation()
    const {loader,setLoader}=useContext(AppContext)
const contactClick =()=>{
    document.querySelector(".cont .about").classList.add("about-hide")
    document.querySelector(".cont .contact").classList.add("contact-hide")
}
const aboutClick =()=>{
    document.querySelector(".cont .about").classList.remove("about-hide")
    document.querySelector(".cont .contact").classList.remove("contact-hide")
}

    useEffect(()=>{
        setLoader(false)
    },[])
  return (
  <div className="about-us">
    <div className="container">
        <div className="menu">
            <span onClick={aboutClick} >{t('about-us')}</span>
            <span onClick={contactClick} >{t('Contact-Us')}</span>
        </div>

        <div className="cont">
            <div className="about">
                <h1>{t('about-us')}</h1>
                <p>{t('about-one')}</p>
<p>{t('about-two')}</p>
<p>{t('about-three')}</p>
<p>{t('about-four')}</p>
<span>{t('about-title')}</span>
            </div>

            <div className="contact">
                <h1>{t('Contact-Us')}</h1>
                <div>{t('contact-one')}</div>

                <div>
                    <span>{t('Jinan-City')}</span>
                    <span>{t('jinan-title')}</span>
                </div>
                <div>
                    <span>{t('Qingdao-City')}</span>
                    <span>{t('Qingdao-title')}</span>
                </div>

                <div>
                    <span>{t('Liaocheng-City')}</span>
                    <span>{t('Liaocheng-title')}</span>
                </div>
                <div>
                    <span>{t('Linyi-City')}</span>
                    <span>{t('Linyi-title')}</span>
                </div>

                <div>{t('contact-please')}</div>

<div>
    <a href="mailto:Sales@sdcbm.com">Sales@sdcbm.com</a>
    <span>Phone: +86 13255688503</span>
    
</div>
<div className="icons">
    <a href="https://www.facebook.com/china.shandong.export/?ref=page_internal">    <img src={face} alt="" /></a>
    <a href="https://wa.me/+8613255688503">  <img src={what} alt="" /></a>

  
</div>
<div>{t('contact-we')}</div>

            </div>
        </div>
    </div>
  </div>
  )
}

export default AboutUs
