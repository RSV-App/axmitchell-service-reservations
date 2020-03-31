import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

import '../../../public/styles.css';

const AvailTimes = (props) => {
  const checkTime = props.time.split(' ');
  const checkHour = checkTime[0].split(':');
  const hour = Number(checkHour[0]);
  const timeSlots = props.availTimeSlots;
  let times;
  const currentHour = dateFns.format(new Date(), 'h:mm A');

  let mapTimes = (arr) => {
    return arr.map(time => {
      return <div className="avail-time" key={time} >
        <span className="avail-time-caption">{time}</span>
      </div>;
    });
  };

  if (dateFns.format(props.selectedDate, 'M/D/YY') === dateFns.format(new Date(), 'M/D/YY')) {
    const todayTimes = [];
    if (currentHour === props.time) {
      for (let i = 0; i < timeSlots.length; i++) {
        const formattedH = Number(timeSlots[i].split(' ')[0].split(':')[0]);
        if (formattedH === hour) {
          todayTimes.push(timeSlots[i]);
        }
      }

      times = mapTimes(todayTimes);

      if (todayTimes.length === 0) {
        props.noAvailability();
      }
    } else {
      if (hour === 4) {
        const timesFor4 = [];
        for (let i = 0; i < timeSlots.length; i++) {
          const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
          if (hour === 6) {
            timesFor4.push(timeSlots[i]);
          }
        }

        times = mapTimes(timesFor4);

        if (timesFor4.length === 0) {
          props.noAvailability();
        }

      } else if (hour === 5) {
        const timesFor5 = [];

        for (let i = 0; i < timeSlots.length; i++) {
          const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
          if (hour === 6 || hour === 7) {
            timesFor5.push(timeSlots[i]);
          }
        }

        times = mapTimes(timesFor5);

        if (timesFor5.length === 0) {
          props.noAvailability();
        }

      } else if (hour === 9) {
        const timesFor9 = [];
        for (let i = 0; i < timeSlots.length; i++) {
          const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
          if (hour === 7 || hour === 8) {
            timesFor9.push(timeSlots[i]);
          }
        }

        times = mapTimes(timesFor9);

        if (timesFor9.length === 0) {
          props.noAvailability();
        }

      } else if (hour === 10) {
        const timesFor10 = [];
        for (let i = 0; i < timeSlots.length; i++) {
          const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
          if (hour === 8 || timeSlots[i] === '7:30 PM' || timeSlots[i] === '7:45 PM') {
            timesFor10.push(timeSlots[i]);
          }
        }

        times = mapTimes(timesFor10);

        if (timesFor10.length === 0) {
          props.noAvailability();
        }

      } else {
        times = mapTimes(props.availTimeSlots);

        if (times.length === 0) {
          props.noAvailability();
        }
      }
    }
  } else {
    if (hour === 4) {
      const timesFor4 = [];
      for (let i = 0; i < timeSlots.length; i++) {
        const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
        if (hour === 6) {
          timesFor4.push(timeSlots[i]);
        }
      }

      times = mapTimes(timesFor4);

      if (timesFor4.length === 0) {
        props.noAvailability();
      }

    } else if (hour === 5) {
      const timesFor5 = [];

      for (let i = 0; i < timeSlots.length; i++) {
        const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
        if (hour === 6 || hour === 7) {
          timesFor5.push(timeSlots[i]);
        }
      }

      times = mapTimes(timesFor5);

      if (timesFor5.length === 0) {
        props.noAvailability();
      }

    } else if (hour === 9) {
      const timesFor9 = [];
      for (let i = 0; i < timeSlots.length; i++) {
        const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
        if (hour === 7 || hour === 8) {
          timesFor9.push(timeSlots[i]);
        }
      }

      times = mapTimes(timesFor9);

      if (timesFor9.length === 0) {
        props.noAvailability();
      }

    } else if (hour === 10) {
      const timesFor10 = [];
      for (let i = 0; i < timeSlots.length; i++) {
        const hour = Number(timeSlots[i].split(' ')[0].split(':')[0]);
        if (hour === 8 || timeSlots[i] === '7:30 PM' || timeSlots[i] === '7:45 PM') {
          timesFor10.push(timeSlots[i]);
        }
      }

      times = mapTimes(timesFor10);

      if (timesFor10.length === 0) {
        props.noAvailability();
      }

    } else {
      times = mapTimes(props.availTimeSlots);

      if (times.length === 0) {
        props.noAvailability();
      }
    }
  }

  return (
    <div className="availTimes-wrapper">
      <span>
        <div className="availTimes-caption-wrapper">
          <span className="availTimes-caption">Select a time:</span>
        </div>
        <div className="times-wrapper">
          {times}
        </div>
      </span>
    </div>
  );
};

AvailTimes.propTypes = {
  availTimeSlots: PropTypes.array,
  time: PropTypes.string,
  selectedDate: PropTypes.any.isRequired,
  noAvailability: PropTypes.func,
};

export default AvailTimes;
