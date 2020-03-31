import React from 'react';
import PropTypes from 'prop-types';

import '../../../public/styles.css';

const TooBig = (props) => {
  return (
    <div className="conditional-messages">
      <div className="icon-wrapper">
        <img className="exclamation-icon" src="https://s3-us-west-1.amazonaws.com/freeseats-imgs/exclamation-mark-sign.svg"></img>
      </div>
      <div className="conditional-caption">Unfortunately, your party is too large to make an online reservation at {props.resName}. We recommend contacting the restaurant directly.</div>
    </div>
  );
};

TooBig.propTypes = {
  resName: PropTypes.string,
};

export default TooBig;
