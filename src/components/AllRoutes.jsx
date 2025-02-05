import React from "react";
import { Route, Routes } from "react-router";
import {HomePage, LoginPage, RegisterPage, CurrentUser, CreateNotes} from "../pages/index"


function Navbar() {
  return (
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/register" element={<RegisterPage />}/>
    <Route path="/user" element={<CurrentUser />}/>
    <Route path="/addnotes" element={ <CreateNotes />} />
    
  </Routes>
  )
}

export default Navbar;