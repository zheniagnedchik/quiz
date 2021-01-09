import React, { useState } from 'react'
import axios from "axios"

function Reg(){
    const [userName,setUserName]=useState()
    const [userPassword,setPassword]=useState()

    function getUserName(event){
        setUserName({userName:event.target.value})
    }
    function getPassword(event){
        setPassword({userPassword:event.target.value})
    }
    function postUser(){
        const user = {
            username:userName.userName,
            password :userPassword.userPassword
        }
        axios.post(
            `https://portal-employee-service.herokuapp.com/login`,
            user
          );

        console.log(user)
    }

    return(
        <div>
            <form>
                
                    <input type="text" onChange={getUserName} name="username" placeholder="username"/>
                    <input type="text" onChange={getPassword} name="password" placeholder="password"/>
                
            </form>
            <button onClick={postUser}>отправить</button>
        </div>
    )
}

export default Reg