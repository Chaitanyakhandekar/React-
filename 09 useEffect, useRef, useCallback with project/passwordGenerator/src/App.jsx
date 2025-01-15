import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password,setPassword] = useState('')
  const [length,setLength] = useState(8)
  const [numbersAllowed,setNumberState] = useState(false)
  const [charactersAllowed, setCharacterState] = useState(false)



  const generatePassword = useCallback(()=>{
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if(numbersAllowed){
      str += '0123456789'
      console.log(numbersAllowed)
    }
    if(charactersAllowed){
      str += '!@#$%^&*(){}[]|?'
    }

    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length)
      pass += str.charAt(index)
    }
    setPassword(pass)
  },[length,numbersAllowed,charactersAllowed,setPassword])

  useEffect(()=>{
    generatePassword();
  },[length,charactersAllowed,numbersAllowed])

  let passwordRef = useRef(null);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className="screen">
      <div className="container">
        <div className="input-box">
          <input type="text" value={password}  className="text-3xl text-orange-400" ref={passwordRef}/>
          <button onClick={copyToClipboard} className="btn" >Copy</button>
        </div>

        <div className="footer">
          <input type="range" min={6} max={70} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label className="text-2xl text-orange-400">Length ({length})</label>
          <input type="checkbox" className="cb"
          onChange={()=>setNumberState((prev)=>prev = !prev)}/>
          <label className="text-2xl text-orange-400">Numbers</label>
          <input type="checkbox" className="cb" 
          onChange={()=>setCharacterState((prev)=>prev = !prev)}/>
          <label className="text-2xl text-orange-400">Characters</label>

        </div>
      </div>
      </div>
    </>
  )
}

export default App
