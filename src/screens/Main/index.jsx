import React, { Component } from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom';
import Profile from '../Profile'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
    </Router>
    );
  }
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default Main;
