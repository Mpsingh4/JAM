import React, { useState } from 'react'
import Logo from "../assets/jamLogo3.png";
import HomeIcon from "@mui/icons-material/Home"
import LoginIcon from "@mui/icons-material/Login"
import RegisterIcon from "@mui/icons-material/AppRegistration"
import AboutIcon from "@mui/icons-material/QuestionMark"
import { HiOutlineBars3 } from "react-icons/hi2"
import LoginButton from './login';

const NavBar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />
    },
    {
      text: "Login",
      icon: <LoginIcon />
    },
    {
      text: "Register",
      icon: <RegisterIcon />
    },
    {
      text: "About",
      icon: <AboutIcon />
    },
  ];

  return (
    <nav className='nav-bar-whole'>
    <div className='nav-logo-container'>
      <img src={Logo} alt=""/>
    </div>
    <div className='NavBar-links-container'>
    
      <a href=''>Home</a>
      <a href=''>Login</a>
      {/* <LoginButton> Login </LoginButton> */}
      <a href=''>Register</a>
      <a href=''>About</a>
    </div>
    <div className='NavBar-menu-container'>
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>    
    {/* add home login reg etc here */}
    </nav>
  )
};

export default NavBar;

{/* <ul>
<li><a href=''>Home</a></li>
<li><a href=''>Login</a></li>
<li><a href=''>Register</a></li>
<li><a href=''>About</a></li>
</ul> */}