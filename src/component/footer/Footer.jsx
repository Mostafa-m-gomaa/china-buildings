import React from 'react'
import './footer.css'
import logo from "../../assets/logo.jpg"
import facebook from "../../assets/386622_facebook_icon.png"
import linked from "../../assets/317725_linkedin_social_icon.png"
import whatsapp from "../../assets/986960_whatsapp_icon.png"
import { Link } from 'react-router-dom'
 
const Footer = () => {
  return (
   <div className="footer">
    <div className="container">
        <div className="left">
        <img src={logo} alt="" />
        <h3>SDCBM Shandong Construction & Building Materials</h3>
        <span>200 south east rd, lujiahegou village</span>
        <span>sunji town , jinan city</span>
        <span>shandong , china</span>
        <a href="mailto:sales@sdcbm.com"> sales@sdcbm.com </a>
        <div className="icons">
        <a href="https://www.facebook.com/china.shandong.export/?ref=page_internal"><img src={facebook} alt="" /></a>
        <a href="#"><img src={linked} alt="" /></a>
        <a href="https://wa.me/+8613255688503"><img src={whatsapp} alt="" /></a>
    </div>
        </div>
        <div className="center">
            <h1>menu</h1>
            <Link to="/about-us" >about us</Link>
            <Link to="/factory" >factories</Link>
            <Link to="/products" >products</Link>
            <Link to="/logistics" >logistics</Link>
            <Link to="/tender" >合作伙伴</Link>
        </div>
        <div className="right">
            <h1>about sdcbm</h1>
        <div className='brief'>
Your premier source for top-quality construction & building materials from Shandong,
 China. We offer a wide range of products, including steel, cement, glass, ceramics,
  and more, at competitive prices. With 1000+ transactions and strong partnerships,
  we provide eco-friendly, sustainable solutions and easy international shipping. 
  Trust SDCBM for seamless, efficient services that exceed expectations."		

</div>
<div>Copyright © 2023 Shandong Wadi Business Consulting Co., Ltd. All rights reserved. 
</div>
        </div>
        
        

    </div>
   </div>
  )
}

export default Footer
