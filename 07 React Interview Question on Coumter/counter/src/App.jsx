import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  function addCount(){

    //!  if we replicate it many times still it will hanges only one time
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    //! for changing it many times we use its callback function
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)

  }
  return (
    <>
      <button onClick={addCount}>Add count {count}</button> 
    </>
  )
  
}

export default App
