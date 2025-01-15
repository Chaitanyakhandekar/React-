import React from "react";
import { useParams } from "react-router-dom";    //! Hook

function User(){

    let {userId} = useParams()
    return (
        <>
            <h1 className="bg-gray-500 text-white p-5 text-center font-bold text-xl">User : {userId}</h1>
        </>
    )
}

export default User;