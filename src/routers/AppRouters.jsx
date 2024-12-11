import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Main from "../pages/main"
import Form from "../pages/form"

import React from 'react'
import MainLayout from "../layout/MainLayout"
import Products from "../pages/Products"
import Login from "../pages/login"

function AppRouters() {
  return (
    <div>
        <Router>
            <MainLayout>
                <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/signup" element={<Form/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Login" element={<Login/>}/>
                </Routes>
            </MainLayout>
        </Router>
    </div>
  )
}

export default AppRouters