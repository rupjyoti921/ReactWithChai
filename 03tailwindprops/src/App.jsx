import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rupImage from './assets/rup.jpeg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const nameList=["Rohan","Sohan","Mohan"];
  return (
  <>
    <h1 className="text-3xl font-bold mb-4 bg-yellow-300 p-4 rounded-lg">
    Hello world!
    </h1>
    {nameList.map((name)=>(
      <Card userName={name} btnText={"Read me"} />
    ))}
  </>
  )
}

export default App
