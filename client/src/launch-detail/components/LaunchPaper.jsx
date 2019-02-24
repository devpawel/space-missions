import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import favoriteService from '../../core/services/favoriteService';
import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { Favorite, Clear } from '@material-ui/icons';
import SpaceLink from '../../shared/components/SpaceLink';
import SpaceshipImage from '../../shared/components/SpaceshipImage';
import LaunchDetailGroup from './LaunchDetailGroup';

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
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false
    };
  }

  componentDidMount() {
    const isFavorite = favoriteService.isFavorite(this.props.launch);
    this.setIsFavorite(isFavorite);
  }

  setIsFavorite(value) {
    this.setState({
      isFavorite: value
    });
  }

  handleFavorite(launch) {
    if (this.state.isFavorite) {
      favoriteService.removeFavorite(launch);
      this.setIsFavorite(false);
    } else {
      favoriteService.setFavorite(launch);
      this.setIsFavorite(true);
    }
  }

  render() {
    const launch = this.props.launch;
    const imageSize = 3;
    const launchTime = new Date(launch.windowstart).toUTCString();

    const basic = [
      {
        label: <Typography>Space agency</Typography>,
        value: <Typography>{launch.lsp.name}</Typography>
      },
      {
        label: <Typography>Launch time</Typography>,
        value: <Typography>{launchTime}</Typography>
      },
      {
        label: <Typography>Countdown</Typography>,
        value: (
          <Typography>
            <Countdown date={launch.windowstart} />
          </Typography>
        )
      },
      {
        label: <Typography>Location</Typography>,
        value: <Typography>{launch.location.name}</Typography>
      },
      {
        label: <Typography>Rocket</Typography>,
        value: <Typography>{launch.rocket.name}</Typography>
      }
    ];

    const missions = launch.missions.map(mission => {
      return {
        label: <Typography>{mission.name}</Typography>,
        value: (
          <div>
            <div>
              <Typography>
                <em>
                  <u>Mission type:</u>
                </em>{' '}
                {mission.typeName}
              </Typography>
            </div>
            <div>
              <Typography>
                <em>
                  <u>Description:</u>
                </em>{' '}
                {mission.description}
              </Typography>
            </div>
          </div>
        )
      };
    });

    const infos = launch.lsp.infoURLs.map(info => (
      <div key={info}>
        <Typography variant="caption">
          <SpaceLink link={info} text={info} />
        </Typography>
      </div>
    ));

    const links = [
      {
        label: <Typography>Space agency info</Typography>,
        value: <div>{infos}</div>
      },
      {
        label: <Typography>Space agency wiki</Typography>,
        value: (
          <Typography variant="caption">
            <SpaceLink link={launch.lsp.wikiURL} text={launch.lsp.wikiURL} />
          </Typography>
        )
      },
      {
        label: <Typography>Rocket info</Typography>,
        value: (
          <Typography variant="caption">
            <SpaceLink link={launch.rocket.infoURL} text={launch.rocket.infoURL} />
          </Typography>
        )
      },
      {
        label: <Typography>Rocket wiki</Typography>,
        value: (
          <Typography variant="caption">
            <SpaceLink link={launch.rocket.wikiURL} text={launch.rocket.wikiURL} />
          </Typography>
        )
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
          <IconButton onClick={() => this.handleFavorite(launch)}>
            {this.state.isFavorite ? <Clear /> : <Favorite />}
          </IconButton>
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
