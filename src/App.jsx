import React from 'react'
import Navbar from "./componets/Navbar.jsx"
import Home from "./pages/Home.jsx"
import "./app.css"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
    </div>
  )
}

export default App