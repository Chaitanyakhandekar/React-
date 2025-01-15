import React from "react";
import { useState,useContext } from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)  //! here we used useContext hook and using it we are setting value of setUser which is a method inside the userContextProvider component 

    function handleClick(e){
        e.preventDefault()
        setUser({username , password})      //! here we treat user as object set the values of username and password 
    }

    return(
        <>
            <input type="text"
             placeholder="username"
             value={username}
             onChange={(e)=>setUsername(e.target.value)}/>

            <input type="text"
             placeholder="password" 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={(e)=>handleClick(e)}>Submit</button>
        </>
    )
}

export default Login;