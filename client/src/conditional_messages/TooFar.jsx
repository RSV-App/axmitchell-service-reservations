import React from 'react';
import PropTypes from 'prop-types';

import '../../../public/styles.css';

const TooFar = (props) => {
  return (
    <div className="conditional-messages">
      <div className="icon-wrapper">
        <img className="exclamation-icon" src="https://s3-us-west-1.amazonaws.com/freeseats-imgs/exclamation-mark-sign.svg"></img>
      </div>
      <div className="conditional-caption">Unfortunately, {props.resName} doesn't take online reservations that far in advance. Have another time in mind?</div>
    </div>
  );
};

TooFar.propTypes = {
  resName: PropTypes.string,
};

export default TooFar;
