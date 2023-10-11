import React from 'react';
import './App.css';
import Home from './components/home';
import { Route, Switch, BrowserRouter} from "react-router-dom"
import Profile from './components/profile';
import ResumeCreation from './components/resumeCreation';
import ShowResume from './components/showResume';
import CoverletterCreation from './components/coverletterCreation';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/create" component={ResumeCreation} />
        <Route path="/show" component={ShowResume} />
        <Route path="/coverletter" component={CoverletterCreation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
