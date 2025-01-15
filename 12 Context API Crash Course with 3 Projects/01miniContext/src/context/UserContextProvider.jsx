import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){       //! it provides UserContext 

    const [user,setUser] = useState(null)

    return(
        <UserContext.Provider value={{user,setUser}}>
            <h1>Context API with Chai</h1>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;