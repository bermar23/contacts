import React, { Component } from 'react';
import HomePage from 'ui/pages/HomePage';
import TestPage from 'ui/pages/TestPage';

import {Locations, Location} from 'react-router-component';

class App extends Component {
  render() {
    return (
      <Locations>
        <Location path="/" handler={HomePage} />
        <Location path="/test-page" handler={TestPage} />
      </Locations>
    );
  }
}

export default App;
