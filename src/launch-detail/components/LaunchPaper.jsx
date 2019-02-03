import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Countdown from 'react-countdown-now';
import SpaceLink from '../../shared/components/SpaceLink';
import SpaceshipImage from '../../shared/components/SpaceshipImage';
import LaunchDetailGroup from './LaunchDetailGroup';
import Paper from '@material-ui/core/Paper';

const style = {
  root: {
    padding: '0.5rem'
  },
  label: {
    textAlign: 'right'
  },
  devider: {
    margin: '1rem 0rem'
  },
  paper: {
    padding: '0.5rem'
  }
};

export default class LaunchPaper extends Component {
  render() {
    const launch = this.props.launch;
    const imageSize = 3;
    const launchTime = new Date(launch.windowstart).toUTCString();

    const basic = [
      {
        label: 'Space agency',
        value: launch.lsp.name
      },
      {
        label: 'Launch time',
        value: launchTime
      },
      {
        label: 'Countdown',
        value: <Countdown date={launch.windowstart} />
      },
      {
        label: 'Location',
        value: launch.location.name
      },
      {
        label: 'Rocket',
        value: launch.rocket.name
      }
    ];

    const missions = launch.missions.map(mission => {
      return {
        label: mission.name,
        value: (
          <div>
            <div>
              <em>
                <u>Mission type:</u>
              </em>{' '}
              {mission.typeName}
            </div>
            <div>
              <em>
                <u>Description:</u>
              </em>{' '}
              {mission.description}
            </div>
          </div>
        )
      };
    });

    const infos = launch.lsp.infoURLs.map(info => (
      <div key={info}>
        <SpaceLink link={info} text={info} />
        <br />
      </div>
    ));

    const links = [
      {
        label: 'Space agency info',
        value: <div>{infos}</div>
      },
      {
        label: 'Space agency wiki',
        value: <SpaceLink link={launch.lsp.wikiURL} text={launch.lsp.wikiURL} />
      },
      {
        label: 'Rocket info',
        value: <SpaceLink link={launch.rocket.infoURL} text={launch.rocket.infoURL} />
      },
      {
        label: 'Rocket wiki',
        value: <SpaceLink link={launch.rocket.wikiURL} text={launch.rocket.wikiURL} />
      }
    ];

    return (
      <Grid container spacing={8} style={style.root}>
        <Grid item xs={12}>
          <Paper style={style.paper} square={true}>
            <Typography variant="h5">{launch.name}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <SpaceshipImage
            style={{ width: '100%' }}
            src={launch.rocket.imageURL}
            size={launch.rocket.imageSizes[imageSize]}
            alt={launch.rocket.name}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <LaunchDetailGroup header={'Basic'} data={basic} />
          <div style={style.devider} />
          <LaunchDetailGroup header={'Missions'} data={missions} />
          <div style={style.devider} />
          <LaunchDetailGroup header={'Links'} data={links} />
        </Grid>
      </Grid>
    );
  }
}
