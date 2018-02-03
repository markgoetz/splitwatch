import { h, Component } from 'preact';
import Timer from '../../lib/Timer';
import Header from '../../components/Header';
import VerticalLayout from '../../components/VerticalLayout';
import TimerComponent from '../../components/TimerComponent';

export default class ControlsView extends Component {
  startTime = () => {
    this.timer.start(Date.now());
  }

  pauseTime = () => {
    this.timer.pause(Date.now());
  }

  stopTime = () => {
    this.timer.stop(Date.now());
  }

  componentDidMount() {
    this.timer = new Timer(this.props.startTime, this.props.baseTime);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.baseTime !== this.props.baseTime) {
      this.timer.setBaseTime(nextProps.baseTime);
    }
  }

  render() {
    const playPauseButton = this.props.isPlaying ?
      <button onClick={this.pauseTime}>Pause</button> :
      <button onClick={this.startTime}>Play</button>;

    return (<div>
      <Header />
      <VerticalLayout>
        <TimerComponent {...this.props} />
        {playPauseButton}
        <button onClick={this.stopTime}>Stop</button>
      </VerticalLayout>
    </div>);
  }
}
