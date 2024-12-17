import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Main from "../pages/main"
import Form from "../pages/form"

import React, { useEffect, useState } from 'react'
import MainLayout from "../layout/MainLayout"
import Products from "../pages/Products"

import SignIn from "../pages/login"
import Dashboard from "../pages/DashBoard"
import User from "../pages/user"
import Userlayout from "../layout/Userlayout"

function AppRouters() {
  
  return (
    <>
        
          
          <Router>
          <MainLayout>
          <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/signup" element={<Form/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Login" element={<SignIn/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/user" element={<User/>}/>
          </Routes>
      </MainLayout>
      </Router>
          
          
            
          
            
            
        
        </>
            
        
    
  )
}

export default AppRouters