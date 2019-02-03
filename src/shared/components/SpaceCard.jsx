import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SpaceshipImage from '../../shared/components/SpaceshipImage';
import Countdown from 'react-countdown-now';
import { withRouter } from 'react-router-dom';

const style = {
  root: {
    position: 'relative',
    cursor: 'pointer',
    margin: '1rem',
    width: '320px',
    height: '480px',
    backgroundImage: 'radial-gradient(circle, #cacaca, #b8b8b8)'
  },
  imageContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    position: 'absolute',
    bottom: '0rem',
    width: '100%',
    padding: '0.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white'
  },
  countdown: {
    position: 'absolute',
    top: '0rem',
    width: '100%',
    padding: '0.2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    fontSize: '0.7rem',
    textAlign: 'right',
    color: 'white'
  },
  agency: {
    textAlign: 'left',
    color: 'white'
  }
};

class SpaceCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  }

  showDetails(mouseOn) {
    this.setState({
      showDetails: mouseOn
    });
  }

  goToDetails() {
    this.props.history.push(`/details/${this.props.launch.id}`);
  }

  render() {
    // array of image sizes
    // "imageSizes": [320, 480, 640, 720, 768, 800, 960, 1024, 1080, 1280, 1440, 1920]
    const imageSize = 0;
    const launch = this.props.launch;

    return (
      <div
        style={style.root}
        onClick={() => this.goToDetails()}
        onMouseEnter={() => this.showDetails(true)}
        onMouseLeave={() => this.showDetails(false)}
      >
        <div style={style.imageContainer}>
          <SpaceshipImage
            src={launch.rocket.imageURL}
            size={launch.rocket.imageSizes[imageSize]}
            alt={launch.rocket.name}
          />
        </div>
        <Typography style={style.countdown} variant="body2">
          <div style={style.agency}>{this.props.launch.lsp.name}</div>
          Launch in: <Countdown date={launch.windowstart} />
        </Typography>
        {this.state.showDetails ? (
          <Typography style={style.title} variant="body2">
            {launch.missions[0].description}
          </Typography>
        ) : (
          <Typography style={style.title} variant="body2">
            {launch.name}
          </Typography>
        )}
      </div>
    );
  }
}

export default withRouter(SpaceCard);
