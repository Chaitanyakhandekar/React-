import React from 'react'
import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import ThemeContextProvider from './context/ThemeContextProvider'
function App() {

  return (
    <ThemeContextProvider>
      <div className=" flex flex-col items-center w-[50%] mx-[30%] my-[3%]  h-[80vh]">
      <div className="flex items-center gap-3 content-left">
      <ThemeButton/> <p className="font-bold py-3 text-xl">Toogle Theme</p>
      </div>
      <Card/>
    </div>
    </ThemeContextProvider>
  )
}

export default App;