import React, { Component } from 'react';
import config from '../../config/api';
import LaunchItem from '../components/LaunchItem';
import Grid from '@material-ui/core/Grid';

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
      <Grid container justify="center" spacing={16}>
        <Grid item xs={8}>
          {this.state.launches.map((launch, index) => (
            <LaunchItem key={index} launch={launch} />
          ))}
        </Grid>
      </Grid>
    );
  }
}
