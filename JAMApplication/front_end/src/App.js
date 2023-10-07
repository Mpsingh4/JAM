import React from 'react';
import landingPage from './landingPage';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { Route, Routes, Switch, BrowserRouter} from "react-router-dom"
import LoginButton from './components/login';
import Profile from './components/profile';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
