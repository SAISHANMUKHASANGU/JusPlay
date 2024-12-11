// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import Main from './components/layout/main'
import SignIn from './pages/signin'

function App() {
  

  return (
    <>
    <Header/> 
    <Main />
    <SignIn/>
    <Footer />
    </>
  )
}

export default App
