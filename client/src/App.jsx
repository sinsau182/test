import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './components/home/Home';
import Login from './components/auth/Login';
import SignupForm from './components/auth/Register';
// import Admin from './components/dashboard/Admin';
import Vendor from './components/dashboard/Vendor';
import User from './components/dashboard/User';
import MaintainUser from './components/dashboard/secondaryComponent/admin/MaintainUser';
import MaintainVendor from './components/dashboard/secondaryComponent/admin/MaintainVendor';
import AdminHome from './components/dashboard/Admin';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/auth/admin-login' element = {<Login/>}/>
        <Route path='/auth/vendor-login' element = {<Login/>}/>
        <Route path='/auth/user-login' element = {<Login/>}/>
        <Route path='/auth/signup' element = {<SignupForm/>}/>
        <Route path='/dashboard/admin/*' element = {<AdminHome/>}/>
        <Route path='/dashboard/vendor' element = {<Vendor/>}/>
        <Route path='/dashboard/user' element = {<User/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App