// eslint-disable react/jsx-indent rule added for proper <Markdown /> formatting
/* eslint-disable react/jsx-indent */
const React = require('react');
const { Link } = require('react-router');

const { SimpleInput } = require('mx-react-components');

const Code = require('components/Code');
const Markdown = require('components/Markdown');

class SimpleInputDocs extends React.Component {
  render () {
    return (
      <div>
        <h1>
          Simple Input
          <label>A simple input field used in forms</label>
        </h1>

        <h3>Demo</h3>
        <SimpleInput
          elementProps={{
            placeholder: 'Type something'
          }}
          // style={{ backgroundColor: 'purple', border: '4px solid green', marginTop: '50px' }}
          styles={{
            wrapper: { backgroundColor: 'red' },
            activeWrapper: { backgroundColor: 'blue' }
          }}

        />

        <h3>Usage</h3>
        <h5>baseColor <label>String</label></h5>
        <p>The color of the <Code>input</Code> border on focus.</p>

        <h5>elementProps <label>Object</label></h5>
        <p>Attributes to pass directly to the <Code>input</Code> element. ie. placeholder, value, onchange, etc.</p>

        <h5>focusOnLoad <label>Boolean</label></h5>
        <p>Focus <Code>input</Code> on load, default of false.</p>

        <h5>handleResetClick <label>Function</label></h5>
        <p>The function that will execute when <Code>rightIcon</Code> is clicked. This prop will not work properly unless <Code>rightIcon</Code> is also declared. </p>

        <h5>icon <label>String</label></h5>
        <p>The name of icon to display in the left side of the <Code>input</Code>.</p>

        <h5>rightIcon <label>String</label></h5>
        <p>The name of icon to display in the right side of the <Code>input</Code>. This icon is clickable and will execute the function specified in the <Code>handleResetClick</Code> prop.  This prop will not work properly unless <Code>handleResetClick</Code> is also declared.</p>

        <h5>style <label>Object</label></h5>
        <p>The styles are applied to the outtermost wrapper element in the component.</p>

        <h5>styles <label>Object</label></h5>
        <p>blah blah</p>

        <h5>theme <label>Object</label></h5>
        <p>Customize the component&apos;s look. See <Link to='/components/theme'>Theme</Link> for more information.</p>

        <h5>type <label>String</label></h5>
        <p>blah blah</p>

        <h5>valid <label>Boolean</label></h5>
        <p>Indicates whether the value of Input field is valid. If it is not valid, the input field will have a red border.</p>

        <h3>Example</h3>
        <Markdown>
          {`
          <SimpleInput
            baseColor={'red'}
            elementProps={{
              onChange: myOnChangeCallbackFunction,
              placeholder: 'Type something'
            }}
            focusOnLoad={true}
            handleResetClick={myRightIconClickCallbackFunction}
            icon={'bike'}
            rightIcon={'close-solid'}
            style={{ backgroundColor: 'purple', border: '4px solid green', marginTop: '50px' }}
          />
        `}
        </Markdown>
      </div>
    );
  }
}

module.exports = SimpleInputDocs;
