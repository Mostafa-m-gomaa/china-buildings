import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';
import  {  createContext } from 'react';
import './view.css'
import  { useRef } from 'react';
import { AppContext } from '../../App';
import { useTranslation } from 'react-i18next';



const ViewCategory = () => {
    const [t,i18n]=useTranslation()
const {myArray,setMyArray}= useContext(AppContext)
const {loader,setLoader}=useContext(AppContext)
const imgLoad =()=>{
    setLoader(false)
}

  
      const handleAddToCart = (newItem) => {
        // const newItem = 'New item';
        setMyArray(prevArray => [...prevArray, newItem]);
        localStorage.setItem('myArray', JSON.stringify([...myArray, newItem]));
      };

      const handleRemoveFromCart = (value) => {
        setMyArray(myArray.filter((item) => item !== value));
        // console.log(value)
      };






    // start the parameters
    const divRef = useRef(null);
    const history = useNavigate(); 
    const [selectedDiv, setSelectedDiv] = useState(null);
    const param = useParams()
    const [categoryData,setCategoryData]=useState([])
    const [cartArray,setCartArray]=useState([])
    const [subCategoryData,setSubCategoryData]=useState([])
    const [subSubCategoryData,setSubSubCategoryData]=useState([])
    const [prouctsData,setProductsData]=useState([])
    const [catID,setCatId]=useState(param.categoryId)
    const [selectedDivIndex, setSelectedDivIndex] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [onload, setOnload] = useState(false);
    const [imgArray, setImgArray] = useState([]);
    const [imgIndex ,setImgIndex]=useState(0)
    const {lang,setLang}=useContext(AppContext)

   
    // const [id,setId]=useState(param.categoryId)

    // end the parameters



    // start the functions 
    const handleDivClick = (index) => {
        setSelectedDivIndex(index);
      };


    const fetchCategories =()=>{
        fetch("https://api.sdcbm.com/api/showall/categ?lang="+lang)
        .then(resp=>resp.json())
        .then(data =>setCategoryData(data))
        
    }
    const handleImageClick =(num)=>{
        setImgIndex(num)
       
    }

    const fetchRelatedCategories =()=>{
        fetch("https://api.sdcbm.com/api/getrelated/categ/"+param.categoryId)
        .then(resp=>resp.json())
        .then(data =>{
            setSubCategoryData(data.subcategories)
            setSubSubCategoryData(data.subsubcategories)
            setProductsData(data.$products)
        })
        
    }

    const getProductRelatedSubCategory =(id)=>{
        setSelectedSubCategory(id);
        fetch("https://api.sdcbm.com/api/getrelatedSubSub/products/"+id)
        .then(resp=>resp.json())
        .then(data =>{
           setProductsData(data)
        })
        fetch("https://api.sdcbm.com/api/getrelatedSub/products/"+id)
        .then(resp=>resp.json())
        .then(data =>{
           setSubSubCategoryData(data.subsubcategories)
        })
    }
    const getProductRelatedSubSubCategory =(id)=>{
        setSelectedDiv(id);
        fetch("https://api.sdcbm.com/api/getrelatedSubSub/products/"+id)
        .then(resp=>resp.json())
        .then(data =>{
           setProductsData(data)
        })
    }

    const clickOnAllButton =(id)=>{
        setSelectedSubCategory(id);
        setSelectedDiv(id);
        fetch("https://api.sdcbm.com/api/getrelated/categ/"+id)
        .then(resp=>resp.json())
        .then(data =>{
           setProductsData(data.$products)
        })
        fetch("https://api.sdcbm.com/api/getrelated/categ/"+param.categoryId)
        .then(resp=>resp.json())
        .then(data =>{
           
            setSubSubCategoryData(data.subsubcategories)
          
        })
        
        
    }
    const closeModal =()=>{
        setSelectedDivIndex(null)
        setImgIndex(0)
    }






    const handleReload = (id) => {
        setSelectedCategory(id)
        history("/viewCategory/"+id)        
        // window.location.reload(); 
        setOnload(true)
        fetch("https://api.sdcbm.com/api/getrelated/categ/"+id+"?lang="+lang)
        .then(resp=>resp.json())
        .then(data =>{
           setProductsData(data.$products)
           setSubCategoryData(data.subcategories)
           setSubSubCategoryData(data.subsubcategories)
           setCatId(id)
           setOnload(false)
        })


      
      };



    useEffect(()=>{
        // setId(param.categoryId)
        fetchCategories();
        fetchRelatedCategories();
        setCatId(param.categoryId)
        // setLoader(true)

        
       
    },[lang]);

    function Modal() {
        if (!selectedDivIndex) {
          return null;
        }
    
        return (
          <div className="modal">
           
            <div className="left">

          <div className="main-img">


            {selectedDivIndex.images.map((nn ,index)=>{
            return(
             index == imgIndex ? <img src={"https://api.sdcbm.com/storage/"+nn.image} alt=""  /> :null
            )})}

            </div>

            <div className="imgs">
            {selectedDivIndex.images.map((nn ,index)=>{
            return(
             index <=3? <img src={"https://api.sdcbm.com/storage/"+nn.image } alt="" onClick={()=>handleImageClick(index)} /> :null
            )})}
            </div>
            </div>
            <div className="right">
            <div onClick={closeModal} className="close">x</div>

            <h2>{selectedDivIndex.prod_name}</h2>
            <div className="disc">{selectedDivIndex.Desc}</div>

            <div className="clrs">
                <span>available coulors</span>
                <div className="clr">

                {selectedDivIndex.colors.map((one)=>{
                    return(
                        <span>{one.color}</span>
                    )
                })}
                </div>
            </div>
            <div className="units">
                <span>available units</span>
                <div className="clr">

                {selectedDivIndex.units.map((one)=>{
                    return(
                        <span>{one.unit}</span>
                    )
                })}
                </div>
            </div>
            <button onClick={() =>
             myArray.includes(selectedDivIndex)
            ? handleRemoveFromCart(selectedDivIndex)
            : handleAddToCart(selectedDivIndex)
             }> {myArray.includes(selectedDivIndex) ? 'Remove' : 'Add to inquiry '}</button>
            </div>
          </div>
        );
      }

   
    
  return (


   <div className="view">
  {onload ? <div class="lds-hourglass"></div> :null}

    <div className="container">
        <Modal />
        <div className="first-section">
            {categoryData.map((ind)=>{
                return(
                    <div  className="one category-icon" key={ind.id} onClick={()=>handleReload(ind.id)}  >
                        <img src={"https://api.sdcbm.com/storage/"+ind.Category_image} alt="" onLoad={imgLoad} />
                        <span>{ind.Category_name}</span>
                    </div>
                )
            })}
        </div>
            
            <div className="main-section">
                <div className="left">
                <h1>{categoryData.map((namee)=>{
                    return(
                        namee.id == catID ? namee.Category_name : null 
                    )
                })}</h1>
                <hr />

                <div className="sub-cat">
                    <span className='all' onClick={()=> clickOnAllButton(catID)}>ALL</span>
                {subCategoryData.map((ind)=>{
            return(
                
                  
                    <span key={ind.id} className={selectedSubCategory === ind.id ? 'active' : ''} onClick={()=>getProductRelatedSubCategory(ind.id)}>{ind.SubCateg_name}</span>
                    
                   
            )
        })}
                </div>


                <div className="product-subsub">
                    <div className="subsub">
                        <h3>filter</h3>
                        <div className="subsubs">
                            {subSubCategoryData.map((inde)=>{
                                return(
                                    // className="subsub-cont"
                                    <div  ref={divRef}  className={selectedDiv === inde.id ? 'active subsub-cont' : 'subsub-cont'} key={inde.id}>
                                        
                                        <span  onClick={()=>getProductRelatedSubSubCategory(inde.id)}>{inde.SubSubCateg_name}</span>
                                        
                                    </div>
                                    
                                    
                                )
                            })}
                        </div>

                    </div>
                    <div className="products">
                          

                        {prouctsData.map((index)=>{
                            return(
                                <div className="product-card" key={index.id}>

                                    {index.images.map((nn ,index)=>{
                                        return(

                                            index == 0 ? <img src={"https://api.sdcbm.com/storage/"+nn.image} alt=""  /> :null
                                        )
                                        
                                       
                                    })}
                                    
                                    
                                    <div className="name">{index.prod_name}</div>
                                    <div className="btns">
                                    <button onClick={() =>
                                        myArray.includes(index)
                                        ? handleRemoveFromCart(index)
                                        : handleAddToCart(index)
                                    }> {myArray.includes(index) ? t('remove') : t('inquiry')}</button>
                                    <button className='vu' onClick={() => handleDivClick(index)}>{t('view')}</button>
                                    </div>
                                       
                            
                                </div>
                            )
                        })}

                    </div>
                </div>
                </div>
                <div className="right">

                        <h2>{myArray.length} {t('product-added')}</h2>
                        <div className="cart">
                            {myArray.map((ind)=>{
                                return(
                                    <div className="card" key={Math.random()}>
                                                     {ind.images.map((nn ,index)=>{
                                        return(

                                            index == 0 ? <img src={"https://api.sdcbm.com/storage/"+nn.image} alt="" /> :null
                                        )
                                        
                                       
                                    })}
                                    <div className="name">{ind.prod_name}</div>
                                    
                                    <button onClick={ ()=> handleRemoveFromCart(ind)}>{t('remove')}</button>
                                </div>
                                )
                            })}
                        <Link to="/quotion">{t('Ask-Quotion')}</Link>
                        </div>


                </div>
            </div>

          
    
    </div>
   </div>
 
  )
}

export default ViewCategory
