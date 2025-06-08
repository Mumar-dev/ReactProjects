import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import './App.css'
import Navebar from './Components/Navebar';

function App() {

  const [isLoggedin, setisLoggedin] = useState(false)
  

  return (
   
      <div className="justify-evenly">

        <Navebar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin} />  


          <Routes>

            <Route path= "/"  element={<Home/>}/>
            <Route path= "/Login"  element={<Login isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}/>}/>
            <Route path= "/Signup"  element={<Signup isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}/>}/>
            <Route path= "/Dashboard"  element={<Dashboard/>}/>
            <Route path= "*"  element={<div><h1>Page Not Found</h1></div>}/>



          </Routes>

      </div>
    
  )
}

export default App
