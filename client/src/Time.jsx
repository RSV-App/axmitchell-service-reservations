import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '6:00 PM',
      current: new Date(),
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.onChangeFuncs = this.onChangeFuncs.bind(this);
  }

  handleTimeChange(e) {
    const timeSplit = (e.target.value).split(':');
    let convertTime;
    if (timeSplit[0] === '00') {
      convertTime = '12:' + timeSplit[1];
      this.props.handleTime(convertTime);
      this.setState({
        time: convertTime,
      });
    } else if (Number(timeSplit[0]) > 12) {
      let hour = Math.abs(12 - Number(timeSplit[0])).toString();
      convertTime = hour + ':' + timeSplit[1];
      this.props.handleTime(convertTime);
      this.setState({
        time: convertTime,
      });
    } else {
      this.props.handleTime(e.target.value);
      this.setState({
        time: e.target.value,
      });
    }
  }

  onChangeFuncs(e) {
    this.handleTimeChange(e);
    this.props.getBtnBack();
  }

  render() {
    const times = [];
    const currentHour = dateFns.format(new Date(), 'H');
    const currentMin = dateFns.format(new Date(), 'm');

    if (dateFns.format(this.props.selectedDate, 'M/D/YY') === dateFns.format(new Date(), 'M/D/YY')) {
      for (let i = currentHour; i < 24; i++) {
        if (i === 0) {
          times.push(
            <option key={i} value={`${i}0:00 AM`}>
              {i + 12}:00 AM
            </option>,
            <option key={`${i}:30`} value={`${i}0:30 AM`}>
              {i + 12}:30 AM
            </option>
          );
        } else if (i > 0) {
          if (i > 12) {
            times.push(
              <option key={i} value={`${i}:00 PM`}>
                {i - 12}:00 PM
              </option>,
              <option key={`${i}:30`} value={`${i}:30 PM`}>
                {i - 12}:30 PM
              </option>
            );
          } else if (i < 12) {
            times.push(
              <option key={i} value={`${i}:00 AM`}>
                {i}:00 AM
              </option>,
              <option key={`${i}:30`} value={`${i}:30 AM`}>
                {i}:30 AM
              </option>
            );
          } else if (i == 12) {
            times.push(
              <option key={i} value={`${i}:00 PM`}>
                {i}:00 PM
              </option>,
              <option key={`${i}:30`} value={`${i}:30 PM`}>
                {i}:30 PM
              </option>
            );
          }
        }
      }
      if (currentMin <= 30) {
        times.splice(0, 1);
      }
      if (currentMin > 30) {
        times.splice(0, 2);
      }
    } else {
      for (let i = 0; i < 24; i++) {
        if (i === 0) {
          times.push(
            <option key={i} value={`${i}0:00 AM`}>
              {i + 12}:00 AM
						</option>,
            <option key={`${i}:30`} value={`${i}0:30 AM`}>
              {i + 12}:30 AM
						</option>
          );
        } else if (i > 0) {
          if (i > 12) {
            times.push(
              <option key={i} value={`${i}:00 PM`}>
                {i - 12}:00 PM
							</option>,
              <option key={`${i}:30`} value={`${i}:30 PM`}>
                {i - 12}:30 PM
							</option>
            );
          } else if (i < 12) {
            times.push(
              <option key={i} value={`${i}:00 AM`}>
                {i}:00 AM
							</option>,
              <option key={`${i}:30`} value={`${i}:30 AM`}>
                {i}:30 AM
							</option>
            );
          } else if (i === 12) {
            times.push(
              <option key={i} value={`${i}:00 PM`}>
                {i}:00 PM
							</option>,
              <option key={`${i}:30`} value={`${i}:30 PM`}>
                {i}:30 PM
							</option>
            );
          }
        }
      }
    }

    return (
      <div className="time-wrapper">
        <div className="time-title">Time</div>
        <select className="time-list" defaultValue="6:00 PM" onChange={(e) => { this.onChangeFuncs(e); }}>
          {times}
        </select>
      </div>
    );
  }
}

Time.propTypes = {
  handleTime: PropTypes.func,
  getBtnBack: PropTypes.func,
  selectedDate: PropTypes.any.isRequired,
};

export default Time;
