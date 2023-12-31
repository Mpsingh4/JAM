import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import NavBar from "./navBar";
import { Link, useHistory } from "react-router-dom";
import "./comp.css"
import NavBar2 from "./navbar2";



const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      axios.post('http://localhost:8080/api/login', user)
        .then(({data}) => {
          const userID = data[0].id;
          window.sessionStorage.setItem("userID", userID)
        })
        .catch(error => {
          console.error(error);
        });
    }
    console.log(user, "user") //-change later
    console.log(isAuthenticated,"Authenticated")
  }, [isAuthenticated, user]);
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const redirectToCreateResume = () => {
    // Pass user data as state when redirecting to /create
    history.push({
      pathname: "/create",
      state: { user },
    });
  };

  const redirectToCreateCoverletter = () => {
    // Pass user data as state when redirecting to /create
    history.push({
      pathname: "/coverletters",
      state: { user },
    });
  };

  return (
    isAuthenticated && (
      <div>
        <NavBar2 />
        <body className="page-body">
        <div className="banner">
        <h1 className="profile-welcome">Welcome</h1>
        <div className="contents">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </div>
        {/* <Link to="/create">Create a Resume</Link> */}
        <button className="create-res-button" onClick={redirectToCreateResume}> Create a Resume </button>
        <button className="create-res-button" onClick={redirectToCreateCoverletter}> Create a Cover Letter </button>
        </div>
        </body>  
      </div>
    )
  );
};

export default Profile;