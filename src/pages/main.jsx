import React, { useEffect } from "react";
import styled from "styled-components";

// Styled Components
const MainBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #3a3a3a 20%, #1e1e1e); /* Luxurious dark gradient */
  background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
  background-size: cover;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Quote = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const QuoteText = styled.p`
  color: #d4af37; /* Gold color */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Soft glow effect */
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin-top: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const IndiaDiv = styled.div`
  width: 45%;
  padding: 1rem;
  background-color: #2a2a2a;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Hover effect for zoom-in */
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const IndiaImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const QuoteArea = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #d4af37; /* Gold color */
  padding: 2rem;
  background-color: #333333;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1a1a1a;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1.5rem;
  }
`;

// Main Component
function Main() {
  useEffect(() => {
    localStorage.setItem("logins", false);
  }, []);

  return (
    <MainBody>
      <Quote>
        <QuoteText>Book, Play, Eat, Repeat</QuoteText>
      </Quote>
      <SideBySide>
        <IndiaDiv>
          <IndiaImage src="https://www.playspots.in/wp-content/uploads/2024/11/india-map.webp" alt="India Map" />
        </IndiaDiv>
        <QuoteArea>Play Anywhere, Anytime in India</QuoteArea>
      </SideBySide>
    </MainBody>
  );
}

export default Main;
