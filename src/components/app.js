import { h, Component } from 'preact';
import { Router } from 'preact-router';

import ControlsView from '../routes/controlsview';
import TimerView from '../routes/timerview';

import { database } from '../lib/firebaseConfig';

export default class App extends Component {
  state = {
    isPlaying: false,
    startTime: 0,
    baseTime: 0
  }

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  componentWillMount() {
    database.ref().on('value',
      data => this.setState(data.val())
    );
  }

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <ControlsView path="/" startTime={this.state.startTime} baseTime={this.state.baseTime} isPlaying={this.state.isPlaying} />
          <TimerView path="/timer" startTime={this.state.startTime} baseTime={this.state.baseTime} isPlaying={this.state.isPlaying} />
        </Router>
      </div>
    );
  }
}
