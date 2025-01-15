import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {
            id : 1,
            todoMsg : "hello world"
        }
    ]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {

        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                todoMsg : action.payload.todoMsg
            }
            state.todos.push(todo)
        },

        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload.id)
        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer