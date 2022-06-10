import React from 'react'
import Navbar from "./componets/Navbar.jsx"
// import Home from "./pages/Home.jsx"
// import Post from "./pages/Post.jsx"
import "./app.css"
import Login from "./pages/Login"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Login />
    </div>
  )
}

export default App