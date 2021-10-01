import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

=======
import logo from './logo.svg';
import './App.css';
>>>>>>> ec2255db179732394ef35afc779efffaaf38a3a8
=======
>>>>>>> f647ee13d2d6afca9acd238510e949be6bfe5d86

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/repos" component={RepoPage}/>
          </Switch>
        </Content>
      </>
=======
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
=======
      <div>
        Hello Carbon! Well, not quite yet. This is the starting point for the
        Carbon tutorial.
>>>>>>> f647ee13d2d6afca9acd238510e949be6bfe5d86
      </div>
>>>>>>> ec2255db179732394ef35afc779efffaaf38a3a8
    );
  }
}

export default App;
