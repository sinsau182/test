import React, { useEffect } from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import './AdminHome.css'; // Importing external CSS file
import MaintainUser from './secondaryComponent/admin/MaintainUser';
import MaintainVendor from './secondaryComponent/admin/MaintainVendor';

const AdminHome = () => {
  const navigate = useNavigate();
  const onLogout = ()=>{
    localStorage.removeItem("userInfo");
    navigate("/");
  }
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(()=>{
    if(userInfo?.category !== "admin"){
      navigate("/admin-login");
    }
  });
  return (
    <div className="admin-home-container">
      <div className="top-bar">
        <button className="top-button" onClick={()=>{navigate("/admin-login")}}>Home</button>
        <button className="top-button" onClick={onLogout}>Logout</button>
      </div>
      <div className="welcome-message">
        <h2>Welcome, {userInfo?.name}!</h2>
      </div>
      <div className="bottom-buttons">
        <button className="bottom-button" onClick={()=>{navigate("/dashboard/admin/maintain-vendor")}}>Maintain Vendor</button>
        <button className="bottom-button"onClick={()=>{navigate("/dashboard/admin/maintain-user")}}>Maintain User</button>
      </div>
      <Routes>
        <Route path='/maintain-user' element = {<MaintainUser/>}/>
        <Route path='/maintain-vendor'element = {<MaintainVendor/>}/>
      </Routes>
    </div>
  );
};

export default AdminHome;