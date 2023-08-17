import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import { useContext } from "react";
import { Context } from "./Context/context";
import Profile from './Components/Settings/Profile';
import UploadPage from './Components/UploadPage';
import VisulaizePage from './Components/VisulaizePage';
import Predict from './Components/Predict';
import ScrollToTop from "./ScrollToTop";
const App = () => {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
      <Navbar/>
      <ScrollToTop>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={user ? <Home /> : <Login />} />
        <Route path="/register" exact element={user ? <Home /> : <Register />} />
        <Route path="/prediction" exact element={user ? <Predict /> : <Login />} />
        <Route path="/profile" exact element={user ? <Profile/> : <Login />} />
        <Route path="/uploadExcel" exact element={user ? <UploadPage/> : <Login />} />
        <Route path="/visualizeExcel" exact element={user ? <VisulaizePage/> : <Login />} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App

