import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
   const {user} = useContext(UserContext)

   if(!user) return <div className="p-3 text-xl font-bold text-center py-10">Please Login !</div>

   else return (
    <div className="m-5 text-center font-bold text-xl">
        <h1 className="py-4">Username = {user.username}</h1>
        <h1>Password = {user.password}</h1>
    </div>
   )
}

export default Profile;