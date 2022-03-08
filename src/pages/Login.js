import React, { useState } from 'react'
import "./Login.css"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";



export default function Login() {
const[email,setemail]=useState(null)
const[number,setnumber]=useState(null)
const emailset=(e)=>{
  setemail(e.target.value)
}
const numset=(e)=>{
  setnumber(e.target.value)
}
  return (
    <div className='maindiv'> 
  
            <h5 className='h5tag'>Login</h5>
        
        <div className='seconddiv'>
          <form >
            <input type='email' placeholder='Enter your email' onChange={emailset} className="emailinput" >

            </input>
            <br></br>
            <input  type="password"  placeholder='Enter your password' onChange={numset} className="emailinput">
            </input>
            <br></br>
            <div style={{display:'flex',justifyContent:'center',textAlign:'center'}} >
              <button>Login</button>
              &nbsp; &nbsp;
             <Link to="/Signup">
              <button>Signup</button>
              </Link>
            </div>
         <br></br>
        
            

          </form>
        </div>
    </div>
  )
}
