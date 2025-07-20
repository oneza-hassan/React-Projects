import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(0)

  //let counter=15;
  const addValue=()=>{
    if (counter<5){;
      // Correct: Uses functional updates to ensure latest state

      setCounter((prev) => prev + 1);
      setCounter((prev) => prev + 1);
      setCounter((prev) => prev + 1);
      setCounter((prev) => prev + 1);
      setCounter((prev) => prev + 1);
    
      console.log(counter);
    }
    else{
      console.log("Reached counter -> 5")
    }
  }

  const removeValue=()=>{
    if (counter>0){
      setCounter(counter-1);
      console.log(counter)
    }
    else{
      console.log("counter can not go to -ives")
    }
  }

  return (
    <>
      <h1> Chair or React </h1>
      <h2>counter values: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <footer>footer {counter}</footer>
    
    </>
  )
}

export default App
