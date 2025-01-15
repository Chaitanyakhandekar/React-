import React from "react";
import { NavLink,Link } from "react-router-dom";


//! we doesnt use anchor tag because it reloads the page and in react there is no page reload thats why we use Link or NavLink

function Header(){
    return (
        <>
           <nav className="flex justify-around border-2 items-center font-bold p-5">
                <div className="left">
                <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                </div>

                <div className="mid">
                    <ul className='flex   justify-between'>
                        <li>
                            <NavLink
                            to="/" 
                            className={({isActive})=>
                                `text-red ${isActive ? "text-orange-500" : "text-black"}
                                hover:text-orange-400`
                            }>
                                home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/about"
                            className={({isActive})=> `text-red
                                ${isActive ? "text-orange-500" : "text-black"}
                                hover:text-orange-400`}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/contact"
                            className={({isActive})=>`${isActive ? "text-orange-500" : "text-black"}
                            hover:text-orange-400`}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/github"
                            className={({isActive})=>`${isActive ? "text-orange-500" : "text-black"}
                            hover:text-orange-400`}>
                                Github
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="right flex gap-2 items-center ">
                    <Link
                    to="#" 
                    className="p-3">
                        Login
                    </Link>

                    <Link to="#" className="p-3 bg-orange-500 text-white rounded-xl">
                            Get Started
                    </Link>
                </div>
           </nav>
        </>
    )
}

export default Header;