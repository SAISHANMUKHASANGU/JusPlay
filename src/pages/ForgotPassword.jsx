import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const API_URL = "https://jusplayserver-2.onrender.com/users";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #2c1b54, #aa4673);
  background:url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  margin-bottom: 1rem;
  background: #ffffff;

  ::placeholder {
    color: #ddd;
  }
`;

const ToggleButton = styled.button`
  margin-top: -0.75rem;
  margin-bottom: 1rem;
  width: 100%;
  background: transparent;
  color: #ffffff;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  text-align: right;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, #ff7e5f, #fd267d);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(to right, #fd267d, #ff7e5f);
  }
`;

const Feedback = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  color: ${({ isError }) => (isError ? "red" : "lightgreen")};
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setFeedback("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.get(API_URL);
      const user = response.data.find((users) => users.email === email);

      if (user) {
        await axios.patch(`${API_URL}/${user.id}`, { password }); // Use PATCH method to update the password field
        setFeedback("Password updated successfully!");
        navigate("/login"); // Redirect to the login page
      } else {
        setFeedback("Email not found!");
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again.");
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Reset Password</Title>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />

          <Label htmlFor="newPassword">New Password</Label>
          <Input
            type={showPassword ? "text" : "password"}
            id="newPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter new password"
          />
          <ToggleButton
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </ToggleButton>

          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm new password"
          />
          <ToggleButton
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? "Hide Password" : "Show Password"}
          </ToggleButton>

          <Button type="submit">Reset Password</Button>
          {feedback && <Feedback isError={feedback.includes("not")}>{feedback}</Feedback>}
        </form>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
