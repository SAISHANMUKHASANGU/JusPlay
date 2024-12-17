import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate, NavLink, UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import turf1 from "./images/turf1.jpg"

let API_URL="https://jusplayserver-2.onrender.com/users"
let TURFS_URL="https://jusplayserver-2.onrender.com/availableTurfs"

let User;
let useremail;
let username;


const Dashboard =() => {
  const [Username,setUsername]=useState(null)
  const [nextBooking, setNextBooking] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const [availableTurfs, setAvailableTurfs] = useState([]);
  const [filters, setFilters] = useState({ location: '',  type: ''});
  const [promotions, setPromotions] = useState([]);
  const [filteredturfs,setFilteredTurfs]=useState([]);
  const [registerturf,setRegisterTurf]=useState(false)
  // useEffect(()=>getdata(),[])
  useEffect(() => {
    getdata()
    // Simulating data fetching
    setNextBooking({
      turfName: 'Seaside Turf',
      date: '2024-12-15',
      time: '5:00 PM',
    });


    // useLocation()
  

    setRecentActivity([
      { id: 1, turfName: 'City Sports Arena', status: 'Completed' },
      { id: 2, turfName: 'Greenfield Ground', status: 'Cancelled' },
    ]);

    

    setPromotions([
      { code: 'WELCOME10', discount: '10% off on first booking' },
      { code: 'FESTIVE20', discount: '20% off during festive season' },
    ]);

    apifetch()
  }, []);


  const location=useLocation();
    const {state}=location;
    useremail=state.email
    console.log("email")
    console.log(useremail)
    

  const apifetch=async ()=>
  {
    try {
      const response = await axios.get(API_URL);
      const users = response.data;
      console.log(users)

      const user = users.find(
        (user) => user.email ===useremail 
      );
      

      console.log(user)
      User=user
      username=user.name
      setUsername(user.name)
      console.log(Username)
      console.log(username)
      console.log(User)


      

      
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }




  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleBooking = (turfId) => {
    alert(`Booking turf with ID: ${turfId}`);
  };

  const getdata=async ()=>{
    // let data=JSON.parse(localStorage.getItem('logins'))
    // console.log(data)
    // const response = await axios.get(
    //   `${API_URL}`
    // );

    // console.log(response.data)
    // console.log(data.email)
    

    // const present=response.data.find((user)=>user.email===data.email)
    // console.log(present.email)
    // useremail=present.email
    console.log("dnskldnkl")
    
  }

  // const logout=async ()=>{
  //   let data=JSON.parse(localStorage.getItem('logins'))
  //   const filtered=data.filter((user)=>user.email!==useremail)
  //   console.log(filtered)
  // }
  const logout=async ()=>{
    navigate("/")
    localStorage.setItem('logins',false)
  }
  const navigate=useNavigate()

  const goto=()=>{
    navigate("/user",{state:User})
  }

  const Filter=async()=>{
    let avaiTurfs=await axios.get(TURFS_URL)
    console.log(avaiTurfs)
    setAvailableTurfs([avaiTurfs.data])
    console.log(filters.location)
    console.log(filters.type)
    let filteredturf= availableTurfs.filter((turf)=>turf.type===filters.type  && turf.location===filters.location)
    console.log(filteredturf)
    setFilteredTurfs(filteredturf)
    
  }

  const RegisterTurf=()=>{
      setRegisterTurf(true)
  }
  
  

  return (
    <DashboardWrapper>
      <TopPanel>
        <h1>Hey {username}! Welcome Back To JusPlay.</h1>
        
       
        <button onClick={logout}>logout</button>
        
      
        <button onClick={goto}>Profile</button>
        {nextBooking && (
          <NextBooking>
            <h2>Next Scheduled Booking</h2>
            <p>{nextBooking.turfName}</p>
            <p>{nextBooking.date} at {nextBooking.time}</p>
          </NextBooking>
        )}
        {/* <RecentActivity>
          <h2>Recent Activity</h2>
          <ul>
            {recentActivity.map((activity) => (
              <li key={activity.id}>
                {activity.turfName} - {activity.status}
              </li>
            ))}
          </ul>
        </RecentActivity> */}
      </TopPanel>

      <Filters>
        <h2>Filters</h2>
        <label>
          Location:
          <input type="text" name="location" value={filters.location} onChange={handleFilterChange} />
        </label>
        
        
        <label>
          Turf Type:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            
            <option value="Cricket" defaultChecked>Cricket</option>
            <option value="Football">Football</option>
            <option value="Badminton">Badminton</option>
          </select>
        </label>
        <button onClick={Filter}>submit</button>
      </Filters>

      <Turfs>
        <h2>Available Turfs</h2>
        <TurfsGrid>
          {filteredturfs.length>0?
          (filteredturfs.map((turf) => (
            <TurfCard key={turf.id}>
              <img src={turf.image} alt={turf.name} />
              <h3>{turf.name}</h3>
              <p>Location: {turf.location}</p>
              <p>Price: ₹{turf.price}/hour</p>
              <p>Rating: {turf.rating} ★</p>
              <button onClick={() => handleBooking(turf.name)}>Book Now</button>
            </TurfCard>
          ))):
          <p>No available turfs</p>}
          
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
      <button onClick={RegisterTurf}>Register your turf</button>
      {registerturf && console.log("hello")}
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