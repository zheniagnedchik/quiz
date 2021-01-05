import React, { useState } from 'react'


function Reg(){
    const [userName,setUserName]=useState()
    const [userPassword,setPassword]=useState()

    function getUserName(event){
        setUserName({userName:event.target.value})
    }
    function getPassword(event){
        setPassword({userPassword:event.target.value})
    }

    return(
        <div>
            <form>
                
                    <input type="text" onChange={getUserName} name="username" placeholder="username"/>
                    <input type="text" onChange={getPassword} name="password" placeholder="password"/>
                    <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default Reg