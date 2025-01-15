import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

function App() {
 

  return (
    <div className="border-2 border-red-500 w-[100vw] h-[100vh] flex flex-col items-center bg-gray-500">
      <TodoForm/>
      <Todos/>
    </div>
  )
}

export default App
