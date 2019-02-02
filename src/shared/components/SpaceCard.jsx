import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SpaceshipImage from '../../shared/components/SpaceshipImage';
import Countdown from 'react-countdown-now';
import './SpaceCard.css';

const style = {
  root: {
    position: 'relative',
    cursor: 'pointer',
    margin: '1rem'
  },
  title: {
    position: 'absolute',
    bottom: '0rem',
    width: '100%',
    padding: '0.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  countdown: {
    position: 'absolute',
    top: '0rem',
    width: '100%',
    padding: '0.2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    fontSize: '0.7rem',
    textAlign: 'right'
  }
};

export default class SpaceCard extends Component {
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

  render() {
    // array of image sizes
    // "imageSizes": [320, 480, 640, 720, 768, 800, 960, 1024, 1080, 1280, 1440, 1920]
    const imageSize = 0;
    const launch = this.props.launch;

    return (
      <div
        style={style.root}
        onMouseEnter={() => this.showDetails(true)}
        onMouseLeave={() => this.showDetails(false)}
      >
        <SpaceshipImage
          src={launch.rocket.imageURL}
          size={launch.rocket.imageSizes[imageSize]}
          alt={launch.rocket.name}
        />
        <Typography style={style.countdown} variant="body2">
          <Countdown date={launch.windowstart} />
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

// return (
//   <div style={style.root} className="root">
//     <div className="card">
//       <div className="card-face card-front">
//           <SpaceshipImage
//             src={launch.rocket.imageURL}
//             size={launch.rocket.imageSizes[imageSize]}
//             alt={launch.rocket.name}
//           />
//           <Typography style={style.title} variant="body2">
//             {launch.name}
//           </Typography>
//           <Typography style={style.countdown} variant="body2">
//             <Countdown date={launch.windowstart} />
//           </Typography>
//       </div>
//       <div className="card-face card-back">
//         <SpaceshipImage
//           src={launch.rocket.imageURL}
//           size={launch.rocket.imageSizes[imageSize]}
//           alt={launch.rocket.name}
//         />
//       </div>
//     </div>
//   </div>
// );
