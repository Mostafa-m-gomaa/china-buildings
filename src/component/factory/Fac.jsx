import React from 'react'
import './fac.css'
import { useState ,useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Fac = () => {
  const [t,i18n]=useTranslation()
  const {loader,setLoader}=useContext(AppContext)
  const [data,setData]=useState([])
  const [products,setProducts]=useState([])
  const [selectedDivIndex, setSelectedDivIndex] = useState(null);
  const [name,setName]=useState("our")
  const [factoryId,setFactoryId]=useState(2)
  const {myArray,setMyArray}= useContext(AppContext)
  const [imgIndex ,setImgIndex]=useState(0)
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [facName ,setFacName]=useState("")
  const {lang,setLang}=useContext(AppContext)

  const clickFactoryImage = (num)=>{
      setFactoryId(num)
      setSelectedDiv(num)
  }

  const handleImageClick =(num)=>{
    setImgIndex(num)
    
   
}
const closeModal =()=>{
  setSelectedDivIndex(null)
  setImgIndex(0)
}

  const clickkOur =()=>{
    setName("our")
  }
  const clickPartner =()=>{
    setName("partner")
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

  const handleDivClick = (index) => {
    setSelectedDivIndex(index);
  };

  const imgLoad =()=>{
    setLoader(false)
}




useEffect(()=>{

  // setLoader(true)
fetch("https://api.sdcbm.com/api/showall/factories?lang="+lang)
.then(res=>res.json())
.then(data=> setData(data.data))
fetch("https://api.sdcbm.com/api/showRelated/factories/"+factoryId+"?lang="+lang)
.then(res=>res.json())
.then(data=> setProducts(data.data.products))
fetch("https://api.sdcbm.com/api/show/factories/"+factoryId+"?lang="+lang)
.then(res=>res.json())
.then(data=> setFacName(data.data.name_en))
},[factoryId ,lang])

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
    <div className="factory">
        <div className="container">
        <Modal />
            <div className="list">
          
                <div onClick={clickkOur}>{t('Our-Factories')}</div>
                <div onClick={clickPartner} >{t('Our-Partners')}</div>
            </div>

            <div className="factories">
                {data.map((one)=>{
                  return(
                    one.status===name ?
                      <div  key={one.id}>
                        {/* <div className="name">{one.name_en}</div> */}
                        <img src={ "https://api.sdcbm.com/storage/"+ one.image} alt="" onLoad={imgLoad}  className={selectedDiv === one.id ? 'active' : ''} onClick={()=>clickFactoryImage(one.id)}  />
                      </div>
                      :null

                    
                    // <div key={one.id}>{one.status ===name? one.name_en :null}</div>
                  )
                })}
              </div>

              <div className="main-section">
                <div className="left">
                <h2>{facName}</h2>
                <div className="in-left">

                

                    {products.map((index)=>{
                      
                   return(
                    <div className="product-card" key={index.id}>
                     
                        {index.images.map((nn ,index)=>{
                            return(

                                index == 0 ? <img src={"https://api.sdcbm.com/storage/"+nn.image} alt="" /> :null
                            )
                            
                           
                        })}
                        
                        
                        <div className="name">{index.prod_name}</div>
                        <div className="btns">
                        <button onClick={() =>
                            myArray.includes(index)
                            ? handleRemoveFromCart(index)
                            : handleAddToCart(index)
                        }> {myArray.includes(index) ? 'Remove' : 'Add to inquiry '}</button>
                        <button className='vu' onClick={() => handleDivClick(index)}>VIEW</button>
                        </div>
                           
                
                    </div>
                )

                    })}
                    </div>
                  
                </div>





                <div className="right">
                <h2>{myArray.length} {t('product-added')}</h2>
                        <div className="cartt">
                            {myArray.map((ind)=>{
                                return(
                                    <div className="cardd" key={Math.random()}>
                                                     {ind.images.map((nn ,index)=>{
                                        return(

                                            index == 0 ? <img src={"https://api.sdcbm.com/storage/"+nn.image} alt="" /> :null
                                        )
                                        
                                       
                                    })}
                                    <div className="name">{ind.prod_name}</div>
                                    
                                    <button onClick={ ()=> handleRemoveFromCart(ind)}>delete</button>
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

export default Fac
