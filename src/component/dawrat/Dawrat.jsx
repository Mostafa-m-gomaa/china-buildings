import React from 'react'
import './dawrat.css'
import { Link } from 'react-router-dom';
import computer from "../../assets/computer.jpg"
import languages from "../../assets/lang.jpg"
import tanmya from "../../assets/teanmya.jpg"
import programming from "../../assets/pro.jpg"

const Dawrat = () => {
  return (
  <div className="dawrat">
     <div className="back-light"></div>
    <div className="container">
        <div className="txt">
<h1> الدورات التدريبية</h1>
<p>اختر الدورة التدريبية</p>
           </div>

<div className="btns">
    <div className="card">
        <img src={computer} alt="" />
        <Link to="/dawrat">كمبيوتر</Link>
    </div>
    <div className="card">
        <img src={languages} alt="" />
        <Link to="/dawrat">لغات</Link>
    </div>
    <div className="card">
        <img src={tanmya} alt="" />
        <Link to="/sa">التنمية</Link>
    </div>
    <div className="card">
        <img src={programming} alt="" />
        <Link to="/sa">البرمجة</Link>
    </div>
        
      
   
</div>
    </div>
  </div>
  )
}

export default Dawrat
