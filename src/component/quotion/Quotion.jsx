import React, { useEffect } from 'react'
import './quot.css'
import { useContext } from 'react'; 
import { AppContext } from '../../App';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Quotion = () => {
  const history =useNavigate()
  const [t,i18n]=useTranslation()
const {myArray,setMyArray}=useContext(AppContext)
const{loader,setLoader}=useContext(AppContext)
const [name,setName]=useState("")
const [number,setNumber]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")
const {onload ,setOnload}= useContext(AppContext)

const handleName =(e)=>{
setName(e.target.value)
}
const handleNumber =(e)=>{
setNumber(e.target.value)
}
const handleEmail =(e)=>{
setEmail(e.target.value)
}
const handleMessage =(e)=>{
setMessage(e.target.value)
}


const imgLoad =()=>{
  setLoader(false)
}


const handleRemoveFromCart = (value) => {
  setMyArray(myArray.filter((item) => item !== value));
  // console.log(value)
};

const handleQuantityChange = (productId, quantity) => {
  setMyArray(prevProducts => prevProducts.map(product => {
    if (product.id === productId) {
      return { ...product, quantity };
    }
    return product;
  }));
};
const handleCommentChange = (productId, comment) => {
  setMyArray(prevProducts => prevProducts.map(product => {
    if (product.id === productId) {
      return { ...product, comment };
    }
    return product;
  }));
};

const handleUnitChange = (productId, unit) => {
  setMyArray(prevProducts => prevProducts.map(product => {
    if (product.id === productId) {
      return { ...product, unit };
    }
    return product;
  }));
};

const handleColorChange = (productId, color) => {
  setMyArray(prevProducts => prevProducts.map(product => {
    if (product.id === productId) {
      return { ...product, color };
    }
    return product;
  }));
};

const data = {
  name: name,
  email: email,
  phone: number,
  message: message,
  items:myArray
};


const handleSubmit = async (event) => {
  setOnload(true)
  event.preventDefault();

  fetch('https://api.sdcbm.com/api/submitOrder', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {

  if(data.status=="Submitted successfully"){
   setOnload(false)
  }
  else{
   setOnload(false)
  }


})
.catch(error => console.error(error));



};







  return (
  <div className="quot">
    <div className="container">

<h1>MY CART</h1>
<div className="two-section">
    <div className="left">
        {myArray.map((ind)=>{
          return(
              <div key={ind.id} className="one">
                          {ind.images.map((nn ,index)=>{
                            return(

                                index == 0 ? <img key={nn.id} src={"https://api.sdcbm.com/storage/"+nn.image} alt="" onLoad={imgLoad} /> :null
                            )
                            
                           
                        })}

                        <div className="name">{ind.prod_name}</div>
                        <div className="quantity">
                          <input type="text" placeholder='Total Quantity' value={ind.quantity} 
                          onChange={e => handleQuantityChange(ind.id, e.target.value)} required />
                          <select value={ind.unit} onChange={e => handleUnitChange(ind.id, e.target.value)} required>
                            <option value="">{t('unit')}</option>
                                
                          {ind.units.map((nn ,index)=>{
                            return(

                                <option value={nn.unit} key={nn.id} >{nn.unit}</option>
                            )
                            
                           
                        })}
     
                        </select>
                        </div>

                        <select  value={ind.color} onChange={e => handleColorChange(ind.id, e.target.value)} required >
                                <option value="">{t('color')}</option>
                                {ind.colors.map((nn ,index)=>{
                                  return(
      
                                      <option key={nn.id} value={nn.color} >{nn.color}</option>
                                  )
                                  
                                 
                              })}
           
                              </select>

                              <input className='comment' type="text" placeholder='Add Comment on This product if Yoy Want' value={ind.comment} 
                          onChange={e => handleCommentChange(ind.id, e.target.value)} />

                        <div className="remove" onClick={ ()=> handleRemoveFromCart(ind)} >x</div>
              </div>
          )
        })}
    </div>
    <div className="right">
      <h3>{t('Complete')}</h3>
        <form action="" onSubmit={handleSubmit} >
          <label htmlFor="">
          {t('Your-Name')}
            <input value={name} onChange={handleName} type="text" required />
          </label>
          <label htmlFor="">
          {t('Whatsapp')}
            <input value={number} onChange={handleNumber} type="number" required />
          </label>
          <label htmlFor="">
          {t('email')}
            <input value={email} onChange={handleEmail} type="text" required />
          </label>
          <label htmlFor="">
          {t('message')}
            <input value={message} onChange={handleMessage} type="text" />
          </label>

          <button type='submit' >{t('submit')}</button>
        </form>
    </div>
</div>
    </div>
  </div>
  )
}

export default Quotion
