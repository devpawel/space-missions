import React, { Component } from 'react';
import favoriteService from '../../core/services/favoriteService';
import { Grid } from '@material-ui/core';
import SpaceCard from '../../shared/components/SpaceCard';

const style = {
  root: {
    margin: '1rem 0rem'
  }
};

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    const favorites = favoriteService.getFavorites();

    if (!favorites) {
      return;
    }

    this.setState({
      favorites: favorites
    });
  }

  render() {
    return (
      <div>
        <Grid container justify="center" style={style.root}>
          {this.state.favorites.map((favorite, index) => (
            <Grid item key={index}>
              <SpaceCard launch={favorite} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
