import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Prediction from './Components/Prediction';
import { useContext } from "react";
import { Context } from "./Context/context";
import Profile from './Components/Settings/Profile';
import UploadPage from './Components/UploadPage';
const App = () => {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={user ? <Home /> : <Login />} />
        <Route path="/register" exact element={user ? <Home /> : <Register />} />
        <Route path="/prediction" exact element={user ? <Prediction /> : <Login />} />
        <Route path="/profile" exact element={user ? <Profile/> : <Login />} />
        <Route path="/uploadExcel" exact element={user ? <UploadPage/> : <Login />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

