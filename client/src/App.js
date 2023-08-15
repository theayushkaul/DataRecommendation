import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
<Routes>

<Route path="/" exact element={<Home/>}/>
</Routes>

    </BrowserRouter>
  )
}

export default App

