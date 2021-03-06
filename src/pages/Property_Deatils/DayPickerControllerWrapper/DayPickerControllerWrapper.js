import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps } from 'airbnb-prop-types';
import moment from 'moment';
import omit from 'lodash/omit';

import { DayPickerRangeController } from 'react-dates';

import ScrollableOrientationShape from 'react-dates/src/shapes/ScrollableOrientationShape';

import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';

const propTypes = forbidExtraProps({
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
  startDateOffset: PropTypes.func,
  endDateOffset: PropTypes.func,
  showInputs: PropTypes.bool,
  minDate: momentPropTypes.momentObj,
  maxDate: momentPropTypes.momentObj,
  keepOpenOnDateSelect: PropTypes.bool,
  minimumNights: PropTypes.number,
  isOutsideRange: PropTypes.func,
  isDayBlocked: PropTypes.func,
  isDayHighlighted: PropTypes.func,
  daysViolatingMinNightsCanBeClicked: PropTypes.bool,
  enableOutsideDays: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  orientation: ScrollableOrientationShape,
  verticalHeight: PropTypes.number,
  withPortal: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  renderCalendarInfo: PropTypes.func,
  renderMonthElement: PropTypes.func,
  renderMonthText: PropTypes.func,
  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  renderNavPrevButton: PropTypes.func,
  renderNavNextButton: PropTypes.func,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onOutsideClick: PropTypes.func,
  renderCalendarDay: PropTypes.func,
  renderDayContents: PropTypes.func,
  renderKeyboardShortcutsButton: PropTypes.func,
  renderKeyboardShortcutsPanel: PropTypes.func,
  monthFormat: PropTypes.string,
  isRTL: PropTypes.bool,
});

const defaultProps = {
  // example props for the demo
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,
  startDateOffset: undefined,
  endDateOffset: undefined,
  showInputs: false,
  minDate: null,
  maxDate: null,
  onDateChange: () => { },
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,

  daysViolatingMinNightsCanBeClicked: false,

  // calendar presentation and interaction related props
  orientation: HORIZONTAL_ORIENTATION,
  verticalHeight: undefined,
  withPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  onOutsideClick() { },
  keepOpenOnDateSelect: false,
  renderCalendarInfo: null,
  isRTL: false,
  renderMonthText: null,
  renderMonthElement: null,
  renderKeyboardShortcutsButton: undefined,
  renderKeyboardShortcutsPanel: undefined,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  onPrevMonthClick() { },
  onNextMonthClick() { },
  monthFormat: 'MMMM YYYY',
};

class DayPickerRangeControllerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: null,
      focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onDayBlocked = this.onDayBlocked.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    if (startDate !== null && endDate !== null) {
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
      startDate,
      endDate,
    }, () => {
      this.props.onDateChange(startDate, endDate)
    });
  }

  onDayBlocked(date) {
    return this.props.blockedDays[date.format("YYYY-MM-DD")] === "blocked"
  }

  onFocusChange(focusedInput) {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput,
    });
  }

  render() {
    const { renderCalendarInfo: renderCalendarInfoProp, showInputs } = this.props;
    const {
      errorMessage,
      focusedInput,
      startDate,
      endDate,
    } = this.state;

    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'showInputs',
      `isDayBlocked`,
    ]);

    const startDateString = startDate && startDate.format('YYYY-MM-DD');
    const endDateString = endDate && endDate.format('YYYY-MM-DD');
    const renderCalendarInfo = errorMessage ? () => <div>{errorMessage}</div> : renderCalendarInfoProp;

    return (
      <div style={{ height: '100%' }}>
        {showInputs && (
          <div style={{ marginBottom: 16 }}>
            <input type="text" name="start date" value={startDateString} readOnly />
            <input type="text" name="end date" value={endDateString} readOnly />
          </div>
        )}

        <DayPickerRangeController
          {...props}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          renderCalendarInfo={renderCalendarInfo}
          isDayBlocked={this.onDayBlocked}
        />
      </div>
    );
  }
}

DayPickerRangeControllerWrapper.propTypes = propTypes;
DayPickerRangeControllerWrapper.defaultProps = defaultProps;

export default DayPickerRangeControllerWrapper;