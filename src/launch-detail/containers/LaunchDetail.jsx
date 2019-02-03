import React, { Component } from 'react';
import config from '../../config/api';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactJson from 'react-json-view';

export default class LaunchDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launch: null
    };
  }

  componentDidMount() {
    const url = `${config.baseUrl}/launches/${this.props.match.params.id}`;
    fetch(url)
      .then(res => res.json())
      .then(res =>
        this.setState({
          launch: res
        })
      )
      .catch(err => console.log('Error:', err));
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item>
          <Typography variant="body2">
            <Paper>Hello</Paper>
          </Typography>
        </Grid>
        <Grid item>
          <ReactJson src={this.state.launch} theme="monokai" />
        </Grid>
      </Grid>
    );
  }
}
