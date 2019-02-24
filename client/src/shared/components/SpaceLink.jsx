import React, { Component } from 'react';

const style = {
  color: 'lightblue'
};

export default class SpaceLink extends Component {
  render() {
    if (!this.props.link) {
      return null;
    }

    return (
      <a style={style} href={this.props.link} target="_blank" rel="noopener noreferrer">
        <em>{this.props.text}</em>
      </a>
    );
  }
}
