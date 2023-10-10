import React from "react";
import NavBar from "./navBar";

const Home = () => {
  return <div className="home-component">
    <NavBar />
    <div className="main-content">
        <h1>Welcome to the Resume Builder App</h1>
        <p>Create and manage your resumes with ease.</p>
        <button>Get Started</button>
      </div>
  </div>
};

export default Home;