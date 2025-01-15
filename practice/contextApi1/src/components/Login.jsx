import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login(){
    const {setUser} = useContext(UserContext)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    function handleClick(e){
        e.preventDefault()
        setUser({username,password})
    }

    return(
        <div className="flex flex-col">
            <input type="text"
             className="p-3 border-2 border-purple-300 m-3 rounded-xl"
             placeholder="username"
             value={username}
             onChange={(e)=>setUsername(e.target.value)} />

             <input type="text"
              className="p-3 border-2 border-purple-300 m-3 rounded-xl"
             placeholder="password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)} />

             <button
             className="p-3 bg-green-400 text-white font-bold rounded-xl px-5"
             onClick={handleClick}>
                Submit
            </button>
        </div>
    )
}

export default Login;