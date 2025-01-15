import React from "react";
import { Link } from "react-router-dom";

function Contact(){
    return (
        <>
            <div className="contact h-[50vh] flex items-center justify-center gap-3">

                <div className="left border- m-3 w-1/5 h-[70%] flex flex-col justify-around items-between bg-gray-100 rounded-xl px-3">
                    <div className="top">
                    <h1 className="text-3xl text-gray-700 font-bold text-center py-2">Get in touch:</h1>
                    <p className="text-center text-lg font-bold text-gray-500">Fill in the form to start a conversation</p>

                    </div>
                    <div className="bottom w-full h-2/5 flex flex-col justify-between items-start px-3 font-bold text-gray-500">
                    <div className="r1 flex items-center gap-3">
                    <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                Acme Inc, Street, State, Postal Code
                    </div>

                    <div className="r2 flex items-center gap-3">
                    <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                +44 1234567890
                    </div>

                    <div className="r3 flex items-center gap-3">
                    <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                info@acme.org
                    </div>
                    </div>
                </div>

                <div className="right  w-1/5 flex flex-col h-[70%] justify-around">
                    <input type="text" placeholder="Full Name" className="border-2 h-[20%] rounded-lg p-3"/>
                    <input type="email" placeholder="Email" className="border-2 h-[20%] rounded-lg p-3"/>
                    <input type="text" placeholder="Telephone Number" className="border-2 h-[20%] rounded-lg p-3"/>

                    <Link
                    to="#"
                    className="bg-orange-600 text-white text-md w-[35%] text-center p-3 rounded-lg font-bold"
                    >
                        Submit
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Contact;