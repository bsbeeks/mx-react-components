const React = require('react');
const Radium = require('radium');
const moment = require('moment');

const Icon = require('./Icon');

const StyleConstants = require('../constants/Style');

function validDate(props, propName, componentName, location) {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string') {
        return moment(value).isValid() ? null : new Error(propName + ' in ' + componentName + " is not a valid date");
    }
  }

  return null;
}

class DatePicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDate: null,
      selectedDate: moment(this.props.defaultDate).unix(),
      showCalendar: false
    };
  }

  _handleDateSelect (date) {
    if (this.props.closeOnDateSelect) {
      this._handleBlur();
    }
    this.setState({
      selectedDate: date
    });

    this.props.onDateSelect(moment.unix(date).format(this.props.format));
  }

  _handlePreviousClick () {
    const selectedDate = moment.unix(this.state.selectedDate).locale(this.props.locale);
    let currentDate = this.state.currentDate ? this.state.currentDate.locale(this.props.locale) : selectedDate;

    currentDate = moment(currentDate.startOf('month').subtract(1, 'm'), this.props.format);

    this.setState({
      currentDate
    });
  }

  _handleNextClick () {
    const selectedDate = moment.unix(this.state.selectedDate).locale(this.props.locale);
    let currentDate = this.state.currentDate ? this.state.currentDate.locale(this.props.locale) : selectedDate;

    currentDate = moment(currentDate.endOf('month').add(1, 'd'), this.props.format);

    this.setState({
      currentDate
    });
  }

  _renderMonthTable (currentDate, selectedDate) {
    const days = [];
    const startDate = moment(currentDate, this.props.format).startOf('month').startOf('week');
    const endDate = moment(currentDate, this.props.format).endOf('month').endOf('week');
    const minimumDate = this.props.minimumDate ? moment(this.props.minimumDate, this.props.format) : null;

    while (startDate.isBefore(endDate)) {
      const isCurrentMonth = startDate.month() === currentDate.month();
      const isCurrentDay = startDate.format(this.props.format) === selectedDate.format(this.props.format);
      let day;

      if (startDate.isBefore(minimumDate)) {
        day = (
          <div
            key={startDate.month() + '-' + startDate.date()}
            style={styles.calendarDay}
          >
            <div
              key={startDate.format('DDDD')}
              style={[styles.calendarDayContent, styles.calendarDayDisabled]}
            >
              {startDate.date()}
            </div>
          </div>);
      } else {
        day = (
          <div
            key={startDate.month() + '-' + startDate.date()}
            onClick={this._handleDateSelect.bind(this, startDate.unix())}
            style={[
              styles.calendarDay,
              isCurrentMonth && styles.currentMonth
            ]}
          >
            <div
              key={startDate.format('DDDD')}
              style={[styles.calendarDayContent, isCurrentDay && styles.currentDay]}
            >
              <div style={styles.calendarDayText}>{startDate.date()}</div>
            </div>
          </div>);
      }

      if (this.props.showDayBorders) {
        day.props.style.push([styles.borderRight, styles.borderBottom]);
      }

      days.push(day);
      startDate.add(1, 'd');
    }

    return days;
  }

  _renderScrim (styles) {
    if (this.props.useScrim && this.state.showCalendar) {
      return (
        <div style={[styles.scrim, this.props.scrimStyle]}/>
      );
    }
  }

  _renderSelectedDate () {
    if (this.props.useInputForSelectedDate) {
      return (
        <div>
          <input
            key='input'
            onClick={this._toggleCalendar.bind(this)}
            style={styles.input}
            type='text'
            value={moment.unix(this.state.selectedDate).format(this.props.format)}
          />
          <Icon
            onClick={this._toggleCalendar.bind(this)}
            size='28px'
            style={styles.calendarIcon}
            type={this.state.showCalendar ? 'caret-up' : 'caret-down'}
          />
        </div>
      );
    } else {
      return (
        <div
          key='selectedDate'
          onClick={this._toggleCalendar.bind(this)}
          style={styles.selectedDate}
        >
          {moment.unix(this.state.selectedDate).format(this.props.format)}
        </div>
      );
    }
  }

  _renderTitle (styles) {
    if (this.props.title) {
      return (
        <div key='title' style={styles.title}>
          {this.props.title}
        </div>
      );
    }
  }

  _toggleCalendar () {
    this.setState({
      showCalendar: !this.state.showCalendar
    });
  }

  _handleBlur () {
    this.setState({
      showCalendar: false
    });
  }

  _renderCaret () {
    if (this.state.showCalendar) {
      return (
        <Icon
          onClick={this._toggleCalendar.bind(this)}
          size='20px'
          style={styles.caret}
          type='caret-up'
        />);
    } else {
      return (
        <Icon
          onClick={this._toggleCalendar.bind(this)}
          size='20px'
          style={styles.caret}
          type='caret-down'
        />);
    }
  }

  render () {
    const selectedDate = moment.unix(this.state.selectedDate).locale(this.props.locale);
    const currentDate = this.state.currentDate ? this.state.currentDate.locale(this.props.locale) : selectedDate;

    return (
      <div
        onBlur={this._handleBlur.bind(this)}
        style={[styles.component, { fontSize: this.props.fontSize }, styles.clearFix]}
        tabIndex='0'
      >
        <div key='componentTop' style={[styles.componentTop, this.state.showCalendar && styles.componentTopOpen]}>
          {this._renderSelectedDate()}
          {this.props.showCaret ? this._renderCaret() : null}
        </div>
        <div key='componentBottom' style={[styles.componentBottom, this.state.showCalendar && styles.calendarShow]}>
          {this._renderTitle(styles)}
          <div key='calendarHeader' style={[styles.calendarHeader, { borderBottomStyle: this.props.showDayBorders ? 'solid' : 'none' }, styles.clearFix]}>
            <Icon
              onClick={this._handlePreviousClick.bind(this)}
              size='32px'
              style={[styles.navIcon, styles.navLeft, this.props.showDayBorders && styles.borderRight]}
              type='caret-left'
            />
            {currentDate.format('MMMM YYYY')}
            <Icon
              onClick={this._handleNextClick.bind(this)}
              size='32px'
              style={[styles.navIcon, styles.navRight, this.props.showDayBorders && styles.borderLeft]}
              type='caret-right'
            />
          </div>
          <div style={styles.calendarContainer}>
            {this._renderMonthTable(currentDate, selectedDate)}
          </div>
          <div style={styles.clearFix}></div>
        </div>
        {this._renderScrim(styles)}
      </div>
    );
  }
}

DatePicker.propTypes = {
  closeOnDateSelect: React.PropTypes.bool,
  defaultDate: validDate,
  fontSize: React.PropTypes.string,
  format: React.PropTypes.string,
  locale: React.PropTypes.string,
  minimumDate: React.PropTypes.string,
  onDateSelect: React.PropTypes.func,
  scrimStyle: React.PropTypes.object,
  showCaret: React.PropTypes.bool,
  showDayBorders: React.PropTypes.bool,
  title: React.PropTypes.string,
  useInputForSelectedDate: React.PropTypes.bool,
  useScrim: React.PropTypes.bool
};

DatePicker.defaultProps = {
  closeOnDateSelect: false,
  defaultDate: moment(),
  fontSize: StyleConstants.FontSize,
  format: 'YYYY-MM-DD',
  locale: 'en',
  onDateSelect () {},
  scrimStyle: {},
  showCaret: true,
  showDayBorders: false,
  title: null,
  useInputForSelectedDate: true,
  useScrim: false
};

const styles = {
  caret: {
    color: '#CCCCCC',
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  calendarDay: {
    color: '#DDDDDD',
    float: 'left',
    paddingBottom: '11%',
    position: 'relative',
    width: '13.5%'
  },
  borderBottom: {
    borderBottom: '#E5E5E5',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px'
  },
  borderRight: {
    borderRight: '#E5E5E5',
    borderRightStyle: 'solid',
    borderRightWidth: '1px'
  },
  borderLeft: {
    borderLeft: '#E5E5E5',
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px'
  },
  calendarContainer: {
    width: '100%',
    padding: '0px 2px 10px 6px'
  },
  calendarDayContent: {
    borderRadius: '50%',
    height: '32px',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    width: '32px',

    ':hover': {
      backgroundColor: '#359BCF',
      color: '#FFFFFF',
      cursor: 'pointer'
    }
  },
  calendarDayText: {
    borderRadius: '100%',
    fontSize: StyleConstants.FontSize,
    fontWeight: 'normal',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%) translateX(-50%)'
  },
  calendarDayDisabled: {
    ':hover': {
      background: 'none',
      color: '#DDDDDD'
    }
  },
  calendarHeader: {
    color: '#606060',
    borderBottom: '#E5E5E5',
    borderBottomWidth: '1px',
    fontSize: '15px',
    fontWeight: 'normal',
    padding: '5px 0px 7px 0px',
    position: 'relative',
    textAlign: 'center',
    textTransform: 'none'
  },
  calendarIcon: {
    color: '#DDDDDD',
    position: 'absolute',
    right: '12.8px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  calendarShow: {
    display: 'block'
  },
  clearFix: {
    clear: 'both',
    marginBottom: '15px'
  },
  component: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontFamily: StyleConstants.FontFamily,
    WebkitAppearance: 'none',
    width: '100%',

    '@media (max-width: 768px)': {
      fontSize: '8px'
    },

    ':focus': {
      boxShadow: 'none',
      outline: 'none'
    }
  },
  componentBottom: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: '0 1px 1px 1px',
    boxShadow: StyleConstants.BoxShadow,
    boxSizing: 'border-box',
    display: 'none',
    maxWidth: '270px',
    padding: '0px 0px 0px 0px',
    margin: '0 0 40px 0',
    position: 'absolute',
    width: '100%',
    zIndex: 10
  },
  componentTop: {
    borderBottomWidth: '1px',
    borderColor: '#E5E5E5',
    borderRadius: '3px 3px 3px 3px',
    borderStyle: 'solid',
    borderWidth: '1px 1px 1px 1px',
    position: 'relative',
    padding: '5px 5px 5px 5px'
  },
  componentTopOpen: {
    borderBottomWidth: '0',
    borderRadius: '3px 3px 0 0'
  },
  currentDay: {
    backgroundColor: '#359BCF',
    color: '#FFFFFF'
  },
  currentMonth: {
    color: '#606060'
  },
  input: {
    backgroundColor: '#FFFFFF',
    border: 'none',
    fontSize: StyleConstants.FontSize,
    outline: 'none',
    paddingBottom: '10px',
    WebkitAppearance: 'none',
    width: '80%',

    ':focus': {
      border: 'none',
      boxShadow: 'none',
      outline: 'none'
    }
  },
  navIcon: {
    cursor: 'pointer'
  },
  navLeft: {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  navRight: {
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  scrim: {
    position: 'fixed',
    zIndex: 9,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  selectedDate: {
    color: '#606060',
    cursor: 'pointer',
    fontSize: StyleConstants.FontSize,
    padding: '5px 0 5px 5px',
    verticalAlign: 'middle',
    width: '100%',

    ':hover': {
      color: '#359BCF'
    }
  },
  title: {
    backgroundColor: '#666666',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '7px 0px 7px 0px',
    fontSize: StyleConstants.FontSize,
    margin: '1px'
  }
};



module.exports = Radium(DatePicker);