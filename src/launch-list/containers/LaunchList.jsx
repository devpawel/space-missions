import React, { Component } from 'react';
import config from '../../config/api';
import LaunchItem from '../components/LaunchItem';
import Grid from '@material-ui/core/Grid';
import SpaceCard from '../../shared/components/SpaceCard';

export default class LaunchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launches: []
    };
  }

  componentDidMount() {
    const url = `${config.baseUrl}/launches`;
    fetch(url)
      .then(res => res.json())
      .then(res =>
        this.setState({
          launches: res
        })
      )
      .catch(err => console.log('Error:', err));
  }

  render() {
    return (
      <Grid container justify="center" spacing={12}>
        {this.state.launches.map((launch, index) => (
          <Grid item>
            <SpaceCard key={index} launch={launch} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
