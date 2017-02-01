const React = require('react');
const moment = require('moment');

const { DatePickerFullScreen } = require('mx-react-components');

const Markdown = require('components/Markdown');

class DatePickerFullScreenDocs extends React.Component {
  render () {
    return (
      <div>
        <h1>
          DatePickerFullScreen
          <label>Used to display and edit a start and end value with the option to define preset start/end values.</label>
        </h1>

        <h3>Demo</h3>
        <DatePickerFullScreen
          closeOnDateSelect={true}
          defaultDate={moment().unix()}
          showDayBorders={false}
          title='Select A Date'
          useInputForSelectedDate={false}
        />

        <h3>Usage</h3>
        <h5>closeOnDateSelect <label>Boolean</label></h5>
        <p>Default: false</p>
        <p>If set to `true`, the calendar will be close after the user selects a data.</p>

        <h5>defaultDate <label>Number (unix timestamp)</label></h5>
        <p>This sets the default selected date on component mount.</p>

        <h5>format <label>String</label></h5>
        <p>Default: 'MMM D, YYYY'</p>
        <p>This is used to determine the format of the selected date. It should follow the Moment.js conventions outlined <a href='http://momentjs.com/docs/#/parsing/string-format/' target='_blank'>here</a>.</p>

        <h5>inputStyle <label>Object</label></h5>
        <p>Style object used to style the selected date input.</p>

        <h5>locale <label>String</label></h5>
        <p>Default: 'en'</p>
        <p>This is used to format the dates, day names, month names, etc based on the locale.</p>

        <h5>minimumDate <label>Number (unix timestamp)</label></h5>
        <p>If set, the user will not be able to select a date prior to this date.</p>

        <h5>onDateSelect <label>Function</label></h5>
        <p>A function to be called when the user has selected a date. The selected date timestamp will be passed to this function.</p>

        <h5>placeholderText <label>String</label></h5>
        <p>Default: Select A Date</p>
        <p>A string used as placeholder text for the selected date input when it is empty.</p>

        <h5>placeholderTextStyle <label>Object</label></h5>
        <p>A style object used to style the placeholderText.</p>

        <h5>showDayBorders <label>Boolean</label></h5>
        <p>Default: false</p>
        <p>If set to 'true', then borders will be shown around each date in the calendar.</p>

        <h5>title <label>String</label></h5>
        <p>If a value is provided, it will be displayed above the calendar.</p>

        <h5>useInputForSelectedDate <label>Boolean</label></h5>
        <p>Default: true</p>
        <p>If set to 'true', the user will be able to edit the selected date by typing. If set to 'false', the user will only be able to change the selected date by interacting with the calendar.</p>

        <h3>Example</h3>
        <Markdown>
  {`
    <DatePickerFullScreen
      closeOnDateSelect={true}
      showDayBorders={false}
      title='Select A Date'
    />
  `}
        </Markdown>
      </div>
    );
  }
}

module.exports = DatePickerFullScreenDocs;