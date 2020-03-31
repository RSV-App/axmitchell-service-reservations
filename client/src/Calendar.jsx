import React from 'react';
import moment from 'moment';
import dateFns from 'date-fns';
import PropTypes from 'prop-types';

import '../../public/styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekDays: moment.weekdaysShort(),
      currentMonth: new Date(),
      currentDay: new Date(),
      clickedDay: new Date(),
    };

    this.prevMonthClick = this.prevMonthClick.bind(this);
    this.nextMonthClick = this.nextMonthClick.bind(this);
    this.changeDayClick = this.changeDayClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.hideCalendar();
    }
  }

  currentDay() {
    return dateFns.format(this.state.currentDay, 'D');
  }

  changeDayClick(e) {
    if (dateFns.compareAsc(e, dateFns.subDays(new Date(), 1)) === 1) {
      this.props.handleDate(e);
      this.props.changeDate(e);
      this.props.getBtnBack();
      this.props.hideCalendar();
    }
  }

  prevMonthClick() {
    const todayDate = moment().format('MMMM YYYY');
    if (dateFns.format(this.state.currentMonth, 'MMMM YYYY') !== todayDate) {
      this.setState({
        currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
      });
    }
  }

  nextMonthClick() {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
    });
  }

  renderDays() {
    const dateFormat = 'dddd';
    const days = [];

    const startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <td key={i} className="calendar-day-res">{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}</td>,
      );
    }
  }

  renderCells() {
    const monthStart = dateFns.startOfMonth(this.state.currentMonth);
    const startDate = dateFns.startOfWeek(monthStart);

    const dateFormat = 'D';
    const rows = [];
    let rowCount = 0;
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (rowCount < 6) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        let currentDay = '';

        // conditional styling for dates older than today's date
        let pastCurrentDay = '';
        if (dateFns.compareAsc(day, dateFns.subDays(new Date(), 1)) === -1) {
          pastCurrentDay = 'pastCurrentDay';
        }

        // conditional styling for prev month dates
        let prevMonthStyle = '';
        const getPrevMonth = dateFns.subMonths(this.state.currentMonth, 1);
        const prevMonth = dateFns.format(getPrevMonth, 'MMMM');

        if (prevMonth === dateFns.format(day, 'MMMM')) {
          prevMonthStyle = 'prevMonthStyle';
        }

        // conditional styling for next month dates
        let nextMonthStyle = '';
        const getNextMonth = dateFns.addMonths(this.state.currentMonth, 1);
        const nextMonth = dateFns.format(getNextMonth, 'MMMM');

        if (nextMonth === dateFns.format(day, 'MMMM')) {
          nextMonthStyle = 'nextMonthStyle';
        }

        // hover date styling
        let hoverDates = '';
        if (pastCurrentDay) {
          prevMonthStyle = '';
        } else {
          hoverDates = 'hoverStyle';
        }

        if (!pastCurrentDay && !prevMonthStyle && !nextMonthStyle) {
          currentDay = dateFns.format(day, 'M/D/YY') === dateFns.format(this.props.selectedDate, 'M/D/YY') ? 'selectedDate' : '';
        }

        if (currentDay === 'selectedDate') {
          hoverDates = '';
        }

        const classes = `${prevMonthStyle} ${nextMonthStyle} ${pastCurrentDay} ${hoverDates} calendar-day-res ${currentDay}`;

        days.push(
          <td key={i} onClick={() => this.changeDayClick(dateFns.parse(cloneDay))} className={classes}>
            {formattedDate}
          </td >,
        );

        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <tr key={day}>{days}</tr>,
      );

      rowCount++;
      days = [];
    }

    return rows;
  }

  render() {
    const weekDaysName = this.state.weekDays.map(day => <th key={day} className="week-day-res">{day}</th>);

    // conditional styling for prev button
    let prevMonthButton = 'prev-month';
    const currentMonth = dateFns.format(new Date(), 'MMMM YYYY');
    const clickedMonth = dateFns.format(this.state.currentMonth, 'MMMM YYYY');
    if (currentMonth === clickedMonth) {
      prevMonthButton = 'greyed-prev-month';
    }

    return (
      <div onClick={this.childClickHandler} className="res-calendar-wrapper" ref={this.setWrapperRef}  >

        <div className="res-month-title">
          <div className="col-start">
            <div className={prevMonthButton} onClick={this.prevMonthClick}></div>
          </div>

          <div className="col col-center">
            <span className="res-calendar-nav">{dateFns.format(this.state.currentMonth, 'MMMM YYYY')}</span>
          </div>

          <div className="col-end">
            <div className="next-month" onClick={this.nextMonthClick}></div>
          </div>
        </div>

        <table className="reservations-calendar">
          <thead>
            <tr>{weekDaysName}</tr>
          </thead>
          <tbody>
            {this.renderDays()}
            {this.renderCells()}
          </tbody>
        </table>
      </div>
    );
  }
}

Calendar.propTypes = {
  handleDate: PropTypes.func,
  hideCalendar: PropTypes.func,
  changeDate: PropTypes.func,
  getBtnBack: PropTypes.func,
  selectedDate: PropTypes.any.isRequired,
};

export default Calendar;
