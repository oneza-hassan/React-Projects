import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "oneza",
    age: 23
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-blue-300 text-black p-4 rounded-xl mb-4'>Tailwind ID CARDSA</h1>
      <Card username="Oneza" btnText="click me" />
      <Card username="Maira" />
    </>
  )
}

export default App