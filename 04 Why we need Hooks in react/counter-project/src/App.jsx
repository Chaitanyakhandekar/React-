import { useState } from 'react'
function App() {
  
  // let count = 13
  let [count,setCount] = useState(16) //* we give default value as 16 you can give any value

  function addCount(){
    if(count<20){
      setCount(count+1)  //* we pass the value which we want to change in variable and also on UI
    }
  }
  function removeCount(){
    if(count>0){
    setCount(count-1)   //* we pass the value which we want to change in variable and also on UI
    }
  }
  return (
    <>
        <h1>Chai aur React</h1><br/>
        <button onClick = {addCount}>Add count : {count}</button><br/>
        <button onClick = {removeCount}>Remove count : {count}</button>
        <p>Footer: {count}</p>
    </>
  )
}

export default App
