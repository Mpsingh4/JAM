import React from 'react';
import landingPage from './landingPage';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from './login'

function App() {
  return (
    <Router>
      <Home />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
