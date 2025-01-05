import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

let API_URL = "https://jusplayserver-2.onrender.com/users";
let TURFS_URL = "https://jusplayserver-2.onrender.com/availableTurfs";

function UserBookings() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [bookings, setBookings] = useState([]);

  // Handle star click for rating
  const handleStarClick = (value) => {
    setRating(value);
  };

  // Handle feedback change
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Handle feedback form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating > 0 && feedback) {
      setSubmitted(true);
    } else {
      alert("Please provide a rating and feedback.");
    }
  };

  // Styled components
  const BookingDetails = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    width: 300px;
    margin: 16px auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;

  const DetailHeading = styled.h4`
    color: #333;
    font-size: 16px;
    margin: 8px 0;
    font-weight: normal;
  `;

  const Div = styled.div`
    min-height: 100vh;
    background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
    background-size: cover;
    background-repeat: no-repeat;
  `;

  // Fetch user and bookings from location state
  const location = useLocation();
  const { state } = location;
  const [user, setUser] = useState(state);

  useEffect(() => {
    if (state?.bookings) {
      setBookings(state.bookings);
    }
  }, [state]);

  // Cancel booking logic
  const Cancel = async (booking) => {
    console.log('Canceling booking:', booking);

    try {
      // Fetch user data
      const userResponse = await axios.get(API_URL);
      const userData = userResponse.data;
      const selectedUser = userData.find((user) => user.email === state.email);

      // Filter out the canceled booking
      const updatedBookings = selectedUser.bookings.filter(
        (book) => book.date !== booking.date || book.name !== booking.name || book.shift !== booking.shift || book.type !== booking.type
      );

      selectedUser.bookings = updatedBookings;

      // Update user data with the removed booking
      await axios.put(`${API_URL}/${selectedUser.id}`, selectedUser);

      // Fetch turf data and remove the canceled booking
      const turfResponse = await axios.get(TURFS_URL);
      const turfData = turfResponse.data;
      const selectedTurf = turfData.find((turf) => turf.id === booking.turfid);

      selectedTurf.bookings = selectedTurf.bookings.filter(
        (book) => book.date !== booking.date || book.name !== booking.name || book.shift !== booking.shift || book.type !== booking.type
      );

      // Update turf data
      await axios.put(`${TURFS_URL}/${selectedTurf.id}`, selectedTurf);

      // Update the bookings in state
      setBookings(updatedBookings);
    } catch (error) {
      console.error("Error during cancellation:", error);
    }
  };

  return (
    <Div>
      <h1 style={{ textAlign: 'center', color: 'white' }}>MY BOOKINGS</h1>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <BookingDetails key={booking.date + booking.shift}>
            <DetailHeading>Turf Name: {booking.name}</DetailHeading>
            <DetailHeading>Booking Date: {booking.date}</DetailHeading>
            <DetailHeading>Turf Location: {booking.location}</DetailHeading>
            <DetailHeading>Shift: {booking.shift}</DetailHeading>
            <button onClick={() => Cancel(booking)}>Cancel</button>
          </BookingDetails>
        ))
      ) : (
        <BookingDetails>
          <h3 style={{ textAlign: 'center' }}>No Bookings</h3>
        </BookingDetails>
      )}
    </Div>
  );
}

export default UserBookings;
