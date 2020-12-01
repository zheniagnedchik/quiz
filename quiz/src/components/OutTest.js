import React from 'react'

const OutTest=(props)=>{
    
    return(
     
            <input 
        type="button" 
        value="Завершить задание"  
         
        onClick={props.close}
        className="out"
        
        
        />
     
    )
}

export default OutTest