import React from 'react'
import classnames from 'classnames'
import './StatusBarCorrect.css'
const StatusBarCorrect=(props)=>{
   if(!props.statusBarCorrect){
       return null
   }
    return(
        <div>
<div className="statusBarCoorect">
        <div className="containerCorrectBack"></div>
        <div className="containerCorrect">
         <div><div><img src="/img/statusBar.png " className="statusBarImgCorrect"/></div><div className="statusBarLi">1</div></div>   
         <div><div><img src="/img/statusBar.png " className="statusBarImgCorrect"/></div><div className="statusBarLi">2</div></div> 
         <div><div><img src="/img/statusBar.png " className="statusBarImgCorrect"/></div><div className="statusBarLi">3</div></div> 
        </div>
        
       

    </div>
        
           
        </div>
    )
}

export default StatusBarCorrect