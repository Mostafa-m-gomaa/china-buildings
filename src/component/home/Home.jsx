import React, { useEffect } from 'react'
import './home.css'

import { useNavigate } from 'react-router-dom'; 
import Hero from '../hero/Hero';
import Part from '../part/part';
import Categories from '../categories/Categories';
import Factory from '../factories/Factory';
import HomeTender from '../homeTender/HomeTender';

function Home() {

  return (
    <div className="home">
        <Hero />
        <Categories />
        <Part />
        {/* <Factory /> */}
        {/* <HomeTender /> */}
    </div>
  )
}

export default Home