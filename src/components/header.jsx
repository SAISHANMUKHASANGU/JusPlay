import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

// Styled components for Header (Large Screens)
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg,rgb(221, 247, 50),rgb(96, 241, 12)); /* Luxurious dark brown gradient */
  color: #f5d700; /* Elegant gold color */
  height: auto;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Soft shadow for depth */

  @media (max-width: 768px) {
    display: none; /* Hide the large screen navbar on mobile */
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;

  #logoname {
    font-size: 2.5rem;
    font-family: 'Georgia', serif; /* Elegant font */
    font-weight: bold;
    color:rgb(250, 219, 17);
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 25px;
  justify-content: center;
  padding: 15px 0;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 10px 20px;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    border: 2px solid transparent;

    &:hover {
      background-color: #f5d700; /* Gold hover effect */
      color: #2c1f0b; /* Dark text */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      border: 2px solid #f5d700;
    }

    &.active {
      color: #2c1f0b;
      background-color: #f5d700;
      border: none;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide the navbar on small screens */
  }
`;

// Styled components for Hamburger Button
const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: rgb(200, 243, 12); /* Dark luxurious background */
    color: #f5d700; /* Gold color */
    padding: 15px 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    .menu-icon {
      font-size: 2.5rem;
      color: #f5d700;
      cursor: pointer;
    }

    #logoname {
      font-size: 1.8rem;
      font-weight: bold;
      color: #f5d700;
      margin: 0;
    }
  }
`;

// Styled components for Sidebar
const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: rgb(241, 147, 6); /* Dark brown for rich feel */
  color: #f5d700; /* Gold color */
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.3);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in-out;
  z-index: 999;

  ul {
    list-style: none;
    padding: 30px 20px;
    margin: 0;
  }

  li {
    margin: 20px 0;

    a {
      color: #f5d700;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: rgb(161, 248, 0); /* Dark text on hover */
        background-color: #f5d700; /* Gold background */
        border-radius: 25px;
        padding: 8px 15px;
      }
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header for Large Screens */}
      <HeaderContainer>
        <HeaderContent>
          <h1 id="logoname" style={{ textAlign: 'center' }}>JusPlay</h1>
          <Navbar>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/owner">Owner SignUp</NavLink>
            <NavLink to="/ownerlogin">Owner SignIn</NavLink>
          </Navbar>
        </HeaderContent>
      </HeaderContainer>

      {/* Hamburger Menu for Small Screens */}
      <Hamburger>
        <h1 id="logoname">JusPlay</h1>
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </Hamburger>

      {/* Sidebar for Mobile Menu */}
      <Sidebar open={menuOpen}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/signup" onClick={() => setMenuOpen(false)}>SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/features" onClick={() => setMenuOpen(false)}>Features</NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/owner" onClick={() => setMenuOpen(false)}>Owner SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/ownerlogin" onClick={() => setMenuOpen(false)}>Owner SignIn</NavLink>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default Header;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const HeaderWrapper = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #0f172a;
//   color: #fff;
// `;

// const HeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
// `;

// const Hamburger = styled.button`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 25px;
//   height: 20px;
//   background: none;
//   border: none;
//   cursor: pointer;
//   span {
//     display: block;
//     height: 3px;
//     width: 100%;
//     background-color: white;
//     border-radius: 3px;
//     transition: transform 0.3s ease, opacity 0.3s ease;
//   }
//   &.active span:nth-child(1) {
//     transform: rotate(45deg) translate(5px, 5px);
//   }
//   &.active span:nth-child(2) {
//     opacity: 0;
//   }
//   &.active span:nth-child(3) {
//     transform: rotate(-45deg) translate(5px, -5px);
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-left: auto;
// `;

// const Logo = styled.img`
//   height: 40px;
//   width: 40px;
// `;

// const LogoName = styled.h1`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

// const NavOverlay = styled.div`
//   display: none;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 998;
//   transition: opacity 0.3s ease;
//   &.open {
//     display: block;
//   }
// `;

// const NavMenu = styled.nav`
//   display: none;
//   position: absolute;
//   top: 50px;
//   left: 20px;
//   background: #0f172a;
//   border-radius: 8px;
//   padding: 10px 20px;
//   z-index: 999;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   &.open {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }
// `;

// const NavList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const NavItem = styled.li`
//   margin: 10px 0;
// `;

// const NavLinkStyled = styled(NavLink)`
//   color: white;
//   text-decoration: none;
//   font-size: 1rem;
//   transition: color 0.3s ease;
//   &:hover,
//   &.active-link {
//     color: #1d9bf0;
//     font-weight: bold;
//   }
// `;

// const UserHeader = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prevMenuOpen) => !prevMenuOpen);
//   };

//   return (
//     <HeaderWrapper>
//       <HeaderContainer>
//         {/* Hamburger Icon */}
//         <Hamburger
//           className={menuOpen ? "active" : ""}
//           onClick={toggleMenu}
//           aria-label="Toggle navigation menu"
//           aria-expanded={menuOpen}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Hamburger>

//         {/* Logo and Title */}
//         <LogoContainer>
//           <Logo src="./images/logo.jpg" alt="JusPlay Logo" />
//           <LogoName>JusPlay</LogoName>
//         </LogoContainer>
//       </HeaderContainer>

//       {/* Overlay */}
//       <NavOverlay
//         className={menuOpen ? "open" : ""}
//         onClick={() => setMenuOpen(false)}
//       ></NavOverlay>

//       {/* Navigation Menu */}
//       <NavMenu className={menuOpen ? "open" : ""}>
//         <NavList>
//           <NavItem>
//             <NavLinkStyled
//               to="/"
//               onClick={() => setMenuOpen(false) }
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               Home
//             </NavLinkStyled>
//           </NavItem>
          
//           <NavItem>
//             <NavLinkStyled
//               to="/products"
//               onClick={() => setMenuOpen(false) }
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               Products
//             </NavLinkStyled>
//           </NavItem>
          
//           <NavItem>
//             <NavLinkStyled
//               to="/features"
//               onClick={() => setMenuOpen(false) }
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               Features
//             </NavLinkStyled>
//           </NavItem>
//           <NavItem>
//             <NavLinkStyled
//               to="/user"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               UserProfile
//             </NavLinkStyled>
//           </NavItem>
//           <NavItem>
//             <NavLinkStyled
//               to="/dashboard"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               Dashboard
//             </NavLinkStyled>
//           </NavItem>
          
//           <NavItem>
//             <NavLinkStyled
//               to="/bookings"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               Bookings
//             </NavLinkStyled>
//           </NavItem>
//           <NavItem>
//             <NavLinkStyled
//               to="/owner"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               OwnerSignup
//             </NavLinkStyled>
//           </NavItem>
//           <NavItem>
//             <NavLinkStyled
//               to="/ownerlogin"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               OwnerLogin
//             </NavLinkStyled>
//           </NavItem>
//           <NavItem>
//             <NavLinkStyled
//               to="/ownerdashboard"
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) => (isActive ? "active-link" : "")}
//             >
//               OwnerDashboard
//             </NavLinkStyled>
//           </NavItem>
          
          
//         </NavList>
//       </NavMenu>
//     </HeaderWrapper>
//   );
// };

// export default UserHeader;