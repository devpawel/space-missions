import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class LaunchDetail extends Component {
  render() {
    return (
      <Grid container justify="center" spacing={12}>
        <Grid item>
          <Typography variant="body2">{this.props.match.params.id}</Typography>
        </Grid>
      </Grid>
    );
  }
}
