import React from 'react';
import PropTypes from 'prop-types';

import '../../../public/styles.css';

const NoAvailability = (props) => {
  return (
    <div className="conditional-messages">
      <div className="icon-wrapper">
        <img className="exclamation-icon" src="https://s3-us-west-1.amazonaws.com/freeseats-imgs/exclamation-mark-sign.svg"></img>
      </div>
      <div className="conditional-caption">At the moment, there's no online availability within 2.5 hours of {props.time}. Have another time in mind?</div>
    </div>
  );
};

NoAvailability.propTypes = {
  time: PropTypes.string,
};

export default NoAvailability;
