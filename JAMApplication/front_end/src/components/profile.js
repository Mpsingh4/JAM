import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import navBar from "./navBar";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

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
  }, [isAuthenticated, user]);
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div>
        <navBar />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;