import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import authService from '../../appwrite/authService'

function LogoutBtn(){
    const dispatch = useDispatch()

    function logoutHandler(){           //! Logout Handler Function
        authService.logout().then(()=>{
            dispatch(logout())
    })
    }

    return (
        <button
        className=""
        onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn;