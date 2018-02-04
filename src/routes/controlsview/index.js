import { h, Component } from 'preact';
import Timer from '../../lib/Timer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import VerticalLayout from '../../components/VerticalLayout';
import Wrapper from '../../components/Wrapper';
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
      <Button onClick={this.pauseTime}>Pause</Button> :
      <Button isPrimary onClick={this.startTime}>Start</Button>;

    return (<div>
      <Header />
      <Wrapper>
        <VerticalLayout>
          <TimerComponent {...this.props} />
          {playPauseButton}
          <Button onClick={this.stopTime}>Stop</Button>
        </VerticalLayout>
      </Wrapper>
    </div>);
  }
}
