const React = require('react');

const { TypeAhead } = require('mx-react-components');

const Markdown = require('components/Markdown');

class TypeAheadDocs extends React.Component {
  render () {
    return (
      <div>
        <h1>
          TypeAhead
          <label>An interactive list selector, commonly used in forms.</label>
        </h1>

        <h3>Demo</h3>
        <TypeAhead
          items={[
            'JPMorgan Chase',
            'Bank of America',
            'Citigroup',
            'Wells Fargo',
            'The Bank of New York Mellon',
            'U.S. Bancorp',
            'HSBC Bank USA',
            'Capital One',
            'PNC Financial Services',
            'State Street Corporation'
          ]}
          placeholderText='Select a Bank'
          preSelectedItems={[
            'Bank of America',
            'Wells Fargo'
          ]}
        />

        <h3>Usage</h3>
        <h5>items <label>Array</label></h5>
        <p>An array of Strings used for the options list. Example:</p>
        <Markdown lang='js'>
  {`
    [
      'JPMorgan Chase',
      'Bank of America',
      'Citigroup',
      'Wells Fargo',
      'The Bank of New York Mellon',
      'U.S. Bancorp',
      'HSBC Bank USA',
      'Capital One',
      'PNC Financial Services',
      'State Street Corporation'
    ]
  `}
        </Markdown>

        <h5>onItemRemove <label>Function</label></h5>
        <p>A method to be called whenever an item is removed by the user. It will be passed 2 parameters: the item removed, an updated array of selected items. Example:</p>
        <Markdown lang='js'>
  {`
    _handleItemRemoved (item, selectedItems) {
      console.log(item + ' was removed from the list');
    }

    <TypeAhead
      // ..other props
      onItemRemove={_handleItemRemoved)
    />
  `}
        </Markdown>

        <h5>onItemSelect <label>Function</label></h5>
        <p>A method to be called whenever an item is selected by the user. It will be passed 2 parameters: the item selected, an updated array of selected items. Example:</p>
        <Markdown lang='js'>
  {`
    _handleItemSelected (item, selectedItems) {
      console.log(item + ' was selected from the list');
    }

    <TypeAhead
      // ..other props
      onItemSelect={_handleItemSelected)
    />
  `}
        </Markdown>

        <h5>placeholderText <label>String</label></h5>
        <p>Default: 'Select Filters'</p>
        <p>The text to display by default when no items have been selected.</p>

        <h5>preSelectedItems <label>Array</label></h5>
        <p>An array of Strings to be displayed as selected options by default. These values should be contained in the items Array. These values will be the starting point of the TypeAhead's selected values state. Once the user begins interacting with the TypeAhead, they will be ignored.</p>

        <h3>Example</h3>
        <Markdown>
  {`
    <TypeAhead
      items={[
        'JPMorgan Chase',
        'Bank of America',
        'Citigroup',
        'Wells Fargo',
        'The Bank of New York Mellon',
        'U.S. Bancorp',
        'HSBC Bank USA',
        'Capital One',
        'PNC Financial Services',
        'State Street Corporation'
      ]}
      placeholderText='Select a Bank'
      preSelectedItems={[
        'Bank of America',
        'Wells Fargo'
      ]}
    />
  `}
        </Markdown>
      </div>
    );
  }
}

module.exports = TypeAheadDocs;