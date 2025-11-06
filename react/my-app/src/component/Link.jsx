import React from 'react'
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

function Link1() {
    function Home(){
        return <h1>This is my Home page.</h1>
    }
    function About(){
        return <h1>This is my About page.</h1>
    }
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/Register">Register</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default Link1