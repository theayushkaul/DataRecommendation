import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Prediction from './Components/Prediction';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/Prediction" exact element={<Prediction />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

