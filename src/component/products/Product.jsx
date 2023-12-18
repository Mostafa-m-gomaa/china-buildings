import { Link } from 'react-router-dom'
import './product.css'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { useTranslation } from 'react-i18next';

const Product = () => {
    const [t,i18n]=useTranslation()
    const {lang,setLang}=useContext(AppContext)
    const [categoryData,setCategoryData]=useState([])
    const {loader,setLoader}=useContext(AppContext)
    const imgLoad =()=>{
        setLoader(false)
    }


    useEffect(()=>{
        fetch("https://api.sdcbm.com/api/showall/categ?lang="+lang)
        .then(resp=>resp.json())
        .then(data=>setCategoryData(data))

        

    },[lang])
  return (
 <div className="products">
    <div className="container">
<div className="heading">
    <h1>{t('All-Categories')}</h1>
    <span>{categoryData.length} {t('Category-Available')}</span>
</div>

    <div className="cards">

{categoryData.map((index)=>{
 return(
     
     <div className="cat-card" key={index.id}>
         <img src={"https://api.sdcbm.com/storage/"+index.Category_image} alt="" onLoad={imgLoad} />
         <div>{index.Category_name}</div>
         <Link to={"/viewCategory/"+index.id}>{t('view-categ')}</Link>
     </div>
 )
})}
</div>
    </div>
 </div>
  )
}

export default Product
