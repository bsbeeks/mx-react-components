const React = require('react');

const Changelog = React.createClass({
  render () {
    return (
      <div>
        <h1>Change Log</h1>
        <h3>4.4.3</h3>
        <ul>
          <li>Added isRelative prop to DateRangePicker to allow for alterantive positioning in mobile. (<a href='https://github.com/mxenabled/mx-react-components/pull/406'>#406</a>)</li>
        </ul>

        <h3>4.4.2</h3>
        <ul>
          <li>Drawer.close needs to return a Promise (<a href='https://github.com/mxenabled/mx-react-components/pull/412'>#412</a>)</li>
        </ul>

        <h3>4.4.0</h3>
        <ul>
          <li>Allow for different Drawer sizes (<a href='https://github.com/mxenabled/mx-react-components/pull/409'>#409</a>)</li>
          <li>Reposition the Drawer when the window is resized (<a href='https://github.com/mxenabled/mx-react-components/pull/408'>#408</a>)</li>
          <li>Make the close fn public for closing the Drawer externally (<a href='https://github.com/mxenabled/mx-react-components/pull/405'>#405</a>)</li>
        </ul>

        <h3>4.3.0</h3>
        <ul>
          <li>Moves padding to parent so it can be overwritten in date range picker. (<a href='https://github.com/mxenabled/mx-react-components/pull/402'>#402</a>)</li>
          <li>Disables hover prop for buttons when in a mobile viewport. (<a href='https://github.com/mxenabled/mx-react-components/pull/378'>#378</a>)</li>
        </ul>

        <h3>4.2.23</h3>
        <ul>
          <li>Tabs Component - Fixes error with hoover in mobile. (<a href='https://github.com/mxenabled/mx-react-components/pull/398'>#398</a>)</li>
        </ul>

        <h3>4.2.22</h3>
        <ul>
          <li>DateRangePicker - Adds new prop to close calendar on succesful range selection if set to true. (<a href='https://github.com/mxenabled/mx-react-components/pull/397'>#397</a>)</li>
        </ul>

        <h3>4.2.21</h3>
        <ul>
          <li>Tabs Component - Adds new Tabs component. See docs for details. (<a href='https://github.com/mxenabled/mx-react-components/pull/395'>#395</a>)</li>
        </ul>


        <h3>4.2.19</h3>
        <ul>
          <li>Donut Chart - Preventing too many opening and selection animations from occurring (<a href='https://github.com/mxenabled/mx-react-components/pull/390'>#390</a>)</li>
          <li>Donut Chart - Ensuring opening animation occurs for all present arcs on chart (<a href='https://github.com/mxenabled/mx-react-components/pull/386'>#386</a>)</li>
          <li>Documents - opening browser automatically during npm run dev command</li>
        </ul>

        <h3>4.2.17</h3>
        <ul>
          <li>New Icon - Flag (<a href='https://github.com/mxenabled/mx-react-components/pull/381'>#381</a>)</li>
          <li>New Icon - Split (<a href='https://github.com/mxenabled/mx-react-components/pull/383'>#383</a>)</li>
          <li>SimpleSelect typo fixes for styles (<a href='https://github.com/mxenabled/mx-react-components/pull/382'>#382</a>)</li>
        </ul>

        <h3>4.2.16</h3>
        <ul>
          <li>DisplayInput and Column component fixes/tweaks (<a href='https://github.com/mxenabled/mx-react-components/pull/380'>#380</a>)</li>
        </ul>

        <h3>4.2.15</h3>
        <ul>
          <li>BarChart accepts negative numbers (<a href='https://github.com/mxenabled/mx-react-components/pull/379'>#379</a>)</li>
        </ul>

        <h3>4.2.13</h3>
        <ul>
          <li>Column span prop behaves more like Bootstrap (<a href='https://github.com/mxenabled/mx-react-components/pull/372'>#376</a>)</li>
        </ul>

        <h3>4.2.12</h3>
        <ul>
          <li>Make DisplayInput responsive (<a href='https://github.com/mxenabled/mx-react-components/pull/376'>#376</a>)</li>
        </ul>

        <h3>4.2.11</h3>
        <ul>
          <li>Limit width to 100% on ProgressBar (<a href='https://github.com/mxenabled/mx-react-components/pull/377'>#377</a>)</li>
        </ul>

        <h3>4.2.9</h3>
        <ul>
          <li>Fix React errors for unrecognized attributes (<a href='https://github.com/mxenabled/mx-react-components/pull/375'>#375</a>)</li>
        </ul>

        <h3>4.2.8</h3>
        <ul>
          <li>Gauge - Fix segment colors (<a href='https://github.com/mxenabled/mx-react-components/pull/374'>#374</a>)</li>
        </ul>

        <h3>4.2.7</h3>
        <ul>
          <li>Gauge - Add new gauge component (<a href='https://github.com/mxenabled/mx-react-components/pull/366'>#366</a>)</li>
        </ul>
        <p>New Contributors: <a href='https://github.com/vintagepenguin'>vintagepenguin</a></p>

        <h3>4.2.6</h3>
        <ul>
          <li>Drawer - Position changed from absolute to fixed (<a href='https://github.com/mxenabled/mx-react-components/pull/370'>#370</a>)</li>
          <li>DateTimePicker - Repsonsive update using new grid system (<a href='https://github.com/mxenabled/mx-react-components/pull/367'>#367</a>)</li>
        </ul>

        <h3>4.2.5</h3>
        <ul>
          <li>Fix issue with offset in Column component (<a href='https://github.com/mxenabled/mx-react-components/pull/369'>#369</a>)</li>
        </ul>

        <h3>4.2.4</h3>
        <ul>
          <li>DateRangePicker - Repsonsive update using new grid system (<a href='https://github.com/mxenabled/mx-react-components/pull/368'>#368</a>)</li>
        </ul>

        <h3>4.2.3</h3>
        <ul>
          <li>Add icon prop to SimpleInput (<a href='https://github.com/mxenabled/mx-react-components/pull/362'>#362</a>)</li>
        </ul>

        <h3>4.2.0</h3>
        <ul>
          <li>Add Container component and switch Row and Column to use Bootstrap grid system (<a href='https://github.com/mxenabled/mx-react-components/pull/365'>#365</a>)</li>
          <li>DonuChart default label color now set to ASH (<a href='https://github.com/mxenabled/mx-react-components/pull/360'>#360</a>)</li>
        </ul>

        <h3>4.1.10</h3>
        <ul>
          <li>Add BreakPoint resolutions to Style constants (<a href='https://github.com/mxenabled/mx-react-components/pull/358'>#358</a>)</li>
        </ul>

        <h3>4.1.9</h3>
        <ul>
          <li>Add checks for time and fallback to minimumDate on Calendar. (<a href='https://github.com/mxenabled/mx-react-components/pull/359'>#359</a>)</li>
        </ul>

        <h3>4.1.8</h3>
        <ul>
          <li>Row tweaks to allow onClick and hover state for a row. (<a href='https://github.com/mxenabled/mx-react-components/pull/357'>#357</a>)</li>
        </ul>

        <h3>4.1.7</h3>
        <ul>
          <li>Fixed line-of-credit icon. (<a href='https://github.com/mxenabled/mx-react-components/pull/356'>#356</a>)</li>
        </ul>

        <h3>4.1.6</h3>
        <ul>
          <li>Fix issue with midnight and noon in DateTimePicker for non-chrome browsers. (<a href='https://github.com/mxenabled/mx-react-components/pull/355'>#355</a>)</li>
          <li>Add Spacing to Style constants. (<a href='https://github.com/mxenabled/mx-react-components/pull/354'>#354</a>)</li>
          <li>Change params to objects for Column component. (<a href='https://github.com/mxenabled/mx-react-components/pull/353'>#353</a>)</li>
        </ul>

        <h3>4.1.5</h3>
        <ul>
          <li>Bug fix and minor tweaks to DateRangePicker. (<a href='https://github.com/mxenabled/mx-react-components/pull/352'>#352</a>)</li>
        </ul>

        <h3>4.1.4</h3>
        <ul>
          <li>Adds new Icons including art, business, cash, debts, etc. (<a href='https://github.com/mxenabled/mx-react-components/pull/351'>#351</a>)</li>
        </ul>

        <h3>4.1.3</h3>
        <ul>
          <li>Adds hours and minutes validation to DateTimePicker (<a href='https://github.com/mxenabled/mx-react-components/pull/350'>#350</a>)</li>
        </ul>

        <h3>4.1.2</h3>
        <ul>
          <li>Add default range options to DateRangePicker (<a href='https://github.com/mxenabled/mx-react-components/pull/348'>#348</a>)</li>
        </ul>

        <h3>4.1.1</h3>
        <ul>
          <li>Change Column component to use window.innerWidth (<a href='https://github.com/mxenabled/mx-react-components/pull/346'>#346</a>)</li>
        </ul>

        <h3>4.1.0</h3>
        <ul>
          <li>Add ProgressBar component (<a href='https://github.com/mxenabled/mx-react-components/pull/345'>#345</a>)</li>
        </ul>

        <h3>4.0.3</h3>
        <ul>
          <li>Add plus and bubbleds to Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/344'>#344</a>)</li>
          <li>Add hide/show to Column component (<a href='https://github.com/mxenabled/mx-react-components/pull/343'>#343</a>)</li>
        </ul>

        <h3>4.0.2</h3>
        <ul>
          <li>Add limitLineCircles prop to TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/pull/341'>#341</a>)</li>
        </ul>

        <h3>4.0.1</h3>
        <ul>
          <li>Fix box-sizing issue with ToggleSwitch (<a href='https://github.com/mxenabled/mx-react-components/pull/340'>#340</a>)</li>
        </ul>

        <h3>4.0.0</h3>
        <ul>
          <li><strong>BREAKING CHANGES</strong> to the ToggleSwitch componenet. Please review the documentation. Now supports animations and icons.</li>
          <li>Update ToggleSwitch component (<a href='https://github.com/mxenabled/mx-react-components/pull/310'>#310</a>)</li>
          <li>Add DateTimePicker component (<a href='https://github.com/mxenabled/mx-react-components/pull/338'>#338</a>)</li>
          <li>Fix issue with Calendar component border color (<a href='https://github.com/mxenabled/mx-react-components/pull/339'>#339</a>)</li>
        </ul>

        <h3>3.1.45</h3>
        <ul>
          <li>Adds new Calendar component (<a href='https://github.com/mxenabled/mx-react-components/pull/336'>#336</a>)</li>
        </ul>

        <h3>3.1.44</h3>
        <ul>
          <li>Modal - Add showScrim and showCloseIcon props (<a href='https://github.com/mxenabled/mx-react-components/pull/335'>#335</a>)</li>
        </ul>

        <h3>3.1.43</h3>
        <ul>
          <li>Add Row and Column components for responsive grid (<a href='https://github.com/mxenabled/mx-react-components/pull/331'>#331</a>)</li>
          <li>Add DateRangePicker component (<a href='https://github.com/mxenabled/mx-react-components/pull/309'>#309</a>)</li>
        </ul>

        <h3>3.1.42</h3>
        <ul>
          <li>Drawer component - Add new showScrim prop to control showing scrim for Drawer (<a href='https://github.com/mxenabled/mx-react-components/pull/334'>#334</a>)</li>
        </ul>

        <h3>3.1.41</h3>
        <ul>
          <li>Drawer component - Add new animateLeftDistance prop to control animate in distance (<a href='https://github.com/mxenabled/mx-react-components/pull/333'>#333</a>)</li>
        </ul>

        <h3>3.1.40</h3>
        <ul>
          <li>Changes bottom border on DisplayInput component (<a href='https://github.com/mxenabled/mx-react-components/pull/332'>#332</a>)</li>
        </ul>

        <h3>3.1.39</h3>
        <ul>
          <li>Add RajaIcons to AppConstants (<a href='https://github.com/mxenabled/mx-react-components/pull/330'>#330</a>)</li>
        </ul>

        <h3>3.1.38</h3>
        <ul>
          <li>Add AppConstants with an Icons array (<a href='https://github.com/mxenabled/mx-react-components/pull/329'>#329</a>)</li>
          <li>Fix FileUpload icon colors (<a href='https://github.com/mxenabled/mx-react-components/pull/328'>#328</a>)</li>
        </ul>

        <h3>3.1.37</h3>
        <ul>
          <li>Remove pointer cursor on disabled buttons (<a href='https://github.com/mxenabled/mx-react-components/pull/327'>#327</a>)</li>
          <li>Add Tooltip component  (<a href='https://github.com/mxenabled/mx-react-components/pull/326'>#326</a>)</li>
          <li>Add Icons constant so list of icons can be reused and easily updated  (<a href='https://github.com/mxenabled/mx-react-components/pull/325'>#325</a>)</li>
        </ul>

        <h3>3.1.36</h3>
        <ul>
          <li>Add SimpleSelect component  (<a href='https://github.com/mxenabled/mx-react-components/pull/324'>#324</a>)</li>
        </ul>

        <h3>3.1.35</h3>
        <ul>
          <li>Add Radio Button component (<a href='https://github.com/mxenabled/mx-react-components/pull/323'>#323</a>)</li>
          <li>Change default header color on Drawer component from PORCELAIN to WHITE (<a href='https://github.com/mxenabled/mx-react-components/pull/317'>#317</a>)</li>
        </ul>
        <p>New Contributors: <a href='https://github.com/derek-boman'>derek-boman</a></p>

        <h3>3.1.34</h3>
        <ul>
          <li>Add icon option to select items (<a href='https://github.com/mxenabled/mx-react-components/pull/322'>#322</a>)</li>
        </ul>

        <h3>3.1.33</h3>
        <ul>
          <li>Adds the ability set the color of each bar in the Barchart component (<a href='https://github.com/mxenabled/mx-react-components/pull/321'>#321</a>)</li>
        </ul>

        <h3>3.1.32</h3>
        <ul>
          <li>Adds the ability set the color of a clicked bar for Barchart (<a href='https://github.com/mxenabled/mx-react-components/pull/320'>#320</a>)</li>
        </ul>

        <h3>3.1.31</h3>
        <ul>
          <li>Adds the ability to style the label for DisplayInput (<a href='https://github.com/mxenabled/mx-react-components/pull/319'>#319</a>)</li>
        </ul>

        <h3>3.1.30</h3>
        <ul>
          <li>Return event on click and name transitions for DonutChart animations (<a href='https://github.com/mxenabled/mx-react-components/pull/315'>#315</a>)</li>
        </ul>

        <h3>3.1.29</h3>
        <ul>
          <li>Disabled onClick for `disabled` type button components (<a href='https://github.com/mxenabled/mx-react-components/pull/313'>#313</a>)</li>
        </ul>

        <h3>3.1.28</h3>
        <ul>
          <li>Adds new icons duplicate and kabob horizontal to the Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/311'>#311</a>)</li>
        </ul>

        <h3>3.1.27</h3>
        <ul>
          <li>Fixed a typo in the DatePicker component (<a href='https://github.com/mxenabled/mx-react-components/pull/308'>#308</a>)</li>
        </ul>

        <h3>3.1.26</h3>
        <ul>
          <li>Add updateOnDrag to RangeSelector and remove debounce (<a href='https://github.com/mxenabled/mx-react-components/pull/307'>#307</a>)</li>
        </ul>

        <h3>3.1.25</h3>
        <ul>
          <li>Fix width issue with DisplayInput component (<a href='https://github.com/mxenabled/mx-react-components/pull/304'>#304</a>)</li>
          <li>Clean up DatePicker (<a href='https://github.com/mxenabled/mx-react-components/pull/306'>#306</a>)</li>
        </ul>

        <h3>3.1.24</h3>
        <ul>
          <li>
            Allow users of the Drawer component to pass custom styles for the header and content sections  (<a href='https://github.com/mxenabled/mx-react-components/pull/305'>#305</a>)
          </li>
        </ul>

        <h3>3.1.23</h3>
        <ul>
          <li>
            Adds Barchart component (<a href='https://github.com/mxenabled/mx-react-components/pull/300'>#300</a>)
          </li>
        </ul>

        <h3>3.1.19</h3>
        <ul>
          <li>
            Fix left margin for buttons with an icon (<a href='https://github.com/mxenabled/mx-react-components/pull/303'>#303</a>)
          </li>
        </ul>

        <h3>3.1.18</h3>
        <ul>
          <li>
            Use Flex for icon and text centering on buttons (<a href='https://github.com/mxenabled/mx-react-components/pull/302'>#302</a>)
          </li>
        </ul>

        <h3>3.1.17</h3>
        <ul>
          <li>
            Fixed styles in Button and ButtonGroup components (<a href='https://github.com/mxenabled/mx-react-components/pull/299'>#299</a>)
          </li>
        </ul>

        <h3>3.1.16</h3>
        <ul>
          <li>
            Fixed styles in the ButtonGroup component (<a href='https://github.com/mxenabled/mx-react-components/pull/296'>#296</a>)
          </li>
        </ul>

        <h3>3.1.15</h3>
        <ul>
          <li>
            Add style object to the Drawer component (<a href='https://github.com/mxenabled/mx-react-components/pull/294'>#294</a>)
          </li>
        </ul>

        <h3>3.1.14</h3>
        <ul>
          <li>
            Add bill pay, camera and transfer icons to the Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/293'>#293</a>)
          </li>
        </ul>

        <h3>3.1.13</h3>
        <ul>
          <li>
            Fix positioning in Drawer header and button text alignment (<a href='https://github.com/mxenabled/mx-react-components/pull/292'>#292</a>)
          </li>
        </ul>

        <h3>3.1.12</h3>
        <ul>
          <li>
            Updated the Date Picker component(<a href='https://github.com/mxenabled/mx-react-components/pull/290'>#290</a>)
          </li>
        </ul>

        <h3>3.1.11</h3>
        <ul>
          <li>
            Updated the Drawer component(<a href='https://github.com/mxenabled/mx-react-components/pull/289'>#289</a>)
          </li>
        </ul>

        <h3>3.1.10</h3>
        <ul>
          <li>
            Added 'check-skinny' and 'close-skinny' icons in the Icon component(<a href='https://github.com/mxenabled/mx-react-components/pull/288'>#288</a>)
          </li>
        </ul>

        <h3>3.1.9</h3>
        <ul>
          <li>
            Added 'sort' icon in the Icon component(<a href='https://github.com/mxenabled/mx-react-components/pull/288'>#286</a>)
          </li>
        </ul>

        <h3>3.1.8</h3>
        <ul>
          <li>
            Fix button text margin in Button component (<a href='https://github.com/mxenabled/mx-react-components/pull/285'>#285</a>)
          </li>
        </ul>

        <h3>3.1.7</h3>
        <ul>
          <li>
            Fix TypeError for Modal component in Firefox (<a href='https://github.com/mxenabled/mx-react-components/pull/284'>#284</a>)
          </li>
        </ul>

        <h3>3.1.6</h3>
        <ul>
          <li>
            Add 'No' and 'Subtract' icons in Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/283'>#283</a>)
          </li>
        </ul>

        <h3>3.1.5</h3>
        <ul>
          <li>
            Add box shadow constants to styles (<a href='https://github.com/mxenabled/mx-react-components/pull/282'>#282</a>)
          </li>
          <li>
            Fix new eslint errors after upgrading to eslint@2.7.0 and eslint-config-mx@1.2.7(<a href='https://github.com/mxenabled/mx-react-components/pull/281'>#281</a>)
          </li>
        </ul>

        <h3>3.1.4</h3>
        <ul>
          <li>
            Allow children in toggleSwitch to access component state (<a href='https://github.com/mxenabled/mx-react-components/pull/268'>#268</a>)
          </li>
        </ul>
        <p>New Contributors: <a href='https://github.com/phantomxc'>phantomxc</a></p>

        <h3>3.1.3</h3>
        <ul>
          <li>
            Fixed bugs with the ButtonGroup component in Firefox and other Button style bugs (<a href='https://github.com/mxenabled/mx-react-components/pull/278'>#278</a>)
          </li>
        </ul>

        <h3>3.1.2</h3>
        <ul>
          <li>
            Added new icons to Icon component: bike, education, health, map, and retirement (<a href='https://github.com/mxenabled/mx-react-components/pull/277'>#277</a>)
          </li>
        </ul>
        <h3>3.1.1</h3>
        <ul>
          <li>
            Added new icons to Icon component: cash, investment, key and desktop (<a href='https://github.com/mxenabled/mx-react-components/pull/271'>#271</a>, <a href='https://github.com/mxenabled/mx-react-components/pull/270'>#270</a>)
          </li>
        </ul>
        <h3>3.0.2</h3>
        <ul>
          <li>Fixed how styles were called on Button component (<a href='https://github.com/mxenabled/mx-react-components/pull/266'>#266</a>)</li>
        </ul>

        <h3>3.0.1</h3>
        <ul>
          <li>Added DisplayInput component (<a href='https://github.com/mxenabled/mx-react-components/pull/261'>#261</a>)</li>
        </ul>

        <h3>3.0.0</h3>
        <ul>
          <li>Updates to React v15.0.1 (<a href='https://github.com/mxenabled/mx-react-components/pull/262'>#258</a>)</li>
        </ul>

        <h3>2.3.6</h3>
        <ul>
          <li>Added Radium on button component (<a href='https://github.com/mxenabled/mx-react-components/pull/264'>#264</a>)</li>
          <li>Edited styles on button component (<a href='https://github.com/mxenabled/mx-react-components/pull/257'>#257</a>)</li>
        </ul>


        <h3>2.3.5</h3>
        <ul>
          <li>Removed gray border from SearchInput component (<a href='https://github.com/mxenabled/mx-react-components/pull/258'>#258</a>)</li>
        </ul>

        <h3>2.3.4</h3>
        <ul>
          <li>Add SimpleInput component (<a href='https://github.com/mxenabled/mx-react-components/pull/255'>#252</a>)</li>
          <li>Add SearchInput component (<a href='https://github.com/mxenabled/mx-react-components/pull/252'>#255</a>)</li>
        </ul>
        <h3>2.3.3</h3>
        <ul>
          <li>Remove validation warning and add onValidation prop in FileUpload (<a href='https://github.com/mxenabled/mx-react-components/pull/248'>#248</a>)</li>
        </ul>

        <h3>2.3.2</h3>
        <ul>
          <li>Fix deprecation warning in Modal (<a href='https://github.com/mxenabled/mx-react-components/pull/253'>#253</a>)</li>
        </ul>

        <h3>2.3.1</h3>
        <ul>
          <li>Remove fill mapping to props.color in Icon (<a href='https://github.com/mxenabled/mx-react-components/commit/496f2d6085358f9511df28124002e6b563a6bdd8'>See Commit</a>)</li>
        </ul>

        <h3>2.3.0</h3>
        <ul>
          <li>Display Unsplash.it image in demo</li>
          <li>Icon: Radium dependency removed. `style` prop now only accepts an object</li>
          <li>PageIndicator: component added (<a href='https://github.com/mxenabled/mx-react-components/pull/249'>#249</a>)</li>
          <li>ButtonGroup: component added (<a href='https://github.com/mxenabled/mx-react-components/pull/242'>#242</a>)</li>
          <li>Proxima Nova fonts added to demo</li>
          <li>Modal: `isOpen` prop deprecated (<a href='https://github.com/mxenabled/mx-react-components/pull/238'>#238</a>)</li>
        </ul>

        <h3>2.2.14</h3>
        <ul>
          <li>Add adjustHexColor to Styles constants (<a href='https://github.com/mxenabled/mx-react-components/pull/243'>#243</a>)</li>
        </ul>


        <h3>2.2.13</h3>
        <ul>
          <li>Return event along with value on Toggle component (<a href='https://github.com/mxenabled/mx-react-components/pull/241'>#241</a>)</li>
          <li>Fix styling on Button component (<a href='https://github.com/mxenabled/mx-react-components/pull/240'>#240</a>)</li>
        </ul>

        <h3>2.2.12</h3>
        <ul>
          <li>Update credit card icon in Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/235'>#235</a>)</li>
        </ul>

        <h3>2.2.10</h3>
        <ul>
          <li>Fix activeText on Modal buttons (<a href='https://github.com/mxenabled/mx-react-components/pull/234'>#234</a>)</li>
        </ul>

        <h3>2.2.9</h3>
        <ul>
          <li>Add spinner option to Modal buttons (<a href='https://github.com/mxenabled/mx-react-components/pull/233'>#233</a>)</li>
        </ul>

        <h3>2.2.8</h3>
        <ul>
          <li>Add spinner option to Button component (<a href='https://github.com/mxenabled/mx-react-components/pull/231'>#231</a>)</li>
        </ul>
        <p>New Contributors: <a href='https://github.com/iheartrachie'>iheartrachie</a></p>

        <h3>2.2.7</h3>
        <ul>
          <li>Adds footerStyle and incorporates Button component in Modal component (<a href='https://github.com/mxenabled/mx-react-components/pull/232'>#232</a>)</li>
          <li>Fixes issue with validation messages not resetting on FileUpload (<a href='https://github.com/mxenabled/mx-react-components/pull/225'>#225</a>)</li>
        </ul>

        <h3>2.2.6</h3>
        <ul>
          <li>Fixes case on Apple, Android, Windows icon values (<a href='https://github.com/mxenabled/mx-react-components/pull/226'>#226</a>)</li>
        </ul>

        <h3>2.2.5</h3>
        <ul>
          <li>Adds Apple, Android, Windows icon to Icon component (<a href='https://github.com/mxenabled/mx-react-components/commit/b55a98ba55c5da39cb210acb0e5c9544272bce0a'>see commit</a>)</li>
        </ul>

        <h3>2.2.4</h3>
        <ul>
          <li>Adds rocket icon to Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/224'>#224</a>)</li>
          <li>Adds scrim with box shadow and click handler to Drawer Component (<a href='https://github.com/mxenabled/mx-react-components/pull/223'>#223</a>)</li>
        </ul>

        <h3>2.2.3</h3>
        <ul>
          <li>Adds animations to the DonutChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/221'>#221</a>)</li>
          <li>Select Component bug fix (<a href='https://github.com/mxenabled/mx-react-components/pull/220'>#220</a>)</li>
          <li>Update travis integration commands (<a href='https://github.com/mxenabled/mx-react-components/commit/4f8b7eee4302f97cef957882192e59e61f4e0b03'>see commit</a>)</li>
        </ul>

        <h3>2.2.2</h3>
        <ul>
          <li>Adds babel-cli dependency so npm release script will run (<a href='https://github.com/mxenabled/mx-react-components/commit/5bb479dfb9abb7c7647de90f7f326ac4e6a4e2f2'>see commit</a>)</li>
        </ul>

        <h3>2.2.1</h3>
        <ul>
          <li>Select Component bug fix (<a href='https://github.com/mxenabled/mx-react-components/pull/215'>#215</a>)</li>
        </ul>

        <h3>2.2.0</h3>
        <ul>
          <li>Adds new Drawer component (<a href='https://github.com/mxenabled/mx-react-components/pull/206'>#206</a>)</li>
          <li>Adds new eslint rule and brings code up to compliance (<a href='https://github.com/mxenabled/mx-react-components/pull/217'>#217</a>)</li>
        </ul>

        <h3>2.1.0</h3>
        <ul>
          <li>Removed default prop for selected on Select (<a href='https://github.com/mxenabled/mx-react-components/pull/201'>#201</a>)</li>
          <li>Added ability to pass color prop to Select (<a href='https://github.com/mxenabled/mx-react-components/pull/208'>#208</a>)</li>
          <li>Fixed bug with multiple Hover states, and added new active style on Select (<a href='https://github.com/mxenabled/mx-react-components/pull/207'>#207</a>)</li>
        </ul>
        <p>New Contributors: <a href='https://github.com/r-walsh'>r-walsh</a></p>

        <h3>2.0.6</h3>
        <ul>
          <li>Add imageURL to FileUpload (<a href='https://github.com/mxenabled/mx-react-components/pull/204'>#204</a>)</li>
        </ul>

        <h3>2.0.5</h3>
        <ul>
          <li>Add isRequired to props and fix validation bugs in FileUpload (<a href='https://github.com/mxenabled/mx-react-components/pull/202'>#202</a>)</li>
        </ul>

        <h3>2.0.4</h3>
        <ul>
          <li>Fix IE 11/Edge issues in TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/pull/199'>#199</a>)</li>
        </ul>

        <h3>2.0.3</h3>
        <ul>
          <li>Lock eslint to 2.2.x and Radium to 0.14.x to prevent bugs introduced in latest versions(<a href='https://github.com/mxenabled/mx-react-components/pull/198'>#198</a>)</li>
        </ul>

        <h3>2.0.2</h3>
        <ul>
          <li>Fix duplicate module error (<a href='https://github.com/mxenabled/mx-react-components/pull/197'>#197</a>)</li>
        </ul>

        <h3>2.0.0</h3>
        <ul>
          <li>Update Lodash to 4.6.1 (<a href='https://github.com/mxenabled/mx-react-components/pull/193'>#193</a>)</li>
          <li>Add FileUpload component (<a href='https://github.com/mxenabled/mx-react-components/pull/192'>#192</a>)</li>
          <li>Darkened hover effect on Button component (<a href='https://github.com/mxenabled/mx-react-components/pull/191'>#191</a>)</li>
          <li>Rename NPM `test` script to `eslint` (<a href='https://github.com/mxenabled/mx-react-components/pull/190'>#190</a>)</li>
          <li>Add zero y-axis tick to TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/pull/189'>#189</a>)</li>
          <li>Change DonutChart to return data object instead of index (<a href='https://github.com/mxenabled/mx-react-components/pull/186'>#186</a>)</li>
          <li>Add update method for selectedDate to DatePicker component (<a href='https://github.com/mxenabled/mx-react-components/pull/183'>#183</a>)</li>
          <li>Add document icon to Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/181'>#181</a>)</li>
          <li>Fix y-axis padding on TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/pull/180'>#180</a>)</li>
          <li>Fix break point label on LimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/pull/179'>#179</a>)</li>
          <li>Remove secondaryOutline button from Button component (<a href='https://github.com/mxenabled/mx-react-components/pull/178'>#178</a>)</li>
          <li>Fix for select options dropshadow in Select component (<a href='https://github.com/mxenabled/mx-react-components/pull/177'>#177</a>)</li>
          <li>Refactor TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/pull/175'>#175</a>)</li>
        </ul>

        <h3>1.6.9</h3>
        <ul>
          <li>Select: Hides the shadow when there is no options to show (<a href='https://github.com/mxenabled/mx-react-components/pull/174'>#174</a>)</li>
        </ul>

        <h3>1.6.8</h3>
        <ul>
          <li>Select: Removed opacity of the options (<a href='https://github.com/mxenabled/mx-react-components/pull/166'>#166</a>)</li>
        </ul>

        <h3>1.6.7</h3>
        <ul>
          <li>ToggleSwitch: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/153'>#153</a>)</li>
          <li>TypeAhead: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/164'>#164</a>)</li>
          <li>Spin: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/163'>#163</a>)</li>
          <li>SelectFullScreen: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/162'>#162</a>)</li>
          <li>Select: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/161'>#161</a>)</li>
          <li>Modal: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/160'>#160</a>)</li>
          <li>RangeSelector: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/154'>#154</a>)</li>
          <li>DatePickerFullScreen: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/156'>#156</a>)</li>
          <li>DatePicker: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/155'>#155</a>)</li>
          <li>DonutChart: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/157'>#157</a>)</li>
          <li>Icon: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/158'>#158</a>)</li>
          <li>RajaIcon: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/159'>#159</a>)</li>
          <li>Loader: Reverted component to createClass (<a href='https://github.com/mxenabled/mx-react-components/pull/148'>#148</a>)</li>
          <li>Removed duplicate keys in demo app (<a href='https://github.com/mxenabled/mx-react-components/pull/152'>#152</a>)</li>
        </ul>

        <h3>1.6.6</h3>
        <ul>
          <li>Icon: Add fat arrows (<a href='https://github.com/mxenabled/mx-react-components/pull/149'>#149</a>)</li>
        </ul>

        <h3>1.6.5</h3>
        <ul>
          <li>TypeAhead: Adjust colors (<a href='https://github.com/mxenabled/mx-react-components/commit/3a20b237a707582a79c5d499ccc47f18dc6a2d8a'>see commit</a>)</li>
        </ul>

        <h3>1.6.4</h3>
        <ul>
          <li>Button: Move adjustColor to styles (<a href='https://github.com/mxenabled/mx-react-components/commit/6a3abad0bd1c3dc4a8951a6b8b3d190b9c0d08ee'>see commit</a>)</li>
        </ul>

        <h3>1.6.3</h3>
        <ul>
          <li>Button: Remove padding and change margin to longhand values (<a href='https://github.com/mxenabled/mx-react-components/commit/27725e56aab3cec3299be9be6756c82d78c3e819'>see commit</a>)</li>
        </ul>

        <h3>1.6.2</h3>
        <ul>
          <li>Button: Add icon prop and outline types (<a href='https://github.com/mxenabled/mx-react-components/pull/146'>#146</a>)</li>
        </ul>

        <h3>1.6.0</h3>
        <ul>
          <li>Add Button component (<a href='https://github.com/mxenabled/mx-react-components/pull/144'>#144</a>)</li>
          <li>Expose Style constants (<a href='https://github.com/mxenabled/mx-react-components/pull/144'>#144</a>)</li>
          <li>Loader - allow editing of loading text (<a href='https://github.com/mxenabled/mx-react-components/pull/136'>#136</a>)</li>
          <li>RangeSelector - clicking on the track now moves the closes toggle (<a href='https://github.com/mxenabled/mx-react-components/pull/133'>#133</a>)</li>
          <li>Select - using up/down keys now scrolls options (<a href='https://github.com/mxenabled/mx-react-components/pull/128'>#128</a>)</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/lukeschunk'>lukeschunk</a></p>

        <h3>1.5.6</h3>
        <ul>
          <li>Changes scrim color for the `Modal` component (<a href='https://github.com/mxenabled/mx-react-components/pull/143'>#143</a>)</li>
        </ul>

        <h3>1.5.5</h3>
        <ul>
          <li>Minor style changes to the `Modal` component (<a href='https://github.com/mxenabled/mx-react-components/pull/138'>#138</a>)</li>
        </ul>

        <h3>1.5.4</h3>
        <ul>
          <li>Bug fixes for `TimeBasedLineChart` component (<a href='https://github.com/mxenabled/mx-react-components/pull/137'>#137</a>)</li>
        </ul>

        <h3>1.5.3</h3>
        <ul>
          <li>Add new `contentFooter` prop to Modal component to allow for content in footer (<a href='https://github.com/mxenabled/mx-react-components/pull/135'>#135</a>)</li>
        </ul>

        <h3>1.5.2</h3>
        <ul>
          <li>Icon: `calendar` and `chart` icons added (<a href='https://github.com/mxenabled/mx-react-components/pull/134'>#134</a>)</li>
        </ul>

        <h3>1.5.1</h3>
        <ul>
          <li>Fix TimeBasedLineChart bugs (<a href='https://github.com/mxenabled/mx-react-components/pull/132'>#132</a>)</li>
        </ul>

        <h3>1.5.0</h3>
        <ul>
          <li>TimeBasedLineChart: `zeroState` prop added, default `margins` updated, `style` prop is no longer used (<a href='https://github.com/mxenabled/mx-react-components/pull/131'>#131</a>)</li>
          <li>Icon: `calendar-plus` icon added (<a href='https://github.com/mxenabled/mx-react-components/pull/130'>#130</a>)</li>
        </ul>

        <h3>1.4.10</h3>
        <ul>
          <li>Update Babel dependency. (<a href='https://github.com/mxenabled/mx-react-components/commit/0093a46c25991b04dbbb747d97c82b33a28be370'>see commit</a>)</li>
        </ul>

        <h3>1.4.9</h3>
        <ul>
          <li>Modal Component: Hide tooltip icon/label if no tooltip (<a href='https://github.com/mxenabled/mx-react-components/pull/129'>#129</a>)</li>
        </ul>

        <h3>1.4.8</h3>
        <ul>
          <li>Add selectedDateColor prop to DatePicker component (<a href='https://github.com/mxenabled/mx-react-components/pull/126'>#126</a>)</li>
        </ul>

        <h3>1.4.7</h3>
        <ul>
          <li>Add new contentStyle prop to Modal component (<a href='https://github.com/mxenabled/mx-react-components/pull/125'>#125</a>)</li>
        </ul>

        <h3>1.4.2 - 1.4.6</h3>
        <ul>
          <li>Bug Fixes to SelectFullScreen and DatePickerFullScreen components (<a href='https://github.com/mxenabled/mx-react-components/commits/master'>Commit History</a>)</li>
        </ul>

        <h3>1.4.1</h3>
        <ul>
          <li>New DatePickerFullScreen component (<a href='https://github.com/mxenabled/mx-react-components/pull/122'>#122</a>)</li>
          <li>New SelectFullScreen component (<a href='https://github.com/mxenabled/mx-react-components/pull/123'>#123</a>)</li>
        </ul>

        <h3>1.4.0</h3>
        <ul>
          <li>Modal component positioning and text alignment fix (<a href='https://github.com/mxenabled/mx-react-components/pull/120'>#120</a>)</li>
        </ul>

        <h3>1.3.1</h3>
        <ul>
          <li>Modal - Update the way we center Modal content, add an isRelative prop (<a href='https://github.com/mxenabled/mx-react-components/pull/119'>#119</a>)</li>
          <li>TimeBasedLineChart - Don't render zero axis if to close to another tick. (<a href='https://github.com/mxenabled/mx-react-components/pull/118'>#118</a>)</li>
        </ul>

        <h3>1.3.0</h3>
        <ul>
          <li>Modal - Introduce new features/props to component (<a href='https://github.com/mxenabled/mx-react-components/pull/115'>#115</a>)</li>
        </ul>

        <h3>1.2.8</h3>
        <ul>
          <li>DatePicker - revert UTC date changes (<a href='https://github.com/mxenabled/mx-react-components/pull/110'>#110</a>)</li>
        </ul>

        <h3>1.2.7</h3>
        <ul>
          <li>DatePicker bug fixes (<a href='https://github.com/mxenabled/mx-react-components/pull/109'>#109</a>)</li>
        </ul>

        <h3>1.2.6</h3>
        <ul>
          <li>Refactor DatePicker component to add functionality (<a href='https://github.com/mxenabled/mx-react-components/pull/107'>#107</a>)</li>
          <li>Correct styling for Select component caret icon to match other components (<a href='https://github.com/mxenabled/mx-react-components/pull/108'>#108</a>)</li>
        </ul>

        <h3>1.2.5</h3>
        <ul>
          <li>Fix invalid date error in demo app for DatePicker. (<a href='https://github.com/mxenabled/mx-react-components/commit/a1d99cfeccd146ebc1b338faad003c5171806e00'>see commit</a>)</li>
          <li>Fix formatting issue with DatePicker. (<a href='https://github.com/mxenabled/mx-react-components/pull/105'>#105</a>)</li>
          <li>Add selectedDateWrapperStyle and calendarWrapperStyle props to DatePicker. (<a href='https://github.com/mxenabled/mx-react-components/pull/106'>#106</a>)</li>
        </ul>

        <h3>1.2.4</h3>
        <ul>
          <li>Add new attention-solid and link icons to the icon component. (<a href='https://github.com/mxenabled/mx-react-components/pull/103'>#103</a>)</li>
        </ul>

        <h3>1.2.3</h3>
        <ul>
          <li>Fix issue where the click event was not being triggered on the select component in IE 10/11. (<a href='https://github.com/mxenabled/mx-react-components/pull/79'>#79</a>)</li>
          <li>Fix CSS warning regarding unsupported CSS value of 'normal'. (<a href='https://github.com/mxenabled/mx-react-components/pull/80'>#80</a>)</li>
          <li>Change defaultDate and minimumDate props in DatePicker component to expect a unix timestamp. (<a href='https://github.com/mxenabled/mx-react-components/pull/92'>#92</a>)</li>
          <li>Remove duplicate caret icon in the DatePicker component. (<a href='https://github.com/mxenabled/mx-react-components/pull/93'>#93</a>)</li>
          <li>Fix issue in the TypeAhead component where a blank string was added if the string input did not match a valid option. (<a href='https://github.com/mxenabled/mx-react-components/pull/94'>#94</a>)</li>
          <li>Remove fontSize prop from the DatePicker component and allow it to be passed in the styles prop. (<a href='https://github.com/mxenabled/mx-react-components/pull/95'>#95</a>)</li>
          <li>Rename hoverCallBack prop to onDataPointHover in the TimeBasedLineChart component. (<a href='https://github.com/mxenabled/mx-react-components/pull/97'>#97</a>)</li>
          <li>Change TimeBasedLineChart component boxSizing to content-box on the wrapping element so the padding is not added to the width/height params. (<a href='https://github.com/mxenabled/mx-react-components/pull/98'>#98</a>)</li>
          <li>Change TimeBasedLineChart component default topMargin to 30px. (<a href='https://github.com/mxenabled/mx-react-components/pull/99'>#99</a>)</li>
          <li>Restrict rangeType prop to either 'day' or 'month' in the TimeBasedLineChart component. (<a href='https://github.com/mxenabled/mx-react-components/pull/100'>#100</a>)</li>
        </ul>

        <h3>1.2.2</h3>
        <ul>
          <li>Flip tooltip on middle date rather than break point date in TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/pull/76'>#76</a>)</li>
          <li>Remove 100% height from DatePicker, add 40px bottom margin for spacing (<a href='https://github.com/mxenabled/mx-react-components/commit/58eda17c263895e80304919f4e1b874e0c33b67b'>see commit</a>)</li>
          <li>Add 1 interval buffer between start and end toggles in RangeSelector (<a href='https://github.com/mxenabled/mx-react-components/commit/52246399464bfe301594477406df1338e9329a65'>see commit</a>)</li>
          <li>Apply props.style onto wrapping component in TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/commit/0b70105e10b80218da470b395a168549ee05d636'>see commit</a>)</li>
        </ul>

        <h3>1.2.1</h3>
        <ul>
          <li>Add css classes to Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/71'>#71</a>)</li>
          <li>Add css classes to DonutChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/72'>#72</a>)</li>
          <li>Add simpler default tool tip to TimeBasedLineChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/73'>#73</a>)</li>
          <li>Fix various bugs in TimeBasedLineChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/74'>#74</a>)</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/guilhermefloriani'>guilhermefloriani</a></p>

        <h3>1.2.0</h3>
        <ul>
          <li>Add new DatePicker component (<a href='https://github.com/mxenabled/mx-react-components/pull/57'>#57</a>, docs coming soon)</li>
          <li>Add new TimeBasedLineChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/63'>#63</a>, docs coming soon)</li>
          <li>Increase space between RangeSelector group label and selected line (<a href='https://github.com/mxenabled/mx-react-components/pull/61'>#61</a>)</li>
          <li>Add css classes to Select component (<a href='https://github.com/mxenabled/mx-react-components/pull/62'>#62</a>)</li>
          <li>BREAKING CHANGE: renamed `range` prop to `upperBound` on RangeSelector component (<a href='https://github.com/mxenabled/mx-react-components/pull/64'>#64</a>)</li>
          <li>Add ability to set the lower bound (positive or negative) of the RangeSelector (<a href='https://github.com/mxenabled/mx-react-components/pull/64'>#64</a>)</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/tumentumurchudur'>tumentumurchudur</a>, <a href='http://github.com/shubhekshajalan'>shubhekshajalan</a></p>

        <h3>1.1.0</h3>
        <ul>
          <li>Add new ToggleSwitch component</li>
          <li>Fix issue with DonutChart click events (<a href='https://github.com/mxenabled/mx-react-components/pull/51'>#51</a>)</li>
          <li>Add css classes to Spin component (<a href='https://github.com/mxenabled/mx-react-components/pull/52'>#52</a>)</li>
          <li>Add css classes to RangeSelector component (<a href='https://github.com/mxenabled/mx-react-components/pull/54'>#54</a>)</li>
          <li>Fix issue with the RangeSelelctor when resizing the window (<a href='https://github.com/mxenabled/mx-react-components/pull/55'>#55</a>)</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/psigns'>psigns</a>, <a href='http://github.com/tegon'>tegon</a></p>

        <h3>1.0.0</h3>
        <ul>
          <li>Upgrade to React 0.14 (see <a href='http://facebook.github.io/react/blog/2015/10/07/react-v0.14.html'>React v0.14</a>)</li>
        </ul>

        <h3>0.4.1</h3>
        <ul>
          <li>Add MIT License</li>
          <li>Add CONTRIBUTING.md</li>
          <li>Add css classes to TypeAhead and Loader components</li>
          <li>Update default styling and props of DonutChart</li>
          <li>Add `dropdownStyle` prop to DonutChart</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/httpete-ire'>httpete-ire</a>, <a href='http://github.com/wpmk2'>wpmk2</a>, <a href='http://github.com/tkarling'>tkarling</a></p>

        <h3>0.3.0</h3>
        <ul>
          <li>Add new Modal component</li>
          <li>Add touch events to RangeSelector</li>
          <li>Use default select on mobile devices for the Select component</li>
          <li>Update demo to be responsive</li>
        </ul>

        <h3>0.2.0</h3>
        <ul>
          <li>Add TypeAhead component</li>
          <li>Add npm scripts: `demo` and `release`</li>
          <li>Add support for TravisCi</li>
          <li>Exclude the `dist` directory from repo</li>
        </ul>

      </div>
    );
  }
});

module.exports = Changelog;
