// import React, { useState } from 'react';
// import axios from 'axios';

// let API_URL = "http://localhost:3000/users"

// const SignIn = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
 
//     try {
     
//       const response = await axios.get(API_URL, loginData);
//       const users = response.data;

      
//       const user = users.find(
//         (user) => user.email === loginData.email && user.password === loginData.password
//       );

//       if (user) {
//         setSuccess('Login successful!');
//         setError('');
//       } else {
//         setError('Invalid email or password');
//         setSuccess('');
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError('An error occurred. Please try again later.');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="sign-in-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={loginData.Email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={loginData.Password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {error && <div className="error">{error}</div>}
//         {success && <div className="success">{success}</div>}

//         <button type="submit" className="signin-btn">Sign In</button>
//       </form>
//     </div>
//   );
// };
//   export default SignIn;




import React, { useState } from 'react';
import axios from 'axios';

let API_URL = "https://jusplayserver-2.onrender.com/users";

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

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
          lastLogin: new Date().toISOString()// Store the last login time
        };

        
        await axios.put(`${API_URL}/${user.id}`, updatedUser);

        setSuccess('Login successful!');
        setError('');
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
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <button type="submit" className="signin-btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;







// import React, { useState } from 'react';
// import axios from 'axios';

// let API_URL = "http://localhost:3000/users"; // Existing user API
// let LOGIN_LOGS_URL = "http://localhost:3000/loginLogs"; // New API endpoint for saving login logs

// const SignIn = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value
//     });
//   };

//   // Function to log the login attempt (send data to backend)
//   const logLoginAttempt = async (email) => {
//     try {
//       const loginLogData = {
//         email: email,
//         timestamp: new Date().toISOString(), // Current timestamp of the login attempt
//       };

//       // POST request to save login attempt
//       await axios.post(LOGIN_LOGS_URL, loginLogData);
//       console.log('Login attempt logged successfully');
//     } catch (error) {
//       console.error('Error logging login attempt:', error);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Get users from the backend (or database)
//       const response = await axios.get(API_URL);
//       const users = response.data;

//       // Find user with matching email and password
//       const user = users.find(
//         (user) => user.email === loginData.email && user.password === loginData.password
//       );

//       if (user) {
//         // If user is found, update their last login time and save it
//         const updatedUser = {
//           ...user,
//           lastLogin: new Date().toISOString(), // Store the last login time
//         };

//         // Update user details in the database
//         await axios.put(${API_URL}/${user.id}, updatedUser);

//         // Log the login attempt to a separate endpoint
//         await logLoginAttempt(loginData.email);

//         setSuccess('Login successful!');
//         setError('');
//       } else {
//         setError('Invalid email or password');
//         setSuccess('');
//       }
//     } catch (error) {
//       console.error('Error during login process:', error);
//       setError('An error occurred. Please try again later.');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="sign-in-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={loginData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {error && <div className="error">{error}</div>}
//         {success && <div className="success">{success}</div>}

//         <button type="submit" className="signin-btn">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
