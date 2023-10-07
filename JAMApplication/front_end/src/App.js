import React from 'react';
import landingPage from './landingPage';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { Route, Routes} from "react-router-dom"
import LoginButton from './components/login';
import Profile from './components/profile';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
