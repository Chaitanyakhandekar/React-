import { useState } from 'react'


function App() {
  const [color,setColor] = useState('red')
  return (
    <div className={`screen w-[100vw] h-[100vh] border relative bg-${color}-400`}>
      <div className="panel p-3 bg-white w-[40%] rounded-md absolute bottom-[5%] left-[30%] flex justify-around">
        <button className="px-5 py-2 bg-red-400 text-white font-bold rounded-2xl" 
        onClick={()=>{setColor('red')}}
        >Red</button>
        <button className="px-5 py-2 bg-green-400 text-white font-bold rounded-2xl" 
        onClick={()=>{setColor('green')}}
        >Green</button>
        <button className="px-5 py-2 bg-purple-400 text-white font-bold rounded-2xl" 
        onClick={()=>{setColor('purple')}}
        >Purple</button>
        <button className="px-5 py-2 bg-pink-400 text-white font-bold rounded-2xl" 
        onClick={()=>{setColor('pink')}}
        >Pink</button>
        <button className="px-5 py-2 bg-blue-400 text-white font-bold rounded-2xl" 
        onClick={()=>{setColor('blue')}}
        >Blue</button>
        <button className="px-5 py-2 bg-orange-400 text-white font-bold rounded-2xl" 
        onClick={()=>{setColor('orange')}}
        >Orange</button>
      </div>
    </div>
  )
}

export default App
