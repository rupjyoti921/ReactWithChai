import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // useState: Manages the password length state (default: 8)
  const [passLen, updatePassLen] = useState(8)
  
  // useState: Manages whether to include numbers in password (default: false)
  const [number, addNumber] = useState(false)
  
  // useState: Manages whether to include symbols in password (default: false)
  const [symbol, addSymbol] = useState(false)
  
  // useState: Stores the generated password string (default: empty string)
  const [password, setPassword] = useState('')

  // useCallback: Memoizes the password generator function to prevent unnecessary re-creation
  // Dependencies: passLen, number, symbol, setPassword - function recreates when these change
  const passwordGenerator = useCallback(() => {
    let pass="";
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(number)str += '0123456789';
    if(symbol)str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    for(let i=0; i<=passLen; i++ ){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [passLen, number, symbol, setPassword])

  // useRef: Creates a reference to the password input element for selection
  const passRef = useRef(null);

  const copyToClipboard = () => {
  passRef.current?.select();
  navigator.clipboard.writeText(password);
  }

  // useEffect: Automatically generates a new password whenever passLen, number, or symbol changes
  // Dependencies: passLen, number, symbol - runs when any of these values update
  useEffect(()=>{
    passwordGenerator();
  },[passLen, number, symbol]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center text-2xl mb-4'>Password Generator</h1>
        
        {/* Input and Copy Button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            ref={passRef}
            readOnly
          />
          <button 
            onClick={copyToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className='flex text-sm gap-x-2 mb-4'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={16}
              value={passLen}
              className='cursor-pointer'
              onChange={(e) => updatePassLen(e.target.value)}
            />
            <label>Length: {passLen}</label>
          </div>
        </div>

        {/* Checkboxes */}
        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={number}
              id="numberInput"
              onChange={() => addNumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={symbol}
              id="symbolInput"
              onChange={() => addSymbol((prev) => !prev)}
            />
            <label htmlFor="symbolInput">Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
