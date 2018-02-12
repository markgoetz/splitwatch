import { h, Component } from 'preact';
import { Router } from 'preact-router';

import ControlsView from '../routes/controlsview';
import TimerView from '../routes/timerview';

import { database } from '../lib/firebaseConfig';

export default class App extends Component {
  state = {
    timer: {
      isPlaying: false,
      startTime: 0,
      baseTime: 0
    },
    splits: []
  }

  /** Gets fired when the route changes.
   * @param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   * @param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  componentWillMount() {
    database.ref().on('value',
      data => {
        const val = data.val();
        const splits = val.splits ? Object.values(val.splits) : [];

        this.setState({
          timer: val.timer,
          splits
        });
      }
    );
  }

  render() {
    const themeName = this.currentUrl === '/timer' ? 'theme_dark' : 'theme_light';

    return (
      <div id="app" class={themeName}>
        <Router onChange={this.handleRoute}>
          <ControlsView path="/" startTime={this.state.timer.startTime} baseTime={this.state.timer.baseTime} isPlaying={this.state.timer.isPlaying} splits={this.state.splits} />
          <TimerView path="/timer" startTime={this.state.timer.startTime} baseTime={this.state.timer.baseTime} isPlaying={this.state.timer.isPlaying} splits={this.state.splits} />
        </Router>
      </div>
    );
  }
}
