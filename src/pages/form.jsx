import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const API_URL = "https://jusplayserver-2.onrender.com/users";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background:url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background: rgba(24, 182, 218, 0.1); /* Increased opacity for better visibility */
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(38, 136, 255, 0.5);
  width: 400px;
  text-align: center;
  backdrop-filter: blur(100px);/* Adds a subtle blur effect for better contrast */
`;


const Title = styled.h1`
  font-size: 28px;
  color: #fff;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #ddd;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.93);
  font-size: 14px;
  outline: none;

  &:focus {
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
  }
`;

const ShowPasswordButton = styled.button`
  align-self: flex-end;
  background: transparent;
  color: #ddd;
  border: none;
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;

  &:hover {
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background: linear-gradient(45deg, #ff6a00, #ee0979);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #ee0979, #ff6a00);
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
`;

function Form() {
  const [error, setError] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [users, setUsers] = useState([]);
  const [newuser, setNewUser] = useState({
    email: "",
    name: "",
    favorite_game: "",
    password: "",
    bookings: [],
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchData();
  }, []);

  const togglePasswordVisibility = () => {
    setVisibility(!visibility);
  };

  const validateAndSubmit = async () => {
    setError({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]+$/;

    if (!newuser.email) return setError({ email: "Email can't be empty" });
    if (!emailRegex.test(newuser.email)) return setError({ email: "Invalid email format" });
    if (users.some((user) => user.email === newuser.email)) return setError({ email: "Email already exists" });
    if (!newuser.password) return setError({ password: "Password can't be empty" });
    if (newuser.password.length < 5) return setError({ password: "Password must be at least 5 characters" });
    if (!confirmPassword) return setError({ confirmPassword: "Confirm Password can't be empty" });
    if (newuser.password !== confirmPassword) return setError({ confirmPassword: "Passwords do not match" });
    if (!newuser.name) return setError({ username: "Username can't be empty" });
    if (!nameRegex.test(newuser.name)) return setError({ username: "Username should only contain characters" });
    if (!newuser.favorite_game) return setError({ favorite_game: "Favorite Game can't be empty" });

    try {
      const response = await axios.post(API_URL, newuser);
      setUsers([...users, response.data]);
      setNewUser({ email: "", name: "", favorite_game: "", password: "", bookings: [] });
      setConfirmPassword("");
      navigate("/Login");
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateAndSubmit();
  };

  return (
    <Div>
      <SignupForm onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={newuser.email}
            onChange={(e) => setNewUser({ ...newuser, email: e.target.value })}
          />
          {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type={visibility ? "text" : "password"}
            value={newuser.password}
            onChange={(e) => setNewUser({ ...newuser, password: e.target.value })}
          />
          <ShowPasswordButton type="button" onClick={togglePasswordVisibility}>
            {visibility ? "Hide" : "Show"}
          </ShowPasswordButton>
          {error.password && <ErrorMessage>{error.password}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Confirm Password</Label>
          <Input
            type={visibility ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error.confirmPassword && <ErrorMessage>{error.confirmPassword}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Username</Label>
          <Input
            type="text"
            value={newuser.name}
            onChange={(e) => setNewUser({ ...newuser, name: e.target.value })}
          />
          {error.username && <ErrorMessage>{error.username}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label>Favorite Game</Label>
          <Input
            type="text"
            value={newuser.favorite_game}
            onChange={(e) => setNewUser({ ...newuser, favorite_game: e.target.value })}
          />
          {error.favorite_game && <ErrorMessage>{error.favorite_game}</ErrorMessage>}
        </InputGroup>
        <Button type="submit">Submit</Button>
      </SignupForm>
    </Div>
  );
}

export default Form;
