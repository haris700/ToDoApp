import React, { useEffect, useLayoutEffect, useState 
} from 'react'
import {Link, useNavigate, } from "react-router-dom";
import {auth} from '../firebase'
import './Navbar.css'
export default function Navbar() {
  const navigate=useNavigate()
  const signout=()=>{
   
    auth.signOut().then(()=>{
    window.location.href = '/';

    })
   
  }
  
const [authUser,setAuthUser] = useState(null);
  const [authWasListened,setAuthWasListened] = useState(false);
  useEffect(()=>{
    auth.onAuthStateChanged((
      (user) => {

       
        if(user) {
          setAuthUser(user);
          setAuthWasListened(true);
        } else {
          setAuthUser(null);
          setAuthWasListened(false);
        }

      }
    ))

   

  },[authUser,authWasListened])
  return (
    <div className='navhead' >
        <h2 className='navtitle'>
      TodoApp
        </h2>
        <div className='navitems'>
         <Link  to="/" style={{padding:"100px",textDecoration:'none',color:'white'}}>Home</Link>
     
          
            {authWasListened?
            
            
<>    <div className="dropdown">
  <button className="dropbtn">Profile</button>
  <div  className="dropdown-content">
    <ul style={{color:'black',listStyle:'none'}}> 
      <li >
   {authUser.email}
     </li>
     <li onClick={signout}>
       Logout
     </li>
   
   
   
    </ul>
  </div>
</div>  </>          
       
   
            : <Link  to="/login" style={{textDecoration:'none', fontWeight:'bold',color:'white'}}>Login</Link>}
    
</div>
       
        
       
    </div>
  )
}
