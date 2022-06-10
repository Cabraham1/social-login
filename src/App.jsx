import React from 'react'
import Navbar from "./componets/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Post from "./pages/Post.jsx"
import "./app.css"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const App = () => {
  const User = true;
  return (
    <BrowserRouter>
    <div>
      <Navbar User = {User}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" 
        element={User ? <Navigate to="/" /> : <Login/>} />
        <Route path="/post/:id" 
        element={User ? <Post/> : <Navigate to="/Login"/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App