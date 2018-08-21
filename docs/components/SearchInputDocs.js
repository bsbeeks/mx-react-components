// eslint-disable react/jsx-indent rule added for proper <Markdown /> formatting
/* eslint-disable react/jsx-indent */
const React = require('react');
const { Link } = require('react-router');

const { SearchInput } = require('mx-react-components');

const Markdown = require('components/Markdown');

class SearchInputDocs extends React.Component {
  state = {
    searchKeyword: ''
  };

  _handleInputChange = (e) => {
    this.setState({
      searchKeyword: e.target.value
    });
  };

  _handleResetClick = () => {
    this.setState({
      searchKeyword: ''
    });
  };

  render () {
    return (
      <div>
        <h1>
          Search Input
          <label>A search input box</label>
        </h1>

        <h3>Demo</h3>
        <SearchInput
          handleResetClick={this._handleResetClick}
          onChange={this._handleInputChange}
          placeholder='Type to search'
          searchKeyword={this.state.searchKeyword}
        />

        <h3>Usage</h3>
        <h5>elementRef <label>Function</label></h5>
        <p>A callback function for getting the ref of the wrapping input of the SearchInput component.</p>

        <h5>focusOnLoad <label>Boolean</label></h5>
        <p>If true, focusOnLoad immedaitely focuses the input when the component mounts.</p>

        <h5>handleResetClick <label>Function</label></h5>
        <p>A method to be called when reset icon is clicked, in the demo above it is used to clear the input value.</p>

        <h5>onBlur <label>Function</label></h5>
        <p>A method to be called when the user clicks the mouse outside the component.</p>

        <h5>onChange <label>Function</label></h5>
        <p>A method to be called as the user types in the search input field.</p>

        <h5>placeholder <label>String</label></h5>
        <p>The text to show before the user starts typing or when the search input field is empty.</p>

        <h5>searchKeyword <label>String</label></h5>
        <p>Sets the value of the search input field.</p>

        <h5>styles <label>Object</label></h5>
        <p>Styles object used to override default styles.</p>

        <h5>theme <label>Object</label></h5>
        <p>Customize the component&apos;s look. See <Link to='/components/theme'>Theme</Link> for more information.</p>

        <h3>Example</h3>
        <Markdown>
        {`
          <SearchInput
            placeholder='Type to search'
          />
        `}
        </Markdown>
      </div>
    );
  }
}

module.exports = SearchInputDocs;
