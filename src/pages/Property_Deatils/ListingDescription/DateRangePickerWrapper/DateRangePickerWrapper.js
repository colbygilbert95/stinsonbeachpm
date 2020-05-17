import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import {connect} from 'react-redux'


import { DateRangePicker } from 'react-dates';
import { DateRangePickerPhrases } from 'react-dates/src/defaultPhrases';
import DateRangePickerShape from 'react-dates/src/shapes/DateRangePickerShape';
import {
  START_DATE,
  END_DATE,
  HORIZONTAL_ORIENTATION,
  ANCHOR_LEFT,
  NAV_POSITION_TOP,
} from 'react-dates/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';

const propTypes = {
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,

  ...omit(DateRangePickerShape, [
    'startDate',
    'endDate',
    'onDatesChange',
    'focusedInput',
    'onFocusChange',
  ]),
};

const defaultProps = {
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,
  handleDateChange: () => { },
  required: false,
  startDateId: START_DATE,
  startDatePlaceholderText: 'Checkin',
  endDateId: END_DATE,
  endDatePlaceholderText: 'Checkout',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: true,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  block: false,
  small: false,
  regular: false,
  renderMonthText: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  isRTL: false,
  navPosition: NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() { },
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,
  stateDateWrapper: date => date,
};


class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.dates.startDate || props.initialStartDate ,
      endDate: props.dates.endDate || props.initialEndDate,
      blockedDays: props.blockedDays
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onDayBlocked = this.onDayBlocked.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    const { stateDateWrapper } = this.props;

    if(startDate !== null && endDate !== null) {
      for (
        let j = moment(startDate);
        j.isBefore(endDate, "day");
        j.add(1, "days")
      ) {
        if (this.props.blockedDays[j.format("YYYY-MM-DD")] === "blocked") {
          startDate = endDate
          endDate = null;
          this.onFocusChange({ focusedInput: startDate })

        }
      }
    }
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    }, () => {
      this.props.handleDateChange(startDate, endDate)
      
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  onDayBlocked(date) {
    return this.props.blockedDays[date.format("YYYY-MM-DD")] === "blocked"
  }
 

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
      'isDayBlocked',
      'isDayHighlighted',
    ]);
    return (
      <div className={this.props.required ? 'error' : ''}>
        <DateRangePicker
          {...props}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          isDayBlocked={this.onDayBlocked}
          isDayHighlighted={this.onDayHighlighted}
        />
      </div>
    );
  }
}

DateRangePickerWrapper.propTypes = propTypes;
DateRangePickerWrapper.defaultProps = defaultProps;

const mapStateToProps = state => ({
  dates: state.booking.dates
})

export default connect(mapStateToProps)(DateRangePickerWrapper);