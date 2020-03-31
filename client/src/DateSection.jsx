import React from 'react';
import PropTypes from 'prop-types';

const DateSection = (props) => {
  return (
    <div className="date-wrapper">
      <div className="date-title">Date</div>
      <div className="display-date" onClick={props.handleClick} >
        {props.clickedDate}
      </div>
    </div>
  );
};

DateSection.propTypes = {
  handleClick: PropTypes.func,
  clickedDate: PropTypes.string,
};

export default DateSection;
