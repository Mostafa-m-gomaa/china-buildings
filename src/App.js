import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import Nav from './component/nav/Nav';
import Home from './component/home/Home';
import { useState,useEffect } from 'react';
import  {  createContext } from 'react';
import React, { useContext } from 'react';
import Dawrat from './component/dawrat/Dawrat';
import Footer from './component/footer/Footer';
import ViewCategory from './component/viewCategory/ViewCategory';
import Product from './component/products/Product';
import Quotion from './component/quotion/Quotion';
import Logistics from './component/logistics/Logistics';
import Tender from './component/tender/Tender';
import Fac from './component/factory/Fac';
// import TenderForm from './component/tender-form/TenderForm';
import Tendrf from './component/tenderForm/Tendrf';
import AboutUs from './component/about-us/AboutUs';
import { useTranslation } from 'react-i18next';





export const AppContext = createContext();

function App() {
const [t,i18n]=useTranslation()

  const [myArray, setMyArray] = useState(() => {
    const storedArray = localStorage.getItem('myArray');
    return storedArray ? JSON.parse(storedArray) : [];
  });
  const [loader,setLoader ]=useState(true)
  const [onload ,setOnload]=useState(false)
  const [lang,setLang]=useState("ch")

 

  // const [cartArray, setCartArray] = useState([]);
  // const [realArray, setRealArray] = useState([]);

  // const addItem = (item) => {
    
  //   setCartArray(()=> [...cartArray , item])
    
  
  //  }

  // useEffect(() => {
   
  //   if(sessionStorage.getItem("myArr")){
  //     // setCartArray(JSON.parse(sessionStorage.getItem("myArr")))
  //   }
  //   else{
  //     sessionStorage.setItem("myArr",JSON.stringify(cartArray))
  //   }
  //   console.log(cartArray)
 
    
  // },[cartArray]);

useEffect(()=>{
  if(lang=="en"){
    i18n.changeLanguage("en")
  }
  if(lang=="ch"){
    i18n.changeLanguage("ar")
  }
  if(lang=="ru"){
    i18n.changeLanguage("ru")
  }
},[])

  return (
    <AppContext.Provider value={{lang,setLang,myArray,setMyArray ,loader,setLoader,onload,setOnload}} >    
 
      <div className="App">
        {loader ?  <div className='loader-cont'> 

<span class="loader"></span>
  </div> :null}

  {onload ?    <div className='spin-cont'>
          <div className='back-ground'></div>
          <div className="spinner"></div>
        </div> : null}
      

    

     <Nav />

 
  
     <Routes>
     <Route path="/"element={<Home />}/>
     <Route path="/viewCategory/:categoryId"element={<ViewCategory/>}/>
     <Route path="/products"element={<Product/>}/>
     <Route path="/quotion"element={<Quotion/>}/>
     <Route path="/logistics"element={<Logistics/>}/>
     <Route path="/tender"element={<Tender/>}/>
     <Route path="/factory"element={<Fac/>}/>
     <Route path="/tender-form"element={<Tendrf/>}/>
     <Route path="/about-us"element={<AboutUs/>}/>

   </Routes>

<Footer />

  
  
 </div>
 </AppContext.Provider>

  
  
  );
}

export default App;
