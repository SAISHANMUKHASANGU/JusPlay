import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

let API_URL = "https://jusplayserver-2.onrender.com/users";

// Styled components for styling
const SignInContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const Success = styled.div`
  color: green;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  font-size: 1.1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
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
  const navigate=useNavigate()
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
        navigate("/dashboard")
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
    <SignInContainer>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
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
            required
          />
        </FormGroup>

        {error && <Error>{error}</Error>}
        {success && <Success>{success}</Success>}

        <SignInButton type="submit">Sign In</SignInButton>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
