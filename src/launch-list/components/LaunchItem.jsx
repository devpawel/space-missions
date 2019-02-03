import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './LaunchItem.css';
import SpaceshipImage from '../../shared/components/SpaceshipImage';
import Countdown from 'react-countdown-now';
import Grid from '@material-ui/core/Grid';

export default class LaunchItem extends Component {
  render() {
    const launch = this.props.launch;

    return (
      <Paper className="paper">
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="body1">{launch.name}</Typography>
          </Grid>
          <Grid item xs={2} className="countdown">
            <Typography variant="body1">
              <Countdown date={launch.windowstart} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <hr />
          </Grid>
          <Grid item xs={3}>
            <SpaceshipImage
              className={{ width: '7rem' }}
              src={launch.rocket.imageURL}
              size={launch.rocket.imageSizes[0]}
              alt={launch.rocket.name}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" className="label">
              Mission type
            </Typography>
            <Typography variant="body1" className="label">
              Description
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">{launch.missions[0].typeName}</Typography>
            <Typography variant="body1">{launch.missions[0].description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
