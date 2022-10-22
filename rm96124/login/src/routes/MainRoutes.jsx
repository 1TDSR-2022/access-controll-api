import React from "react";
import {Route, Routes} from "react-router-dom"
import Login from "../components/Login";
export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/produto" element={<Produto/>}/>
    </Routes>
  )
}
