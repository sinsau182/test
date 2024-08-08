import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-message">Welcome to our application!</h1>
      <h2>SinSau Library Management System</h2>
      <div className="options-container">
        <button className="option-button"><Link to="/auth/admin-login">Continue as Admin</Link></button>
        <button className="option-button"><Link to="/auth/vendor-login">Continue as Vendor</Link></button>
        
      </div>
    </div>
  );
};

export default Home;