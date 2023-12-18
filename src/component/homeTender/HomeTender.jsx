import React from 'react'
import rocket from"../../assets/416398_exploration_fuel_nasa_rocket_space_icon.png"
import china from"../../assets/2634487_china_ensign_flag_nation_icon.png"
import world from"../../assets/6442799_globe_location_pin_world_worldwide_icon.png"
import smes from"../../assets/9073958_snes_icon.png"
import mopile from"../../assets/1613769_iphone_mobile_sms_text_icon.png"
import paper from"../../assets/7099708_papers_empty_sheet_documents_letter_icon.png"
import './hometender.css'

const HomeTender = () => {
  return (
<div className="h-tender">
    <div className="container">
        <h1>BidAssist - Search Tenders Easily</h1>
        <h3>chinese Largest Government and Private Contracts' Portal</h3>
        <div className="icons">
            <div className="one">
            <img src={smes} alt="" />
            <div className="txt">
                <div className="num">7 Lakh+</div>
                <div>SME Users</div>
            </div>
            </div>
            <div className="one">
            <img src={paper} alt="" />
            <div className="txt">
                <div className="num">2 Cr+</div>
                <div>Tenders Available</div>
            </div>
            </div>
            <div className="one">
            <img src={world} alt="" />
            <div className="txt">
                <div className="num">140+</div>
                <div>Countries Covered</div>
            </div>
            </div>
            <div className="one">
            <img src={rocket} alt="" />
            <div className="txt">
                <div className="num">20,000+</div>
                <div>Authorities Covered</div>
            </div>
            </div>
            <div className="one">
            <img src={mopile} alt="" />
            <div className="txt">
                <div className="num">1 Lakh+</div>
                <div>App Downloads</div>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HomeTender
