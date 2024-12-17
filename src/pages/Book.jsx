import React from 'react'
import { useLocation } from 'react-router-dom'

function Book() {
    const location=useLocation();
    const {state}=location;
    console.log(state.turf)
    console.log(state.user)
  return (
    <div>Book</div>
  )
}

export default Book