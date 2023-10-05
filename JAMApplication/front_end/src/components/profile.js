import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import NavBar from "./navBar";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      axios.post('http://localhost:8080/api/login', user)
        .then(res => {
          console.log(res);
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


  return (
    isAuthenticated && (
      <div>
        <NavBar />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;