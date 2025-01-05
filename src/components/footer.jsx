import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Styled Components
const FooterWrapper = styled.footer`
  background-color: #0a0a0a; /* Darker background for a premium feel */
  color: #dcdcdc; /* Lighter text for readability */
  padding: 60px 40px; /* More padding for spacious look */
  text-align: center;
  position: relative;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.4); /* Soft shadow for depth */
  border-top: 2px solid #ffd700; /* Gold top border for luxury */

  @media (max-width: 768px) {
    padding: 40px 20px; /* Less padding on smaller devices */
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the sections on small devices */
    align-items: center;
    gap: 30px;
  }
`;

const FooterBranding = styled.div`
  flex: 2;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const FooterLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Elegant logo with shadow */
`;

const FooterTitle = styled.h2`
  font-size: 2rem;
  margin: 15px 0;
  font-weight: 700;
  color: #ffd700; /* Luxurious gold color */
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const FooterDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 10px;
  color: #b0b0b0; /* Soft gray text for description */
`;

const FooterLinks = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

const FooterLinksTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: #ffd700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 10px 0;
`;

const FooterLink = styled.a`
  color: #dcdcdc;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffd700; /* Gold hover effect */
    transform: translateX(5px); /* Subtle movement on hover */
  }
`;

const FooterSocials = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 15px; /* Reduce gap on smaller screens */
  }
`;

const SocialIconLink = styled.a`
  color: #dcdcdc;
  font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffd700;
    transform: scale(1.2);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444444;
  padding-top: 20px;
  margin-top: 20px;
  font-size: 1rem;
  color: #888888; /* Slightly muted color for footer text */
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Branding Section */}
        <FooterBranding>
          <FooterLogo src="./images/logo.jpg" alt="JusPlay Logo" />
          <FooterTitle>JusPlay</FooterTitle>
          <FooterDesc>
            Booking sports facilities and services. Play more, stress less!
          </FooterDesc>
        </FooterBranding>

        {/* Links Section */}
        <FooterLinks>
          <FooterLinksTitle>Quick Links</FooterLinksTitle>
          <LinksList>
            <LinkItem>
              <FooterLink href="/">Home</FooterLink>
            </LinkItem>
            <LinkItem>
              <FooterLink href="/Products">Products</FooterLink>
            </LinkItem>
            <LinkItem>
              <FooterLink href="/features">Features</FooterLink>
            </LinkItem>
          </LinksList>
        </FooterLinks>

        {/* Social Media Section */}
        <FooterSocials>
          <FooterLinksTitle>Follow Us</FooterLinksTitle>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/ramaraju.pinnamaraju.16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIconLink>
          </SocialIcons>
        </FooterSocials>
      </FooterContainer>

      <FooterBottom>&copy; 2025 JusPlay. All Rights Reserved.</FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
