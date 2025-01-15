import React, { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

function TodoItem({todo}){

    const [isChecked ,setIsChecked] = useState(todo.isComplete)
    const [isEditable, setIsEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todoMsg)

    const {updateTodo,deleteTodo} = useContext(TodoContext)

    function handleToogle(e){
        let checked = e.currentTarget.checked
        updateTodo(todo.id,{...todo, isComplete : !isChecked})
        setIsChecked(!isChecked)
        
    }

    function handleClick(){
        if(!isChecked){
            setIsEditable(!isEditable)
            console.log(todo.todoMsg)
        }
    }

    function editTodo(e){
        console.log(e.target.value)
        const msg = e.target.value
        setTodoMsg(msg)
        updateTodo(todo.id,{...todo , todoMsg : msg})
    }

    return (
        <div className={`bg-[#ccbed7] flex w-[100%] h-[100%] items-center justify-between rounded-xl p-3 m-3  ${isChecked ? "bg-[#a29fa5]" : ""}`}>

            <div className=" h-full w-[87%] flex items-center gap-5 px-3">
                <input type="checkbox"
                className=""
                checked={isChecked}
                onChange={(e)=>handleToogle(e)}
                 />

                <input type="text" 
                value={ todoMsg }
                readOnly={!isEditable}
                className={ `bg-[#ccbed7] outline-none px-3 w-full text-xl font-bold ${isChecked ? "bg-[#a29fa5] line-through" : ""}  ${ isEditable ? "border-2 border-gray-500 rounded-md" : ""}` }
                onChange={(e)=>editTodo(e)}/>
            </div>

            <div className={` h-full w-[13%] flex ${isChecked ? "justify-end" : ""} gap-3  items-center `}>

                <button className={`text-2xl  p-1 rounded-md ${ isChecked ? "hidden" : "bg-white visible"}`} onClick={handleClick}>{isEditable ? "📁" : "✏️" }</button>

                <button className="text-2xl bg-white p-1 rounded-md"
                onClick={()=>deleteTodo(todo.id)}>❌</button>

            </div>
        </div>
    )
}

export default TodoItem;