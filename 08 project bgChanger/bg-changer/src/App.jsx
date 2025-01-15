import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black')

  
  return (
    <>
      <div className="screen" style={{backgroundColor:color}}>
      <div className="panel">
        <button onClick={()=>setColor('red')} className="bg-red">Red</button>
        <button onClick={()=>setColor('green')} className="bg-green">Green</button>
        <button onClick={()=>setColor('blue')} className="bg-blue">Blue</button>
        <button onClick={()=>setColor('olive')} className="bg-olive">Olive</button>
        <button onClick={()=>setColor('gray')} className="bg-gray">Gray</button>
        <button onClick={()=>setColor('yellow')} className="bg-yellow">Yellow</button>
        <button onClick={()=>setColor('pink')} className="bg-pink">Pink</button>
        <button onClick={()=>setColor('purple')} className="bg-purple">Purple</button>
        <button onClick={()=>setColor('lavender')} className="bg-lavender">Lavender</button>
        <button onClick={()=>setColor('white')} className="bg-white">White</button>
        <button onClick={()=>setColor('black')} className="bg-black">Black</button>
      </div>
      </div>
    </>
  )
}

export default App
