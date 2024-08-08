import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../../credentials';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(`${baseURL}/login`,formData);
      console.log(res?.data);
      localStorage.setItem("userInfo",JSON.stringify(res?.data));
      if(res?.data?.category ==="admin"){
        console.log("Working");
        navigate("/dashboard/admin");
      }
      else if(res?.data?.category ==="vendor"){
        navigate("/dashboard/vendor");
      }
      else if(res?.data?.category ==="user"){
        navigate("/dashboard/user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">User ID or Email:</label>
          <input
            type="text"
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
        <button type="submit" className="btn">Login</button>
      </form>
      <div className="lastpara" style={{padding:"10px 0"}}> 
      <Link to={"/auth/signup"}>Dont have an account? Create a new one here</Link>
      </div>
    </div>
  );
}

export default LoginForm;
