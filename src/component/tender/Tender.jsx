import React, { useEffect, useState} from 'react'
import one from "../../assets/Screenshot 2023-04-12 031147.png"
import two from "../../assets/Screenshot 2023-04-12 031046.png"
import three from "../../assets/Screenshot 2023-04-12 031109.png"
import four from "../../assets/Screenshot 2023-04-12 031128.png"
import './tender.css'
import { AiOutlineCaretDown} from "react-icons/ai";
import { useContext } from 'react'
import { AppContext } from '../../App'
import { Link } from 'react-router-dom'
import { questions } from '../categories'

const Tender = () => {
    const {loader,setLoader}=useContext(AppContext)
    const [showAnswers, setShowAnswers] = useState([]);
    const imgLoad =()=>{
        setLoader(false)
    }

    const toggleAnswer = (index) => {
        // Create a copy of the showAnswers array
        const newShowAnswers = [...showAnswers];
        // Toggle the value of the selected answer
        newShowAnswers[index] = !newShowAnswers[index];
        // Update the state with the new array
        setShowAnswers(newShowAnswers);
      };
      useEffect(()=>{
        setLoader(false)
      },[])
  return (
   <div className="tender">
    <div className="container">
        <div className="intro-box">
            <div className="box">
                <img src={one} alt=""  onLoad={imgLoad}/>
                <p>"在 SDCBM 上获得超过 10 万的月访问量。 
SDCBM 每月有超过 10 万人次的访问量，他们对建筑和建材感兴趣。在 SDCBM 上展示您的产品，将让您的产品吸引大量寻找类似产品的潜在客户。"								
</p>
            </div>
            <div className="box">
                <img src={two} alt="" />
                <p>"提供专业的多语种客户咨询支持。
SDCBM 提供专业的多语种客户咨询支持。这意味着，无论客户使用何种语言，无论他们身处何地，当他们对您的产品有疑问时，都能得到所需的帮助。"								
</p>
            </div>
            <div className="box">
                <img src={three} alt="" />
                <p>"提高产品销售的机会。
通过在 SDCBM 上展示您的产品，您将提高产品销售的机会。这是因为您将接触到更多有兴趣购买您产品的潜在客户。此外，SDCBM 还提供各种营销和广告服务，帮助您推广产品并提高销售额。"								
</p>
            </div>
            <div className="box">
                <img src={four} alt="" />
                <p>"接触建筑和建材行业的目标受众。
SDCBM 的访问者都对建筑和建材感兴趣。这意味着您的产品将被真正有购买意愿的人看到，而不仅仅是随意浏览互联网的人。"								
</p>
            </div>
        </div>

        <Link to="/tender-form">加入我们，完全免费	</Link>

        <div className="req">
            
                <h1>合作伙伴要求           </h1>

                <div className="cont">
                    <span className="ques">1- 有效的公司许可证</span>
                    <span className="ans">工厂必须提供有效的许可证以确保信誉和合法合规。					</span>
                </div>
                <div className="cont">
                    <span className="ques">2- 具有竞争力的价格</span>
                    <span className="ans">为您的产品提供市场上最低的价格，以保持竞争力。</span>
                </div>
                <div className="cont">
                    <span className="ques">3- 其他平台无更低价格</span>
                    <span className="ans">确保您的产品在其他平台上没有更低的价格，以避免冲突并保持一致的定价策略。</span>
                </div>
                <div className="cont">
                    <span className="ques">4- 高质量的产品照片</span>
                    <span className="ans">提供清晰、高分辨率的产品图片，以帮助潜在客户做出明智的决策。</span>
                </div>
                <div className="cont">
                    <span className="ques">5- 无背景的高质量Logo</span>
                    <span className="ans">"提交一个具有透明背景的专业、高分辨率的Logo，以保持网站外观的一致性和精致度。</span>
                </div>
                <div className="cont">
                    <span className="ques">6- 无Logo的高质量产品目录（首选源文件）</span>
                    <span className="ans">提供一个精心设计、内容全面的无Logo产品目录。首选源文件以便于编辑和与网站主题的集成。</span>
                </div>
                <div className="cont">
                    <span className="ques">7- 指定负责客户咨询的联系人</span>
                    <span className="ans">从您的工厂中指派一个熟悉业务且反应迅速的人员来处理客户问题并提供支持。</span>
                </div>
            
        </div>
        <Link to="/tender-form">加入我们，完全免费	</Link>
        <div className="faq">
            
                <h2>加入我们，完全免费</h2>

                <h3>合作伙伴要求 </h3>

                
                {questions.map((item, index) => (
        <div className="cont" key={index}>
          <span className='ques' >{item.ques} <span onClick={() => toggleAnswer(index)} ><AiOutlineCaretDown/></span></span>
          {showAnswers[index] && <span>{item.answer}</span>}
        </div>
      ))}
            
        </div>

        


    </div>
   </div>
  )
}

export default Tender
{/* <div className="cont">
                    <span onClick={quesClick} className="ques"></span>
                    <span className="ans">。</span>
                </div>
                <div className="cont">
                    <span className="ques"></span>
                    <span className="ans"></span>
                </div>
                <div className="cont">
                    <span className="ques"></span>
                    <span className="ans"></span>
                </div>
                <div className="cont">
                    <span className="ques"></span>
                    <span className="ans"></span>
                </div>
                <div className="cont">
                    <span className="ques"></span>
                    <span className="ans">。</span>
                </div> */}