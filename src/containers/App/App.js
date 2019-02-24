import React, { Component } from 'react';
import './App.css';

import Api from '../../services/api';

class App extends Component {
  state = {
    events: null
  }

  componentDidMount = () => {
    Api.fetchCalendarEvents().then((events) => {
      this.setState({events});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Calendar App</div>
        </header>
      </div>
    );
  }
}

export default App;
