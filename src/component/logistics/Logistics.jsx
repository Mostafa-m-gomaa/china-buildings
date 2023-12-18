
import './logistics.css'
import logo from "../../assets/logo.jpg"
import React, { useEffect, useRef, useState} from 'react';
import { useContext } from 'react'
import { AppContext } from '../../App'
import { useTranslation } from 'react-i18next';
import { arabDestination ,rusDestination ,englishDestination} from '../categories';

const Logistics = () => {
    const [t,i18n]=useTranslation()


    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

    const {loader,setLoader}=useContext(AppContext)




    const imgLoad =()=>{
        setLoader(false)
    }


    const [portIn ,setPortIn]=useState("")
    const [destination ,setDestination]=useState("")
    const [portCity ,setPort]=useState("")
    const [commodit,setCommodity]=useState("")
    const [weight,setWeight]=useState("")
    const [volume ,setVolume]=useState("")
    const [message ,setMessage]=useState("")
    const [name ,setName]=useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail]=useState("")
    const [destData,setDestData]=useState([])
    const {lang,setLang}=useContext(AppContext)

    const handlePortIn =(event)=>{
        setPortIn(event.target.value)
        
    }
    const handleDest =(event)=>{
        setDestination(event.target.value)
    }
    const handlePortCity =(event)=>{
        setPort(event.target.value)
    }
    const handleCommodity =(event)=>{
        setCommodity(event.target.value)
    }
    const handleWeight =(event)=>{
        setWeight(event.target.value)
    }
    const handleVolume =(event)=>{
        setVolume(event.target.value)
    }
    const handleMessage =(event)=>{
        setMessage(event.target.value)
    }
    const handleName =(event)=>{
        setName(event.target.value)
    }
    const handleEmail =(event)=>{
        setEmail(event.target.value)
    }
    const handleNumber =(event)=>{
        setNumber(event.target.value)
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = { name, email, message ,portCity,portIn,message,weight,volume };
    //     fetch('https://sales@sdcbm.com/contact', {
    //       method: 'POST',
    //       body: JSON.stringify(formData),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    //   };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailSubject = encodeURIComponent(`New message from ${name}`);
        const emailBody = encodeURIComponent(`Name: ${name}\n Email: ${email}\nMessage: ${message} \n Whatsapp: ${number} \n Port in china :${portIn} \n Destination country:${destination} \n Port City :${portCity} \n name of commodity : ${commodit} \n Total Weight :${weight} \n Total volume CBM : ${volume} `);
        window.location.href = `mailto:sales@sdcbm.com?subject=${emailSubject}&body=${emailBody}`;
      };



      useEffect(()=>{
        setLoader(false)
if(lang=="en"){
    setDestData(englishDestination)
}
else if(lang=="ch"){
    setDestData(arabDestination)
}
else(
    setDestData(rusDestination)
)
        // if(JSON.stringify(lang)=="ru"){
        //     setDestData(rusDestination)
        // }
     
  
      },[lang])
      

  
    

  return (
    <div className="logistics">
        <div className="container">

   

        <div className="form-box">
          
            <form  onSubmit={handleSubmit}>
                <div className="port">

               <label >
               {t('Port-China')}
                <select name="" id="" onChange={handlePortIn}>
                    <option value="">choose port</option>
                    <option value="Port of Shanghai - 上海港">Port of Shanghai - 上海港</option>
                    <option value="Port of Shenzhen - 深圳港">Port of Shenzhen - 深圳港</option>
                    <option value="Port of Ningbo-Zhoushan - 宁波舟山港">Port of Ningbo-Zhoushan - 宁波舟山港</option>
                    <option value="Port of Guangzhou - 广州港">Port of Guangzhou - 广州港</option>
                    <option value="Port of Qingdao - 青岛港">Port of Qingdao - 青岛港</option>
                    <option value="Port of Shanghai - 上海港">Port of Tianjin - 天津港</option>
                    <option value="Port of Dalian - 大连港">Port of Dalian - 大连港</option>
                    <option value="Port of Xiamen - 厦门港">Port of Xiamen - 厦门港</option>
                    <option value="Port of Lianyungang - 连云港">Port of Lianyungang - 连云港</option>
                    <option value="Port of Yantian - 盐田港">Port of Yantian - 盐田港</option>
                  
                </select>
               </label>
                </div>
                <div className="dest">

               <label >
               {t('Destination-Country')}               
                <select name="" id="" onChange={handleDest}>
                    <option value="">choose country</option>

                    {destData.map((country ,index)=>{
                        return <option value={country} key={index}>{country}</option>
                    })}
                </select>
               </label>
               <label >
               {t('Port-City')}
                <input type="text" value={portCity} onChange={handlePortCity}/>
               </label>
                </div>
                <div className="commo">

               <label >
               {t('Name-Commodity')}
                <input type="text" value={commodit} onChange={handleCommodity} />
               </label>
               <label >
               {t('Total-Weight')}
                <input type="text" value={weight} onChange={handleWeight}/>
               </label>
               <label >
               {t('Total-CBM')}
                <input type="text" value={volume} onChange={handleVolume} />
               </label>
                </div>
                <div className="msg">

               <label >
               {t('Leave-Message')}
                <textarea type="tel" value={message} onChange={handleMessage} />
                
               </label>
                </div>
                <div className="contact">

               <label >
               {t('Your-Name')}
                <input type="message" value={name} onChange={handleName} />

               </label>
               <label >
               {t('Whatsapp')}
                <input type="message" value={number} onChange={handleNumber} />

               </label>
               <label >
               {t('email')}
                <input type="message" value={email} onChange={handleEmail} />

               </label>

               <button type='submit'>{t('confirm')}</button>
                </div>

            </form>
        </div>

        </div>
    </div>
  )
}

export default Logistics
