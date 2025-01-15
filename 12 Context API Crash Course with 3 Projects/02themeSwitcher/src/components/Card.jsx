import React from "react";
import Star from "./Star";


function Card(){

    return(
        <div className="border-2 border-gray-200 p-6 rounded-xl m-3 h-[90%] flex flex-col justify-between dark:bg-gray-800 dark:text-white">
            <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
             alt="Image"
             className="w-[100%]" /> 

             <h1 className="text-2xl font-bold text-left">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h1>

             <div className="rating flex items-center gap-2">
                <Star color="gold" border="gold"/>
                <Star color="gold" border="gold"/>
                <Star color="gold" border="gold"/>
                <Star color="gold" border="gold"/>
                <Star/>
                <p className="font-bold bg-blue-200 px-2 py-1 rounded-md dark:text-black">4.0</p>
             </div>
            
            <div className="footer flex justify-between p-2">
                <h1 className="font-bold text-3xl">$599</h1>
                <button className="bg-blue-700 text-white px-5 py-3 rounded-xl font-bold">Add to cart</button>
            </div>

        </div>
    )
}

export default Card;