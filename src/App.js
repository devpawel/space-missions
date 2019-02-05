import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import BottomNav from './core/components/BottomNav';
import LaunchList from './launch-list/containers/LaunchList';
import LaunchDetail from './launch-detail/containers/LaunchDetail';
import Favorites from './favorites/containers/Favorites';
import Chat from './chat/container/Chat';
import background from './assets/images/hubble_photo_2.jpg';

const styles = theme => ({
  '@global': {
    body: {
      backgroundImage: "url('" + background + "')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100%'
    }
  }
});

const style = {
  router: {
    marginBottom: '3.5rem'
  }
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div style={style.router}>
            <Switch>
              <Route exact path="/" component={LaunchList} />
              <Route path="/details/:id" component={LaunchDetail} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/chat" component={Chat} />
              <Redirect to="/" push />
            </Switch>
          </div>
          <BottomNav />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
