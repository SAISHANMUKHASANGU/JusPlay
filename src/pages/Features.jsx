import React from "react";
import styled from "styled-components";

// Styled Components
const FeaturesPage = styled.div`
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #ffffff, #f0f4f9);
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-image: url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  backdrop-filter: blur(5px);
`;

const FeaturesTitle = styled.h1`
  font-size: 3rem;
  color: #1abc9c;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 0 20px;

  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const FeatureItem = styled.div`
  background: linear-gradient(135deg, #ffffff, #e6e9f0);
  border: none;
  border-radius: 15px;
  padding: 25px;
  width: 280px;
  max-width: 100%;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
  }
`;

const FeatureIcon = styled.span`
  font-size: 3rem;
  color: #1abc9c;
  margin-bottom: 15px;
  display: block;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #34495e;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: #7f8c8d;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// React Component
function Features() {
  const featureList = [
    {
      icon: "⚽",
      title: "Easy Turf Booking",
      description: "Book your turf effortlessly with a simple and intuitive booking system.",
    },
    {
      icon: "📅",
      title: "Real-Time Availability",
      description: "Check the live availability of turfs and book your preferred slots.",
    },
    {
      icon: "🏆",
      title: "Multiple Sports Options",
      description: "Choose from a variety of sports like football, cricket, tennis, and more.",
    },
    {
      icon: "⏰",
      title: "Flexible Time Slots",
      description: "Book turfs for hourly, daily, or custom time slots as per your needs.",
    },
    {
      icon: "📍",
      title: "Location-Based Search",
      description: "Find nearby turfs using our map-based search feature.",
    },
    {
      icon: "⭐",
      title: "User Reviews & Ratings",
      description: "View reviews and ratings to choose the best turf for your game.",
    },
  ];

  return (
    <FeaturesPage>
      <FeaturesTitle>Our Features</FeaturesTitle>
      <FeaturesList>
        {featureList.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesList>
    </FeaturesPage>
  );
}

export default Features;
