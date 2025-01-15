import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TodoForm(){

    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTodo({todoMsg : message}))
        setMessage('')
    }
    
    return(
        <>
            <form onSubmit={handleSubmit} className="my-10 w-full flex justify-center gap-3">

                <input type="text"
                placeholder="Enter a Todo"
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                className="outline-none bg-gray-700 text-white px-5 w-[40%] h-[150%] rounded-md font-bold text-xl"/>

                <button
                type="submit"
                className=" bg-[#7545cd] text-white px-5 py-2 rounded-md h-[150%] font-bold"
                >Add Todo</button>
            </form>
        </>
    )
}

export default TodoForm