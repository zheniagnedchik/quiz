import React from 'react'
import './CloseTest.css'
const CloseTest=(props)=>{
    if(!props.close){
        return null
    }
    return(
        <div >
            <div className="closeTestContainer">
                <div className="testr">
                <div className="closeContainer closeContainerAnimation">
                    <div className="closeText">Вы уверены, что хотите прервать прохождение задания?</div>
                    <div>
                        <input type="button" value="Продолжить задание" className="next" onClick={props.ProcessedTest}/>

                        <input type="button" value="Прервать задание" className="close"/>
                    </div>
                </div>
                </div>
              
            </div>
        </div>
    )
}

export default CloseTest