import { useState } from 'react'
import Header from './component/Header/Header.jsx'
import Footer from './component/Footer/Footer.jsx'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/> 
    </>
  )
}

export default App
