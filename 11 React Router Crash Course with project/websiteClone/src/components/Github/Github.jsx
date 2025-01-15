import React from "react";
import {useState,useEffect} from 'react'

function Github(){

    let [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/chaitanyakhandekar')
        .then((resp)=>resp.json())
        .then((data)=>{
            setData(data)
        })
    },[])

    return (
        <>
            <div className="profile h-[40vh] bg-gray-500 p-3 flex flex-col justify- items-center w-[40vw] m-auto rounded-xl my-10">
                <img src={data.avatar_url} alt="" className="rounded-[50%] " width="200"/>

                <div className="info flex gap-5">
                <div className="followers flex flex-col items-center text-xl font-bold text-black-600">
                    <h1>Followers</h1>
                    <h1>{data.followers}</h1>
                </div>
                <div className="followers flex flex-col items-center text-xl font-bold text-black-600">
                    <h1>Following</h1>
                    <h1>{data.following}</h1>
                </div>

                </div>
            </div>
        </>
    )
}
import { Form } from "react-router-dom";

export default Github;