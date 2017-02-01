const React = require('react');

const { Styles } = require('mx-react-components');

const Markdown = require('components/Markdown');

class StylesDocs extends React.Component {
  render () {
    return (
      <div>
        <h1>
          Styles
          <label>Contains values that are used throughout mx-react-components. Exposing it makes it easy to use the same colors, font sizes, fonts, etc throughout any application.</label>
        </h1>

        <h3>Usage</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          {Object.keys(Styles.Colors).map(color => {
            return (
              <div key={color} style={{ marginBottom: 20, height: 120, width: 120, textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div key={color} style={{ width: 80, height: 80, borderRadius: '100%', backgroundColor: Styles.Colors[color] }} />
                <div style={{ color: Styles.Colors.ASH, fontSize: Styles.FontSizes.SMALL, flex: '1 0 100%' }}>({color})</div>
              </div>
            );
          })}
        </div>
        <h5>Neutral Colors</h5>
        <Markdown lang='js'>
          {`
            Styles.Colors.SLATE // #2F363E
            Styles.Colors.CHARCOAL // #56595A
            Styles.Colors.ASH // #ACB0B3
            Styles.Colors.FOG // #E3E6E7
            Styles.Colors.PORCELAIN // #F7F8F8
            Styles.Colors.WHITE // #FFFFFF
          `}
        </Markdown>
        <h5>Accent Colors</h5>
        <Markdown lang='js'>
          {`
            Styles.Colors.PRIMARY // #359BCF
            Styles.Colors.BANANA // #FCBC19
            Styles.Colors.EGGPLANT // #6C3F6F
            Styles.Colors.LEMON // #EBBE54
            Styles.Colors.LIME // #14C764
            Styles.Colors.ORANGE // #EF7625
            Styles.Colors.PLUM // #AE547A
            Styles.Colors.STRAWBERRY // #EB3434
            Styles.Colors.TOMATO // #CD5A57
            Styles.Colors.LIGHT_LIME // #97E9BB,
            Styles.Colors.LIGHT_BANANA // #F7DD7C,
            Styles.Colors.LIGHT_STRAWBERRY // #FF6B61,
          `}
        </Markdown>

        <h5>Chart Colors</h5>
        <Markdown lang='js'>
          {`
            Styles.Colors.BASE_ARC // #F5F5F5
            Styles.Colors.YELLOW // #F6A01E
            Styles.Colors.GREEN // #00A89C
            Styles.Colors.BLUE // #359BCF
            Styles.Colors.RED // #EE4235
          `}
        </Markdown>

        <h5>Category Colors</h5>
        <Markdown lang='js'>
          {`
            Styles.Colors.AUTO_TRANSPORT // '#4B9DBC'
            Styles.Colors.BILLS_UTILITIES // '#EF9B2C'
            Styles.Colors.BUSINESS // '#B3DE8C'
            Styles.Colors.EDUCATION // '#F8AB3A'
            Styles.Colors.ENTERTAINMENT // '#AB5B89'
            Styles.Colors.FEES // '#FF9696'
            Styles.Colors.FINANCIAL // '#6BCDDB'
            Styles.Colors.FOOD_DINING // '#58AC7B'
            Styles.Colors.GIFTS_CHARITY // '#347AA5'
            Styles.Colors.HEALTH_FITNESS // '#5C446E'
            Styles.Colors.HOME // '#FFD84D'
            Styles.Colors.INCOME // '#133F49'
            Styles.Colors.INVESTMENTS // '#FF7070'
            Styles.Colors.KIDS // '#82D196'
            Styles.Colors.PETS // '#85507B'
            Styles.Colors.PERSONAL_CARE // '#338B7A'
            Styles.Colors.SHOPPING // '#CF5F84'
            Styles.Colors.TAXES // '#32588D'
            Styles.Colors.TRAVEL // '#e37434'
            Styles.Colors.UNCATEGORIZED // '#FA5555'
          `}
        </Markdown>

        <h5>Scrim Color</h5>
        <Markdown lang='js'>
          {`
            Styles.Colors.SCRIM // rgba(247,248,248,0.9)
          `}
        </Markdown>

        <h5>FontSizes</h5>
        <Markdown lang='js'>
          {`
            Styles.FontSizes.JUMBO // 30px
            Styles.FontSizes.XXLARGE // 20px
            Styles.FontSizes.XLARGE // 17px
            Styles.FontSizes.LARGE // 15px
            Styles.FontSizes.MEDIUM // 13px
            Styles.FontSizes.SMALL // 11px
            Styles.FontSizes.TINY // 10px
          `}
        </Markdown>

        <h5>Fonts</h5>
        <p>In order to leverage the ProximaNova fonts, you will need to include those fonts in your application using @font_face and make sure the names match.</p>

        <Markdown lang='js'>
          {`
            Styles.Fonts.THIN // ProximaNovaThin, Helvetica, Arial, sans-serif
            Styles.Fonts.LIGHT // ProximaNovaLight, Helvetica, Arial, sans-serif
            Styles.Fonts.REGULAR // ProximaNovaRegular, Helvetica, Arial, sans-serif
            Styles.Fonts.ITALIC // ProximaNovaRegularItalic, Helvetica, Arial, sans-serif
            Styles.Fonts.SEMIBOLD // ProximaNovaSemibold, Helvetica, Arial, sans-serif
          `}
        </Markdown>

        <h5>Box Shadows</h5>
        <Markdown lang='js'>
          {`
            Styles.ShadowLow: '0 1px 2px rgba(0,0,0,0.1)',
            Styles.ShadowMed: '0 2px 6px rgba(0,0,0,0.1)',
            Styles.ShadowHigh: '0 10px 30px 5px rgba(0,0,0,0.1)',
          `}
        </Markdown>

        <h5>Spacing</h5>
        <Markdown lang='js'>
          {`
            Styles.Spacing.XLARGE: 30,
            Styles.Spacing.LARGE: 20,
            Styles.Spacing.MEDIUM: 15,
            Styles.Spacing.SMALL: 10,
            Styles.Spacing.XSMALL: 5
          `}
        </Markdown>

        <h5>BreakPoints</h5>
        <Markdown lang='js'>
          {`
            Styles.BreakPoints.large: 1200,
            Styles.BreakPoints.medium: 768,
            Styles.BreakPoints.small: 320
          `}
        </Markdown>

        <h5>Adjust Color</h5>
        <p>Takes a HEX color and adjust amount and returns a HEX value of the new color. Negative numbers darken whereas positive numbers lighten the color.</p>

        <Markdown lang='js'>
          {`
            color: Styles.adjustColor(Styles.Colors.PRIMARY, -15); //#359BCF is adjusted and returned as #268CC0
          `}
        </Markdown>

        <h5>Adjust HEX Opacity</h5>
        <p>Takes a HEX color and opacity amount and returns a rgba value of the new color.</p>

        <Markdown lang='js'>
          {`
            color: Styles.adjustHexOpacity(Styles.Colors.PRIMARY, 0.5); //#359BCF, 0.5 is returned as rgba(53, 155, 207, 0.5)
          `}
        </Markdown>

        <h5>Linear Gradient</h5>
        <p>Takes two HEX colors and optional opacity amounts and returns a linear gradient string. The first color is requried, the other color and opacities are optional. If only the first color is provided, the gradient will be a single color from 0.8 to 1.</p>
        <div style={{ background: Styles.linearGradient(Styles.Colors.PRIMARY), height: 100, width: '100%' }}></div>

        <Markdown lang='js'>
          {`
            background: Styles.linearGradient(Styles.Colors.PRIMARY);
          `}
        </Markdown>

        <div style={{ background: Styles.linearGradient(Styles.Colors.PRIMARY, 0.2), height: 100, width: '100%' }}></div>

        <Markdown lang='js'>
          {`
            background: Styles.linearGradient(Styles.Colors.PRIMARY, 0.2);
          `}
        </Markdown>

        <div style={{ background: Styles.linearGradient(Styles.Colors.ORANGE, 1, Styles.Colors.LEMON, 1), height: 100, width: '100%' }}></div>

        <Markdown lang='js'>
          {`
            background: Styles.linearGradient(Styles.Colors.ORANGE, 1, Styles.Colors.LEMON, 1);
          `}
        </Markdown>


        <h5>Get Window Size</h5>
        <p>Returns the <code style={{ display: 'inline', padding: 3 }}>Styles.BreakPoints</code> key for the current window width.</p>
        <Markdown lang='js'>
          {`
            Styles.getWindowSize() // e.g. returns 'large'
          `}
        </Markdown>

        <h3>Example</h3>
        <Markdown lang='js'>
          {`
            const { Styles } = require('mx-react-components');

            const styles = {
              color: Styles.Colors.STRAWBERRY
            };
          `}
        </Markdown>
      </div>
    );
  }
}

module.exports = StylesDocs;
