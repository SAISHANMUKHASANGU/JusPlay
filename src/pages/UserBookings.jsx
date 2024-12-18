import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

let API_URL="https://jusplayserver-2.onrender.com/users"
let TURFS_URL="https://jusplayserver-2.onrender.com/availableTurfs"

function UserBookings() {
    const BookingDetails = styled.div`
  background-color: #f9f9f9; /* Light background */
  border: 1px solid #ccc; /* Subtle border */
  border-radius: 8px; /* Rounded corners */
  padding: 16px; /* Inner spacing */
  width: 300px; /* Width of the box */
  margin: 16px auto; /* Centering and spacing */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const DetailHeading = styled.h4`
  color: #333; /* Text color */
  font-size: 16px; /* Font size */
  margin: 8px 0; /* Spacing between headings */
  font-weight: normal; /* Normal font weight */
`;

    const location=useLocation()
    const {state}=location;
    console.log(state)
    
    const bookings=state.bookings
    console.log(bookings)

    

  return (
    <>
        <div style={{height:'100vh'}}>
        <h1 style={{textAlign:'center'}}>MY BOOKINGS</h1>
        {bookings.length>0?
        (bookings.map((booking)=>(<BookingDetails>
            <DetailHeading>Turf Name: {booking.name}</DetailHeading>
            <DetailHeading>Booking Date: {booking.date}</DetailHeading>
            <DetailHeading>Turf Location: {booking.location}</DetailHeading>
            <DetailHeading>Shift: {booking.shift}</DetailHeading>
            
          </BookingDetails>))):
        <h3>No Bookings</h3>}
        </div>

    </>
    
  )
}

export default UserBookings