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
        <h1>Welcome to JAM - Job Application Manager</h1>
        <h2>The Resume & Cover Letter Builder</h2>
        <p>Create your new Resume and job-winning cover letter in minutes!
           <br/> Manage all your job search activities in one place with ease. 
           <br/> </p>
        <button className="get-started"> <LoginButton/></button>
      </div>
      </div>
      </body>
  </div>
};

export default Home;