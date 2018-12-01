import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Car from './views/car.js'
import './App.css';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Car}/>
      </Router>
    );
  }
}

export default AppRouter;
