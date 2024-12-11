import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  const [nextBooking, setNextBooking] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const [availableTurfs, setAvailableTurfs] = useState([]);
  const [filters, setFilters] = useState({ location: '', price: [0, 1000], type: '', date: '', time: '' });
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    // Simulating data fetching
    setNextBooking({
      turfName: 'Seaside Turf',
      date: '2024-12-15',
      time: '5:00 PM',
    });

    setRecentActivity([
      { id: 1, turfName: 'City Sports Arena', status: 'Completed' },
      { id: 2, turfName: 'Greenfield Ground', status: 'Cancelled' },
    ]);

    setAvailableTurfs([
      { id: 1, name: 'Seaside Turf', image: './Images/turf1.jpg', price: 1000, location: 'Beach Road', rating: 4.5 },
      { id: 2, name: 'Urban Playfield', image: './Images/turf2.jpg', price: 800, location: 'MVP Colony', rating: 4.0 },
      { id: 3, name: 'Greenfield Ground', image: './Images/turf3.jpg', price: 600, location: 'Gajuwaka', rating: 4.7 },
      { id: 4, name: 'Stadium Turf', image: './Images/turf4.jpg', price: 600, location: 'Dwaraka Nagar', rating: 4.3 },
      { id: 5, name: 'Hilltop Sports', image: './Images/turf5.jpg', price: 700, location: 'Simhachalam', rating: 4.2 },
      { id: 6, name: 'City Sports Arena', image: './Images/turf6.jpg', price: 800, location: 'Siripuram', rating: 4.6 },
      { id: 7, name: 'Hey Games', image: './Images/turf7.jpg', price: 1000, location: 'Rushikonda', rating: 4.8 },
    ]);

    setPromotions([
      { code: 'WELCOME10', discount: '10% off on first booking' },
      { code: 'FESTIVE20', discount: '20% off during festive season' },
    ]);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleBooking = (turfId) => {
    alert(`Booking turf with ID: ${turfId}`);
  };

  return (
    <DashboardWrapper>
      <TopPanel>
        <h1>Hey User! Welcome Back To JusPlay.</h1>
        {nextBooking && (
          <NextBooking>
            <h2>Next Scheduled Booking</h2>
            <p>{nextBooking.turfName}</p>
            <p>{nextBooking.date} at {nextBooking.time}</p>
          </NextBooking>
        )}
        <RecentActivity>
          <h2>Recent Activity</h2>
          <ul>
            {recentActivity.map((activity) => (
              <li key={activity.id}>
                {activity.turfName} - {activity.status}
              </li>
            ))}
          </ul>
        </RecentActivity>
      </TopPanel>

      <Filters>
        <h2>Filters</h2>
        <label>
          Location:
          <input type="text" name="location" value={filters.location} onChange={handleFilterChange} />
        </label>
        <label>
          Price Range:
          <input type="range" name="price" min="0" max="1000" value={filters.price[1]} onChange={(e) => handleFilterChange({ target: { name: 'price', value: [0, e.target.value] } })} />
        </label>
        <label>
          Turf Type:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Badminton">Badminton</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" name="date" value={filters.date} onChange={handleFilterChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={filters.time} onChange={handleFilterChange} />
        </label>
      </Filters>

      <Turfs>
        <h2>Available Turfs</h2>
        <TurfsGrid>
          {availableTurfs.map((turf) => (
            <TurfCard key={turf.id}>
              <img src={turf.image} alt={turf.name} />
              <h3>{turf.name}</h3>
              <p>Location: {turf.location}</p>
              <p>Price: ₹{turf.price}/hour</p>
              <p>Rating: {turf.rating} ★</p>
              <button onClick={() => handleBooking(turf.id)}>Book Now</button>
            </TurfCard>
          ))}
        </TurfsGrid>
      </Turfs>

      <Promotions>
        <h2>Promotions & Discounts</h2>
        <ul>
          {promotions.map((promo, index) => (
            <li key={index}>
              {promo.code}: {promo.discount}
            </li>
          ))}
        </ul>
      </Promotions>
    </DashboardWrapper>
  );
};

export default Dashboard;

// Styled Components

const DashboardWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TopPanel = styled.header`
  background-color: #107d89;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;

  h1 {
    margin: 0 0 10px;
    font-size: 24px;
  }
`;

const NextBooking = styled.div`
  margin-top: 15px;
`;

const RecentActivity = styled.div`
  margin-top: 15px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background-color: #0fc1e1;
    margin-bottom: 5px;
    padding: 8px;
    border-radius: 4px;
  }
`;

const Filters = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const Turfs = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TurfsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const TurfCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    margin: 10px;
    font-size: 18px;
  }

  p {
    margin: 10px;
    color: #555;
  }

  button {
    display: block;
    width: calc(100% - 20px);
    margin: 10px auto;
    padding: 10px;
    background-color: #0073e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #005bb5;
  }
`;

const Promotions = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f0f8ff;
    border: 1px dashed #0073e6;
    border-radius:4px;
}
`;