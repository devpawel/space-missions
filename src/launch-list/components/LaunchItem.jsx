import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './LaunchItem.css';
import SpaceshipImage from '../../shared/components/SpaceshipImage';
import Countdown from 'react-countdown-now';

export default class LaunchItem extends Component {
  render() {
    const launch = this.props.launch;

    return (
      <div className="container">
        <Paper className="paper">
          <Typography variant="body1">
            {launch.name}
          </Typography>
          <hr />
          <SpaceshipImage
            src={launch.rocket.imageURL}
            size={launch.rocket.imageSizes[0]}
            alt={launch.rocket.name}
          />
          <Typography className="countdown" variant="body1">
            <Countdown date={launch.windowstart} />
          </Typography>
          <Typography variant="body1">
            {launch.missions[0].description}
          </Typography>
        </Paper>
      </div>
    );
  }
}
