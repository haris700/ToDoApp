import React, { useState } from 'react'
import "./Signuop.css" 
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const navigate=useNavigate()
    const[name,setname]=useState(null)
    const[emai,setemail]=useState(null)
    const[password,setpassword]=useState(null)
    const[conformp,setconformp]=useState(null)
    const nameset=(e)=>{
        setname(e.target.value)
    }
    const emailset=(e)=>{
        setemail(e.target.value)
    }
const passwordset=(e)=>{
setpassword(e.target.value)
}
const conformpset=(e)=>{
    setconformp(e.target.value)
}
const signup=(e)=>{
    e.preventDefault()

  auth.createUserWithEmailAndPassword(emai,password)
  .then(()=>{
navigate("/")
  }

  )
  .catch((error)=>{
      console.error(error)
  }

  )
}

  return (
    <div className='firstdiv'>

        <h5 className='text'> create your account</h5>
<div className='seconddiv'><form>
            <input placeholder='Enter your name' onChange={nameset} className='columninput'></input>
            <br></br>
            <input type="email" placeholder="Enter your email adress" onChange={emailset} className='columninput'></input>
            <br></br>
            <input type="password" placeholder='Create your password ' onChange={passwordset} className='columninput'></input>
            <br></br>
            <input type="password" placeholder='Conform your password'  onChange={conformpset} className='columninput'></input>
            <br></br>
            <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}><button onClick={signup}>Submit </button></div>
            
        </form></div>
        
    </div>
  )
}
