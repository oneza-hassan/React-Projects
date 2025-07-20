import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    
    for (let i = 0; i < length; i++) { 
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  } ,[length, numberAllowed, charAllowed, setPassword] )

  const copyPasswordtoClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-950 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <h3 className='text-green-100 text-center my-5'>~ by Oneza</h3>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 bg-cyan-950"
              placeholder="Password"
              readOnly
              ref={passwordRef}
          />
          <button
          onClick={copyPasswordtoClipBoard}
          className='
          outline-none 
          px-3
          py-0.5
          shrink-0
          bg-blue-700 
          text-white
          transition-all  // Smooth transitions
          duration-200   // Animation speed
          hover:bg-blue-600  // Hover state
          active:bg-blue-800 // Click state
          focus:ring-2      // Keyboard focus
          focus:ring-blue-400
          disabled:opacity-50 // Disabled state
          '
          >copy</button>
      </div>

      <div className='flex text-sm gap-x-3' style={{background: "pink"}}>
        <div className='flex items-center gap-x-1 px-1' style={{background: "yellow"}}>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(Number(e.target.value))}}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1 px-1" style={{background:"purple"}}>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setnumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1 px-1" style={{background:"green"}}>
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
              setCharAllowed((prev) => !prev )
          }}
        />
        <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
