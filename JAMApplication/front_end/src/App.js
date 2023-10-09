import React from 'react';
import './App.css';
import Home from './components/home';
import { Route, Switch, BrowserRouter} from "react-router-dom"
import Profile from './components/profile';
import ResumeCreation from './components/resumeCreation';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/create" components={ResumeCreation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
