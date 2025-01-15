import React from "react";
import { Link } from "react-router-dom";
import dbServices from "../appwrite/dbServices";

function Postcard({$id , featuredImage , title}){

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full p-4 bg-gray-100 rounded-xl">
            <div className="w-full mb-4">
                <img
                 src={dbServices.getFilePreview(featuredImage)} 
                 alt={title}
                 className="rounded-xl" />

            </div>

            <h2 className="font-bold text-xl">
                {title}
            </h2>
        </div>
        </Link>
    )
}

export default Postcard;