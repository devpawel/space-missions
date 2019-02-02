import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LaunchList from './launch-list/containers/LaunchList';
import LaunchDetail from './launch-detail/containers/LaunchDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LaunchList} />
          <Route path="/details/:id" component={LaunchDetail} />
          <Redirect to="/" push />
        </Switch>
      </Router>
    );
  }
}

export default App;
