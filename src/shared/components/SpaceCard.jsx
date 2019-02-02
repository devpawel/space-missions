import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SpaceshipImage from '../../shared/components/SpaceshipImage';
import Countdown from 'react-countdown-now';

const style = {
  root: {
    position: 'relative',
    cursor: 'pointer',
    margin: '1rem'
  },
  title: {
    position: 'absolute',
    bottom: '0rem',
    width: '100%',
    padding: '0.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  countdown: {
    position: 'absolute',
    top: '0rem',
    width: '100%',
    padding: '0.2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    fontSize: '0.7rem',
    textAlign: 'right'
  }
};

export default class SpaceCard extends Component {
  render() {
    const launch = this.props.launch;

    return (
      <div style={style.root}>
        <SpaceshipImage
          className={{ width: '7rem' }}
          src={launch.rocket.imageURL}
          size={launch.rocket.imageSizes[0]}
          alt={launch.rocket.name}
        />
        <Typography style={style.title} variant="body1">
          {launch.name}
        </Typography>
        <Typography style={style.countdown} variant="body1">
          <Countdown date={launch.windowstart} />
        </Typography>
      </div>
    );
  }
}
