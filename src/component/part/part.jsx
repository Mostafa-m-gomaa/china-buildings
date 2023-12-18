import React from 'react'
import  './part.css'
import rocket from"../../assets/416398_exploration_fuel_nasa_rocket_space_icon.png"
import china from"../../assets/2634487_china_ensign_flag_nation_icon.png"
import world from"../../assets/6442799_globe_location_pin_world_worldwide_icon.png"
import smes from"../../assets/9073958_snes_icon.png"
import kewit from "../../assets/Screenshot 2023-03-15 151345.png"
import hh from "../../assets/Screenshot 2023-03-15 151607.png"
import sihe from "../../assets/Screenshot 2023-03-15 151542.png"
import { useTranslation } from 'react-i18next';

const Part = () => {
    const [t,i18n]=useTranslation()
  return (
  <div className="part">
    <div className="container">
        <h2>{t('construction-header')}</h2>
        <h4>{t('construction-span')}</h4>
        <div className="icons">
     
            <div className="one">
            <img src={world} alt="" />
            <div className="txt">
                <div className="num">25+</div>
                <div>{t('Countries-Served')}</div>
            </div>
            </div>
            <div className="one">
            <img src={rocket} alt="" />
            <div className="txt">
                <div className="num">10,000+</div>
                <div>{t('Transactions')}</div>
            </div>
            </div>
        </div>
        <div className="factories">
            <img src={kewit} alt="" />
            <img src={hh} alt="" />
            <img src={sihe} alt="" />
        </div>

    </div>
  </div>
  )
}

export default Part
