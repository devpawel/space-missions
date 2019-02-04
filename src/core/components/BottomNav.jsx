import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Favorite, ViewModule } from '@material-ui/icons';

const style = {
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'lightblue'
  }
};

class BottomNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // const { value } = this.state;

    // TODO: sync active nav with path
    return (
      <BottomNavigation style={style.nav} showLabels>
        <BottomNavigationAction label="List" component={Link} to="/" icon={<ViewModule />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);
