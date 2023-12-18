import React from 'react'
import './tenderf.css'


const Tendrf = () => {
  
  return (
    <div className="tender-f">
        <div className="container">
        <form action="">
            {/* <img src={logo} alt="" /> */}

            <label htmlFor="">
            工厂名称：	
            <input type='text'/>
            </label>
            <label htmlFor="">
            简要公司介绍：		
            <input type='text'/>
            </label>
            <label htmlFor="">
            类别（主营业务）		
            <input type='text'/>
            </label>
            <label htmlFor="">
            主要产品
            <input type='text'/>
            </label>
            <label htmlFor="">
            公司标志：	

            <input type='file'/>
            </label>
            <label htmlFor="">
            实际地址：	


            <input type='text'/>
            </label>
            <label htmlFor="">
            电子邮件地址：	
	

            <input type='text'/>
            </label>
            <label htmlFor="">
            微信ID	
            <input type='text'/>
            </label>
            <label htmlFor="">
            WhatsApp号码：	
	
            <input type='text'/>
            </label>
            <label htmlFor="">
            网站:	
            <input type='text'/>
            </label>
            <label htmlFor="">
            产品目录	
	
            <input type='file'/>
            </label>
            <label htmlFor="">
            价格表	
	
            <input type='file'/>
            </label>

            <h4>订阅计划 </h4>

            <div className="two">
                <div className="first">
<span className='head'>基本计划  </span>
<span>网站上的产品列表 </span>
<span>基于佣金的利润模式    </span>
<span>0元/月 </span>
<label htmlFor="">

<input type="radio" name="choosen" />
</label>
                </div>
                <div className="second">
                <span className='head'>"高级计划</span>
<span>"基本计划的所有功能</span>
<span>"阿里巴巴页面管理 </span>
<span>"专属客户经理</span>
<span>"多语言支持团队</span>
<span>一万元/月</span>
<label htmlFor="">

<input type="radio" name="choosen"  />
</label>

                </div>
            </div>
            <button>confirm</button>
        </form>

        </div>
        
    </div>
  )
}

export default Tendrf
