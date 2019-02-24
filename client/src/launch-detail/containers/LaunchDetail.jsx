import React, { Component } from 'react';
import config from '../../config/api';
import { Grid } from '@material-ui/core';
import LaunchPaper from '../components/LaunchPaper';
import Loading from '../../shared/components/Loading';

const style = {
  root: {
    margin: '1rem 0rem'
  },
  loading: {
    textAlign: 'center',
    color: 'white'
  }
};

export default class LaunchDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launch: null
    };
  }

  componentDidMount() {
    const url = `${config.baseUrl}/launch/${this.props.match.params.id}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        return this.setState({
          launch: res.launches[0]
          // launch: res
        });
      })
      .catch(err => console.log('Error:', err));
  }

  render() {
    return (
      <Grid container justify="center" style={style.root}>
        <Grid item xs={12} md={8}>
          <Loading data={this.state.launch} style={style.loading} color={'inherit'} size={100}>
            <LaunchPaper launch={this.state.launch} />
          </Loading>
        </Grid>
      </Grid>
    );
  }
}
