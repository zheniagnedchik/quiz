
import React from 'react';
import classnames from 'classnames'
import   './Answer.css'



const Answer = (props)=>{
    
    let answer = Object.keys(props.answer).map((qAnswer,i)=>(
        <li className="answerTitle" >
       <button 
       disabled={props.checked ? false:true}
       className = 
       {
           props.correctAnswer === qAnswer ? 
           'correct ': 
           props.clickAnswer === qAnswer ?
            'incorrect hoy' : 
            props.answerFalse ===qAnswer ?
            'correctFalse': ''
            
       }
      
    
       key={qAnswer}
       onClick={props.handleStartTimer}
       >
           
           <label className="label custom-radio" >
           
           <input type="radio"
           
           onClick={()=>props.chekAnswer(qAnswer) }
            disabled={props.checked ? false:true}
            checked={props.checkb }
            className={
                props.correctAnswer === qAnswer ? 
           'correctInput ': 
           props.clickAnswer === qAnswer ?
            'incorrectInput ' : ""
            }
            
            />
            <span></span>
           <div className="answerTitleLi radio__text">{props.answer[qAnswer]}</div>
           </label>
           
       </button> 
       </li>
      
       
    ))
    
   
   
    return(
        
        <ul className={classnames("answerContain",{"answerTittleReverce":props.reverse})}>
            {answer}
        </ul>
        
        
        
    )
}
export default Answer