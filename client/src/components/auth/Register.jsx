import React, { useState } from 'react';
import './register.css'; 
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../../credentials';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(formData); 
    try {
      const res = await axios.post(`${baseURL}/register`,formData);
      console.log(res?.data);
      // localStorage.setItem("userInfo",JSON.stringify(res?.data));
      Navigate("/dashboard/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select Category</option>
            <option value="admin">Admin</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <div className="lastpara" style={{padding:"10px 0"}}> 
      <Link to={"/"}>Already have an account? Login here</Link>
      </div>
    </div>
  );
}

export default SignupForm;
