import React from "react";
import { useSelector } from "react-redux";
import { useId } from "react";
import {useNavigate} from 'react-router-dom'
import LogoutBtn from "./LogoutBtn";


function Header(){

    const authStatus = useSelector((state)=> state.status)
    // const navigate = useNavigate()

    const navItems = [
        {
            name : 'Home',
            slug : '/home',
            active : 'true'
        },

        {
            name : 'Login',
            slug : '/login',
            active : !authStatus
        },
        {
            name : 'Signup',
            slug : '/signup',
            active : !authStatus
        },
        {
            name : 'All Posts',
            slug : '/all-posts',
            active : authStatus
        },
        {
            name : 'Add Post',
            slug : '/add-posts',
            active : authStatus
        }
    ]

    return(
        <nav className="border-2 h-[7vh]">
            <ul className=" h-full w-full flex justify-around items-center font-bold cursor-pointer">
                {
                    navItems.map((item)=>(
                        <li
                        key={useId()}
                        >
                            {item.name}
                        </li>
                    ))
                }

                {
                    authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )
                }

            </ul>
        </nav>
    )
}

export default Header;