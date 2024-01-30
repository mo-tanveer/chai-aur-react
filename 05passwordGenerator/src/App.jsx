import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {  //1
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null) //5

  const passwordGenerator = useCallback(() => { //2
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-+_{}[]~`"
 
    for (let i = 1; i <= length; i++) {  //3
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{   //*********6 */
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
;    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(()=>{  //4
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (  //structure & design using tailwind css

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">

      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg ovwerflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}  //************5 */
        />
        <button
        onClick={copyPasswordToClipboard} //***************6 */
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
