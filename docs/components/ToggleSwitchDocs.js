// eslint-disable react/jsx-indent rule added for proper <Markdown /> formatting
/* eslint-disable react/jsx-indent */
const React = require('react');

const { ToggleSwitch } = require('mx-react-components');

const Markdown = require('components/Markdown');

class ToggleSwitchDocs extends React.Component {
  state = {
    checked: false
  }

  toggle = () => {
    this.setState({ checked: !this.state.checked });
  }

  render () {
    return (
      <div>
        <h1>
          ToggleSwitch
          <label>An iOS style toggle for controlling boolean type values.</label>
        </h1>

        <h3>Demo</h3>
        <ToggleSwitch checked={this.state.checked} onToggle={this.toggle} />

        <h3>Usage</h3>
        <h5>checked <label>Boolean</label></h5>
        <p>Default:`false`</p>
        <p>The current state of the toggle switch. Think of it like a checkbox.</p>

        <h5>elementRef <label>Function</label></h5>
        <p>A function callback for getting the ref of the wrapping div on the ToggleSwitch component.</p>

        <h5>falseIcon<label>string</label></h5>
        <p>An Icon that can be displayed while `checked === false`.</p>

        <h5>leftLabel <label>String</label></h5>
        <p>Default: Off</p>
        <p>The text to display on the left side of the component.</p>

        <h5>onToggle <label>Function</label></h5>
        <p>A method that will be called whenever the toggle is clicked. The method will be passed the active position, either `true` or `false`.</p>

        <h5>rightLabel <label>String</label></h5>
        <p>Default: On</p>
        <p>The text to display on the right side of the component.</p>

        <h5>showIcons <label>Boolean</label></h5>
        <p>Default: `true`</p>
        <p>If set to `false`, the `trueIcon` and `falseIcon` will not be rendered.</p>

        <h5>showLabels <label>Boolean</label></h5>
        <p>Default: `false`</p>
        <p>If set to `false`, the `leftLabel` and `rightLabel` will not be rendered.</p>

        <h5>styles <label>Object</label></h5>
        <p>A style object that allows you to override any style attribute in the component.</p>

        <h5>trueIcon<label>string</label></h5>
        <p>An Icon that can be displayed while `checked === true`.</p>

        <h3>Example</h3>
        <Markdown>
        {`
          <ToggleSwitch
            checked={true}
          />
        `}
        </Markdown>
      </div>
    );
  }
}

module.exports = ToggleSwitchDocs;
