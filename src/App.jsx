import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
   const addvalue=()=>{
    setCount(count+1)
   }
   const subvalue=()=>{
    setCount(count-1)
   }
   if(count <0){
    setCount(count=0)
   }
   if(count >100){
    setCount(count=0)
   }
  return (
    <>
        <h1>counter app</h1>
        <h2>count is {count}</h2>
        <button onClick={addvalue}>add</button>
        <br />
        <button onClick={subvalue}>sub</button>
        <p>the counter is {count}</p>
    </>
  )
}

export default App
 