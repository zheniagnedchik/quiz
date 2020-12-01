import React from 'react'
import './BattonNextQuestion.css'
const BattonNextQuestion=(props)=>{
    if(!props.buttonNextQuestion){
        return null
    }
    return(
     
            <input 
        type="button" 
        value="Следующий вопроc"  
        disabled={props.nextChek ? false:true} 
        onClick={props.nextQuestion}
        className="nextQuestion"
        buttonNextQuestion={props.buttonNextQuestion}
        
        />
     
    )
}

export default BattonNextQuestion