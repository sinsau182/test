import React from 'react';
import './MaintainUser.css'; // Importing external CSS file
import { useNavigate } from 'react-router-dom';

const MaintainVendor = () => {
    const onLogout = ()=>{
        localStorage.removeItem("userInfo");
        navigate("/");
      }
      const navigate = useNavigate();
  return (
    <div className="maintain-user-container">
        <h2>Maintain Vendor</h2>
      <div className="top-bar">
        <button className="top-button" onClick={()=>{navigate("/")}}>Home</button>
        <button className="top-button" onClick={onLogout}>Logout</button>
      </div>
      <div className="content">
        <div className="row">
          <div className="column">
            <h2>Membership</h2>
            <div className="action-buttons">
              <button className="vertical-button">Add</button>
              <button className="vertical-button">Update</button>
            </div>
          </div>
          <div className="column">
            <h2>User Management</h2>
            <div className="action-buttons">
              <button className="vertical-button">Add</button>
              <button className="vertical-button">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintainVendor;
