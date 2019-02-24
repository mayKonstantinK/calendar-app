import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import Loader from '../../components/Loader';

import Api from '../../services/api';
import { convertData } from '../../utils/common';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

const localizer = Calendar.momentLocalizer(moment);

class App extends Component {
  state = {
    events: null
  }

  componentDidMount = () => {
    Api.fetchCalendarEvents().then((events) => {
      this.setState({events: convertData(events)});
    });
  }

  eventStyleGetter = (event) => {
    return {style: {
      backgroundColor: event.category
    }};
  }

  render() {
    const { events } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">Calendar App</div>
        </div>
        {events ? (
          <Calendar
            className="Calendar"
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            eventPropGetter={(this.eventStyleGetter)}
          />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default App;
