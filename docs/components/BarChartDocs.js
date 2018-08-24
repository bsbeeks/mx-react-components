// eslint-disable react/jsx-indent rule added for proper <Markdown /> formatting
/* eslint-disable react/jsx-indent */
const React = require('react');
const d3 = require('d3');
const moment = require('moment');

const Markdown = require('components/Markdown');
const { Link } = require('react-router');

const { BarChart, BarTimeXAxis, Styles } = require('mx-react-components');

const margins = {
  top: 50,
  right: 20,
  bottom: 40,
  left: 20
};
const width = 500 - margins.right - margins.left;
const height = 300 - margins.top - margins.bottom;

const chartData = [];

for (let i = 0; i < 12; i++) {
  const date = moment().add(i, 'M');

  chartData.push({
    label: date.unix(),
    value: Math.round(Math.random() * (10000 - -10000) + -10000)
  });
}

chartData[4].value = 0;

class BarChartDocs extends React.Component {
  state = {
    buttonIsActive: false,
    spinnerIsActive: false
  };

  _handleButtonClick = () => {
    this.setState({
      buttonIsActive: !this.state.buttonIsActive
    });
  };

  _handleSpinnerClick = () => {
    this.setState({
      spinnerIsActive: !this.state.spinnerIsActive
    });
  };

  render () {
    const styles = this.styles();

    const ticks = chartData.map(d => {
      return d.label;
    });

    const xAxisScale = d3.scale.ordinal()
      .domain(ticks)
      .rangeRoundBands([0, width], 0.2);

    const xAxis = (
      <BarTimeXAxis
        tickValues={ticks}
        timeAxisFormat='MMM'
        transform={`translate(${margins.left},${height + margins.top + margins.bottom / 2})`}
        xScaleFunction={xAxisScale}
      />
    );

    return (
      <div>
        <h1>
          BarChart
          <label>A D3 bar chart that supports labels for the bars and tooltips.</label>
        </h1>

        <h3 style={styles.demoHeader}>Demo</h3>

        <BarChart
          animateOnHover={true}
          data={chartData}
          margin={margins}
          minBarHeight={1}
          style={styles.chart}
          threshold={Math.round(Math.random() * 10000)}
          xAxis={xAxis}
        />

        <h3>Usage</h3>
        <h5>animateOnHover <label>Boolean</label></h5>
        <p>Default: `false`</p>
        <p>If true, individual bars will animate on hover.</p>

        <h5>barRadius <label>Number</label></h5>
        <p>Default: 3</p>
        <p>Radius for the bar applied to the top for positive and bottom for negative values.</p>

        <h5>data<label>Array</label></h5>
        <p>An array of objects that label and value properties. Each object represents a bar. Optionally allows a color property to override the default color of the bar. Example:</p>
        <Markdown lang='js'>
  {`
    [{
      label: 'label', //optional - Anything that can be parsed by d3 as an axis value.
      color: '#E3E6E7', //string - hexcode or rgb
      value: 10 //number - required, value of bar, determines bar size
    }]
  `}
        </Markdown>

        <h5>height <label>Number</label></h5>
        <p>Default: 300</p>
        <p>Height in pixels of the SVG that renders the bars.</p>

        <h5>initialSelectedData <label>Object</label></h5>
        <p>Used to set initial selected bar of the graph. If not provided, defaults to no selected bar.</p>

        <h5>margin <label>Object</label></h5>
        <p>Object containing the desired padding on the SVG to account for axis labels and tooltips.</p>
        <p>Default:</p>
        <Markdown lang='js'>
  {`
    {
      top: 20,
      right: 20,
      bottom: 40,
      left: 20
    }
  `}
        </Markdown>

        <h5>minBarHeight <label>Number</label></h5>
        <p>Default: 0</p>
        <p>The minimum height for a bar if the value of the data is 0.</p>
        <p>NOTE: If minBarHeight is less than barRadius, the radius will be changed to equal the minBarHeight for the bar.</p>

        <h5>onClick <label>Function</label></h5>
        <p>Callback function that will run when a bar is clicked. Provided the data values from the bar clicked.</p>

        <h5>onHover <label>Function</label></h5>
        <p>Callback function that will run when a bar is hovered over. Provided the data values from the bar hovered over.</p>

        <h5>showTooltips <label>Boolean</label></h5>
        <p>Default: `true`</p>
        <p>Shows tooltips on BarChart when set to `true`.</p>

        <h5>style <label>Object</label></h5>
        <p>A object that allows you to override the internal styles</p>
        <p>Available keys: </p>
        <Markdown>
  {`
      bar,
      positiveBarHover,
      negativeBarHover,
      positiveBarClicked,
      negativeBarClicked,
      threshold,
      tooltipContainer,
      tooltipText
  `}
        </Markdown>

        <h5>theme <label>Object</label></h5>
        <p>Customize the component's look. See <Link to='/components/theme'>Theme</Link> for more information.</p>

        <h5>threshold <label>Number</label></h5>
        <p>A value used to render an optional threshold line.</p>

        <h5>tooltipFormat <label>Function</label></h5>
        <p>A function that is called to format the value being displayed in the tooltip.</p>

        <h5>width <label>Number</label></h5>
        <p>Default: 500</p>
        <p>Width of the SVG; bars will determine their individual width accordingly.</p>

        <h5>xAxis<label>Element</label></h5>
        <p>An element representing the xAxis. You are in charge of transforming to the correct location.</p>

        <h5>yAxis<label>Element</label></h5>
        <p>An element representing the yAxis. You are in charge of transforming to the correct location.</p>

        <h3>Example</h3>
        <Markdown lang='js'>
  {`
    const margins = {
      top: 50,
      right: 20,
      bottom: 40,
      left: 20
    };
    const width = 500 - margins.right - margins.left;
    const height = 300 - margins.top - margins.bottom;

    const data = [{label: 1485470502878, value:, 1337}, {...}];

    const threshold = 2000;

    const ticks = data.map(d => {
      return d.label;
    });
    const xAxisScale = d3.scale.ordinal()
      .domain(ticks)
      .rangeRoundBands([0, width], 0.2);

    const xAxis = (
      <BarTimeXAxis
        tickValues={ticks}
        timeAxisFormat='MMM'
        transform={'translate(${margins.left},${height + margins.top + margins.bottom / 2})'}
        xScaleFunction={xAxisScale}
      />
    );

    return (
      <BarChart
        data={data}
        margin={margins}
        minBarHeight={1}
        threshold={threshold}
        xAxis={xAxis}
      />
    );
  `}
        </Markdown>
      </div>

    );
  }

  styles = () => {
    return {
      demoHeader: {
        marginBottom: 20
      },
      chart: {
        positiveBarClicked: {
          fill: Styles.Colors.SUCCESS
        }
      }
    };
  };
}

module.exports = BarChartDocs;
