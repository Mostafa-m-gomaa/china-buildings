import React from 'react'
import { Link } from 'react-router-dom'
import kewit from "../../assets/Screenshot 2023-03-15 151345.png"
import hh from "../../assets/Screenshot 2023-03-15 151607.png"
import sihe from "../../assets/Screenshot 2023-03-15 151542.png"
import { useContext } from 'react'
import './factory.css'
import { AppContext } from '../../App'

const Factory = () => {
    

  
  return (
   <div className="factory">
    <div className="container">
        <h1>Shop Our Factories</h1>
        <h3>SDCBM Private and Select Exclusive Factories</h3>
        <div className="cards">
            <div className="card">
                <img src={kewit} alt=""  />
               
               
            </div>
            <div className="card">
                <img src={hh} alt="" />
             
                
            </div>
            <div className="card">
                <img src={sihe} alt="" />
               
                
            </div>
        </div>
    </div>
   </div>
  )
}

export default Factory
