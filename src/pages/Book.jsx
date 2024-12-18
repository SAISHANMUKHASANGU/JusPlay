import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';

let TURFS_URL="https://jusplayserver-2.onrender.com/availableTurfs";
let API_URL="https://jusplayserver-2.onrender.com/users"

function Book() {
    const location=useLocation();
    const {state}=location;
    const turf=state.turf.turf
    const user=state.user.User
    console.log(turf.bookings)
    console.log(user)

    const [filters,setFilters]=useState({
      id:turf.bookings.length+1,
      turfid:turf.id,
      name:turf.name,
      price:turf.price,
      location:turf.location,
      type:turf.type,
      shift:"Morning",
      date:"",
      user:user.email,
      

    })
    

    const handleSubmit=async (event)=>{
      event.preventDefault()
      let response=await axios.get(TURFS_URL)
      let data=response.data
      let selected=data.find((turfs)=>turfs.id===turf.id)
      let bookings=selected.bookings
      
      let status=bookings.some((book)=>book.type=turf.type && book.shift===filters.shift && book.date===filters.date)
      if(status){
        console.log("Already booked")
        return
      }
      else{
          // console.log(filters)
          selected.bookings.push(filters)
      }
      
      await axios.put(`${TURFS_URL}/${turf.id}`,selected)
      let userresponse=await axios.get(API_URL)
      let users=userresponse.data
      let selecteduser=users.find((user)=>user.email===filters.user)
      
      selecteduser.bookings.push(filters)
      await axios.put(`${API_URL}/${selecteduser.id}`,selecteduser)

      
    }
    

    const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px; /* Spacing between elements */
  max-width: 400px;
  margin: 0 auto; /* Center form */
  padding: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  &:read-only {
    background-color: #e9e9e9;
  }
`;

const SelectField = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
const Div=styled.div`
height:100vh;
display:'flex';
flex-direction:column;
align-items:center;
justify-content:center
`
    
    
  return (
    <Div>
      <h1>Booking Form</h1>
    <FormContainer onSubmit={handleSubmit}>
      <InputField type="text" value={turf.name} readOnly />
      <InputField type="number" value={turf.price} readOnly />
      <InputField type="text" value={turf.location} readOnly />
      <InputField type="text" value={turf.type} readOnly />
      <InputField
        type="date"
        value={filters.date}
        onChange={(e) =>
          setFilters((prevdata) => ({ ...prevdata, date: e.target.value }))
        }
        min={new Date().toISOString().split('T')[0]}
        max={new Date(new Date().setDate(new Date().getDate() + 3))
          .toISOString()
          .split('T')[0]}
      />
      <SelectField
        name="shift"
        value={filters.shift}
        onChange={(e) =>
          setFilters((prevdata) => ({ ...prevdata, shift: e.target.value }))
        }
      >
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </SelectField>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
    </Div>
  )
}

export default Book