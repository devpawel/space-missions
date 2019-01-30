import React, { Component } from 'react';
import './SpaceshipImage.css';

export default class SpaceshipImage extends Component {
  resizeImage() {
    const src = this.props.src;
    const size = this.props.size;
    const regex = /_1920/gi;

    return src.replace(regex, `_${size}`);
  }

  render() {
    return <img className="image-size" src={this.resizeImage()} alt={this.props.alt} />;
  }
}
