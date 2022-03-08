
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    


    
    <BrowserRouter><Navbar></Navbar><Routes>

       
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
