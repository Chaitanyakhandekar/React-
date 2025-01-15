import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoContextProvider from "./contexts/TodoContextProvider";
import React, { useContext } from "react";
import TodoContext from "./contexts/TodoContext";
import './App.css'

function App() {
  
  return (
    <TodoContextProvider>
      <div className="w-[100vw] h-[100vh] bg-[#172842] flex flex-col items-center">
        <h1 className="text-white font-bold text-3xl text-center py-10">
          Manage Your Todos
        </h1>
        <TodoForm />
        <div className="h-[90vh] w-[50vw] flex flex-col items-center overflow-auto py-5">
        <TodoList/>
        </div>
      </div>
    </TodoContextProvider>
  );
}

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="w-full h-[9%] m-3  flex items-center justify-center">
          <TodoItem todo={todo} />
        </div>
      ))}
    </>
  );
}

export default App;
