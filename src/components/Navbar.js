import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{color:'white',display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 15px',backgroundColor:'#127eb8'}}>
        <h2 >
      TodoApp
        </h2>
        <div style={{fontWeight:'bold',textDecoration:'none',color:'white'}}> <Link to="/" style={{padding:"100px"}}>Home</Link>
     <Link to="/login" >Login</Link>
</div>
       
        
       
    </div>
  )
}
