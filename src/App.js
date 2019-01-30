import React, { Component } from 'react';
import './App.css';
import LaunchList from './launch-list/containers/LaunchList';

class App extends Component {
  render() {
    return (
      <div>
        <LaunchList />
      </div>
    );
  }
}

export default App;
