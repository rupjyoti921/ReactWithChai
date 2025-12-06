import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName]= useState("");
    const [password, setPassword]= useState("");

    const {setUser}= useContext(UserContext);

    const handleSumit = (e) =>{
        e.preventDefault();
        setUser({userName,password});
    }

  return (
    <>
    <h2>LogIn</h2>
    <form onSubmit={handleSumit}>
        <input 
            type="text" 
            placeholder="User Name" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
        />
        <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
    </form>
  </>
  )
}

export default Login