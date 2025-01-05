import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

let API_URL = "https://jusplayserver-2.onrender.com/owners";

const Div=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:15px;
    min-height:100vh;
    background-image:url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
    background-size:cover;
    background-repeat:no-repeat;
    padding: 2rem;
`;

const SignInContainer = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-color: #6c63ff;
    background: #fff;
    box-shadow: 0 0 8px rgba(108, 99, 255, 0.5);
  }
`;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-style: italic;
`;

const Success = styled.div`
  color: green;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-style: italic;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: linear-gradient(90deg, #6c63ff, #4a47ff);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, #4a47ff, #6c63ff);
    box-shadow: 0 4px 12px rgba(76, 70, 255, 0.4);
  }
`;

const SignupLink = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #333;
  a {
    color: #6c63ff;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const OwnerSignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [logins, setLogins] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useLocation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  useEffect(() => {
    localStorage.setItem('logins', logins);
  }, [logins]);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(API_URL);
      const users = response.data;

      const user = users.find(
        (user) => user.email === loginData.email && user.password === loginData.password
      );

      if (user) {
        const updatedUser = {
          ...user,
          lastLogin: new Date().toISOString() // Store the last login time
        };

        await axios.put(`${API_URL}/${user.id}`, updatedUser);

        setSuccess('Login successful!');
        setError('');
        navigate("/ownerdashboard", { state: { User: user } });
        setLogins(true);
      } else {
        setError('Invalid email or password');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <Div>
      <SignInContainer>
        <h2 style={{ textAlign: 'center', color: '#4a47ff' }}>Owner Sign In</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </FormGroup>

          <SignupLink>
            Not a previous user? <a href="/owner">Signup</a>
          </SignupLink>

          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}

          <SignInButton type="submit">Sign In</SignInButton>
        </form>
      </SignInContainer>
    </Div>
  );
};

export default OwnerSignIn;
