import axios from 'axios'; 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const API_URL = "https://jusplayserver-2.onrender.com/owners";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  background: linear-gradient(to right, #6DD5FA, #2980B9);
  background:url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
  background-repeat: no-repeat;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 10px;
  text-align: center;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #34495e;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #2980B9;
  }
`;

const Button = styled.button`
  background: #2980B9;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #1A5276;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
`;

function Owner() {
  const [error, setError] = useState({
    email: null,
    username: null,
    favorite_game: null,
    password: null
  });
  const [visibility, setVisibility] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    password: "",
    turfs: []
  });

  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      fetchData();
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setVisibility(!visibility);
  };

  const validateForm = async () => {
    setError(null);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z]+$/;

    const existingUser = users.find((user) => user.email === newUser.email);

    if (newUser.email === "") {
      setError({ email: "Email can't be empty" });
      return;
    } else if (existingUser) {
      setError({ email: "Email already exists" });
      return;
    } else if (!emailPattern.test(newUser.email)) {
      setError({ email: "Invalid email format" });
      return;
    } else if (newUser.password === "") {
      setError({ password: "Password can't be empty" });
      return;
    } else if (newUser.password.length < 5) {
      setError({ password: "Password should be at least 5 characters" });
      return;
    } else if (newUser.name === "") {
      setError({ username: "Username can't be empty" });
      return;
    } else if (!namePattern.test(newUser.name)) {
      setError({ username: "Username should contain only characters" });
      return;
    }

    addUser();
  };

  const addUser = async () => {
    try {
      const response = await axios.post(API_URL, newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: "", email: "", password: "", turfs: [] });
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const updateUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/${editUser.id}`, editUser);
      setUsers(users.map((user) => (user.id === response.data.id ? response.data : user)));
      setEditUser(null);
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  return (
    <Div>
      <FormContainer>
        <SignupForm onSubmit={handleSubmit}>
          <Title>Owner Sign Up</Title>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              placeholder="Email"
            />
            {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input
              type={visibility ? "text" : "password"}
              name="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              placeholder="Password"
            />
            <Button onClick={togglePasswordVisibility} type="button">
              {visibility ? "Hide" : "Show"}
            </Button>
          </div>
          {error.password && <ErrorMessage>{error.password}</ErrorMessage>}
          <div>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              name="username"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder="Username"
            />
            {error.username && <ErrorMessage>{error.username}</ErrorMessage>}
          </div>
          <Button type="submit">Submit</Button>
        </SignupForm>
      </FormContainer>
      {editUser && (
        <FormContainer>
          <p>Editing form</p>
          <form onSubmit={updateUser}>
            <Input
              type="email"
              value={editUser.email}
              onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
              placeholder="Email"
            />
            <Input
              type="text"
              value={editUser.name}
              onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
              placeholder="Username"
            />
            <Input
              type="password"
              value={editUser.password}
              onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
              placeholder="Password"
            />
            <Button type="submit">Submit</Button>
          </form>
        </FormContainer>
      )}
    </Div>
  );
}

export default Owner;
