import React from 'react'
import './BattonNextQuestion.css'
const BackToQuestoion=(props)=>{
   if(!props.buttonOut){
       return null
   }
    return(
     
            <input 
        type="button" 
        value="Вернуться к вопросу"  
        disabled={props.buttonOut ? false:true} 
        onClick={props.Back}
        className="nextQuestion"
        buttonNextQuestion={props.buttonNextQuestion}
        
        />
     
    )
}

export default BackToQuestoion