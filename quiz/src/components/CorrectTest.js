import React from 'react'

import './CorrectTest.css'
const CorrectTest=(props)=>{
   if(!props.correctTest){
       return null
   }
    return(
        <div >
            <div className="closeTestContainer">
                <div className="testr">
                <div className="closeContainer">
                    <img src="/img/correct.png" className="imgCorrect"/>
                    <div className="correctTest">Вы успешно прошли задание!</div>
                    <div>
                        
                    </div>
                </div>
                </div>
              
            </div>
        </div>
    )
}

export default CorrectTest