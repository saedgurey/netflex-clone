import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import List from "./pages/List"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Browse from './pages/Browse';
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/list" element={<List />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/browse" element={<Browse />} />

  </Routes>
  
  </BrowserRouter>
  )
}

export default App