// eslint-disable react/jsx-indent rule added for proper <Markdown /> formatting
/* eslint-disable react/jsx-indent */
const React = require('react');
const { Link } = require('react-router-dom');

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
        />

        <h3>Usage</h3>
        <h5>baseColor <label>String</label></h5>
        <p>The color of the <Code>input</Code> border on focus.</p>
        <p>*This prop is deprecated, please use <Code>themes</Code> instead.</p>

        <h5>elementProps <label>Object</label></h5>
        <p>Pass props directly to the <Code>input</Code> element. ie. placeholder, value, onchange, etc.</p>

        <h5>focusOnLoad <label>Boolean</label></h5>
        <p>Focus <Code>input</Code> on load, default of false.</p>

        <h5>handleResetClick <label>Function</label></h5>
        <p>The function that will execute when <Code>rightIcon</Code> is clicked. This prop will not work properly unless <Code>rightIcon</Code> is also declared. </p>

        <h5>icon <label>String</label></h5>
        <p>The type of icon to display in the left side of the <Code>input</Code>.</p>

        <h5>rightIcon <label>String</label></h5>
        <p>The type of icon to display in the right side of the <Code>input</Code>. This icon is clickable and will execute the function specified in the <Code>handleResetClick</Code> prop.  This prop will not work properly unless <Code>handleResetClick</Code> is also declared.</p>

        <h5>styles <label>Object</label></h5>
        <p>Allows style additions or overrides to specific component elements including:</p>
          <ul >
          <li><Code>wrapper</Code>: the outermost element of the component.</li>
          <li><Code>activeWrapper</Code>: the outermost element of the component when active.</li>
          <li><Code>input</Code>: the component's <Code>input</Code> element.</li>
          <li><Code>icon</Code>: the icon located in the left side of the <Code>input</Code> element.</li>
          <li><Code>rightIcon</Code>: the icon located in the right side of the <Code>input</Code> element.</li>
          </ul>
          <p>*<Code>styles</Code> will override defaults and conflicting <Code>themes</Code></p>

        <h5>theme <label>Object</label></h5>
        <p>Customize the component&apos;s look. See <Link to='/components/theme'>Theme</Link> for more information. Themes will be overridden by conflicting <Code>styles</Code></p>

        <h5>type <label>String</label></h5>
        <p>Specifies the <Code>input</Code> type. Default <Code>type</Code> is text.</p>

        <h5>valid <label>Boolean</label></h5>
        <p>Indicates whether the value of Input field is valid. If it is not valid, the input field will have a red border.</p>

        <h3>Example</h3>
        <Markdown>
          {`
          <SimpleInput
            baseColor={'red'}
            elementProps={{
              placeholder: 'Type something'
            }}
            focusOnLoad={true}
            handleResetClick={myRightIconClickCallbackFunction}
            icon={'bike'}
            rightIcon={'close-solid'}
            styles={{
              wrapper: { backgroundColor: 'red', border: '4px solid green' },
              activeWrapper: { backgroundColor: 'blue', border: '4px solid red' },
              input: { color: 'purple' },
              icon: { paddingLeft: '40px' },
              rightIcon: { paddingRight: '40px' }
            }}
            theme={{ Colors: { PRIMARY: 'orange' } }}
            valid={false}
          />
        `}
        </Markdown>
      </div>
    );
  }
}

module.exports = SimpleInputDocs;
