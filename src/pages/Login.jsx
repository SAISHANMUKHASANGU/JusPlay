import React from 'react'
import { useLocation } from 'react-router-dom'

const Login=()=> {
  const location = useLocation();
    
  return (
    <>
        <div>
            <h1>Login</h1>
            <form action="" >
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Login