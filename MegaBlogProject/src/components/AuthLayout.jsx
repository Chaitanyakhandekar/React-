import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({children}){
    const authStatus = useSelector((state)=>state.status)
    const navigate = useNavigate()
    const [loader ,setLoader] = useState(true)

    useEffect(()=>{
        if(authStatus){
            navigate('/')
        }
        else{
            navigate('/login')
        }
        setLoader(false)
    },[navigate,authStatus])

    return loader ? <h1>Loading...</h1> : {children}

}

export default Protected;