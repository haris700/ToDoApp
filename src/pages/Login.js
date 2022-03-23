import React, { useState } from 'react'
import "./Login.css"

import { Routes, Route, Link, BrowserRouter, useNavigate } from "react-router-dom";
import {auth} from '../firebase';


export default function Login() {
  const navigate = useNavigate()
const[email,setemail]=useState(null)
const[number,setnumber]=useState(null)
const emailset=(e)=>{
  setemail(e.target.value)
}
const numset=(e)=>{
  setnumber(e.target.value)
}

const login=(e)=>{
  e.preventDefault()

 auth.signInWithEmailAndPassword(email,number)
 .then(()=>{
      console.log("signed in")
            navigate("/")        
    }
  )
  .catch(error=>{
    console.log(error)

  })
}
  return (
    <div className='maindiv'> 
  
            <h5 className='h5tag'>Login</h5>
        
        <div className='seconddiv'>
          <form >
            <div style={{display:'flex',flexDirection:'column',}}> 
              <input type='email' placeholder='Enter your email' onChange={emailset} className="emailinput" >

            </input>
            <br></br>
            <input  type="password"  placeholder='Enter your password' onChange={numset} className="emailinput">
            </input>
            </div>
           
            <br></br>
            <div style={{display:'flex',justifyContent:'center',textAlign:'center'}} >
              <button onClick={login}>Login</button>

              
            
       

            </div >
            <div style={{display:'flex',flexDirection:'row '}}> 
            <div>dont have an account please</div>
           
          
             <Link to="/Signup">
               Signup
              </Link>
        </div>
              
        
            

          </form>
        </div>
    </div>
  )
}
