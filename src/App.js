import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
      </Switch>
      
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h3>Welcome</h3><br /><br />
    <p>
      This is my Minor Project of React App.<br />
      It Includes React Routes function for About and Contact Links attached to Navigation Buttons.<br />
    </p>
  </div>
);
export default App;
