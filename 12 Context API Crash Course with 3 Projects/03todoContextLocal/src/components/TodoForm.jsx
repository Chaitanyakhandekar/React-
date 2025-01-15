import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

function TodoForm(){

    const {addTodo,todos} = useContext(TodoContext)
    const [todoMsg,setTodoMsg] = useState("")

    function handleClick(e){
        e.preventDefault()

        if(todoMsg){
            addTodo({id : Date.now() , todoMsg})
            setTodoMsg("")
        }
        }

    return(
        <div className="w-[50vw] h-[7vh] flex items-center">
            <input type="text"
            placeholder="What Todo..."
            className="h-full w-[90%] px-3 bg-gray-500 bg-white/20 text-white font-bold rounded-tl-xl rounded-bl-xl outline-none text-xl"
            value={todoMsg}
            onChange={(e)=>setTodoMsg(e.target.value)}
            />

            <button className="text-white bg-green-400 w-[10%] h-full py-5 rounded-tr-xl rounded-br-xl font-bold"
            onClick={(e)=>handleClick(e)}>
                Add
            </button>
        </div>
    )
}

export default TodoForm;