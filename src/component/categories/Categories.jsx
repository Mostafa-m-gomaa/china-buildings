import React, { useEffect, useState } from 'react'
import { categorissData } from '../categories'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../App'
import './cat.css'
import { useTranslation } from 'react-i18next';

const Categories = () => {
    const [categoryData,setCategoryData]=useState([])
    const {loader,setLoader}=useContext(AppContext)
    const {lang,setLang}=useContext(AppContext)
    const [t,i18n]=useTranslation()
    

    const imgLoad =()=>{
        setLoader(false)
    }
    useEffect(()=>{
        fetch("https://api.sdcbm.com/api/showall/categ?lang="+lang)
        .then(resp=>resp.json())
        .then(data=>setCategoryData(data))
        

    },[lang])
    
  return (
 <div className="cate">
    <div className="container">
        <h1> {t('Categories')}</h1>

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

export default Categories
