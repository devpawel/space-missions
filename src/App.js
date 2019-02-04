import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import LaunchList from './launch-list/containers/LaunchList';
import LaunchDetail from './launch-detail/containers/LaunchDetail';
import background from './assets/images/hubble_photo_2.jpg';
import BottomNav from './core/components/BottomNav';

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
      <div>
        <Router>
          <Switch>
            <div>
              <div style={style.router}>
                <Route exact path="/" component={LaunchList} />
                <Route path="/details/:id" component={LaunchDetail} />
                <Redirect to="/" push />
              </div>
              <BottomNav />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
