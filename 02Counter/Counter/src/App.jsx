import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count=0;
  let [counter, setCounter]=useState(0);
  //const [counter, setCounter]=useState(0); for const: setCounter(counter+1) works, counter+=1 it doesn't work


  function AddValue(){
    if(counter>=20){
      alert("you can't increment now")
      return;
    }
    counter+=1;
    console.log("Add clicked", counter);
    setCounter(counter);

  }
  function RemoveValue(){
        if(counter<=0){
      alert("you can't decrement now")
      return;
    }
    counter-=1;
    console.log("Remvoe clicked", counter);
    setCounter(counter);
  }



  return <>
  <h1> Welcome To Counter Project</h1>
  <h2>Counter Value : {counter}</h2>
  <button onClick={AddValue}>Add Value {counter}</button>
  <br></br>
  <br></br>
  <button onClick={RemoveValue}>Remove Value {counter}</button>
  <footer>Footer: {counter}</footer>
  </>
}

export default App
