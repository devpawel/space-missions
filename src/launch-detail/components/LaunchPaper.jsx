import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactJson from 'react-json-view';

const style = {
  root: {
    padding: '0.5rem'
  }
};

export default class LaunchPaper extends Component {
  render() {
    const launch = this.props.launch;

    return (
      <Paper style={style.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography>{launch.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography>Hello</Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactJson src={launch} theme="monokai" />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
