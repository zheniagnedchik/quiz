import React from 'react'
import './TitleTimer.css'


  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
    if(props.timeLeft===0){
      return null
    }
  
    return (
      <div>
        <div>
        
        <div className="timerContainetr">
          <div className="eclipseContainer">
          <div className="elipse_1"></div>
          <div className="elipse_2"></div>
          <div className="elipse_3"></div>
          <div className="elipse_4"></div>
          <div className="elipse_5"></div>
          <div className="elipse_6"></div>
          <div className="elipse_7"></div>
          <div className="elipse_8"></div>
          <div className="elipse_9"></div>
          </div>
         
          
        
        </div>
        
        <div className="timeContainer"><div className="timetTitle">{props.timeLeft}</div></div>
        </div>

      </div>
        
        
        
    );
  }
  export default WarningBanner