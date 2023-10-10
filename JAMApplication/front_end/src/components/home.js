import React from "react";
import NavBar from "./navBar";
import "./comp.css"
import LoginButton from "./login";

const Home = () => {
  return <div className="home-component">
    <NavBar />
    <body>
    <div className="banner">
    <div className="main-content">
        <h1>Welcome to Job Application Manager, the Resume Builder App</h1>
        <p>Create and manage your resumes with ease.</p>
        <button className="get-started"> <LoginButton/> Get Started</button>
      </div>
      </div>
      </body>
  </div>
};

export default Home;