import React from 'react'
import classnames from 'classnames'
import './StatusBar.css'
const StatusBar=(props)=>{
    if(!props.status){
        return(
            null
        )
    }
    return(
        <div>
        <div className="containerNavNone">
        <img src="/img/statusBar.png"  className={classnames("statusBarImg",{"animNextQestion_2":props.animNextQestion_2},{"animNextQestion_3":props.animNextQestion_3})}/>
    <ul className="containerNav"  >
        
        <li className="navStatusBar">1</li>
        <li className="navStatusBar">2</li>
        <li className="navStatusBar">3</li>

    </ul>
  
    
        </div>
        

        
           
        </div>
    )
}

export default StatusBar