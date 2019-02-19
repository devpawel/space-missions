import React, { Component } from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core';

export default class Loading extends Component {
  render() {
    const data = this.props.data;

    if (data) {
      return this.props.children;
    }

    if (this.props.text) {
      return <div style={this.props.style}>Loading...</div>;
    }

    if (this.props.linear) {
      return <LinearProgress color={this.props.color} />;
    }

    return (
      <div style={this.props.style}>
        <CircularProgress
          color={this.props.color}
          size={this.props.size}
          thickness={this.props.thickness}
        />
      </div>
    );
  }
}
