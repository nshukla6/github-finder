import React from 'react';
import NavBar from './components/layout/NavBar'
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import { About } from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';

function App() {

  return (
    <GithubState>
      <AlertState>
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:login" component={User}/>
          <Route component ={NotFound}
          />
        </Switch>
        </div>
      </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}

export default App;
