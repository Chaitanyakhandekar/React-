import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)

    if(user){       //! if user is not null or is present
        return(
            <>
                <h1>Username: {user.username}</h1>
                <h1>password: {user.password}</h1>
            </>
        )
    }
  
    return (        //! if user is empty
        <h1> hello</h1>
    )
   
}

export default Profile;