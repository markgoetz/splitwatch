import { h, Component } from 'preact';
import Timer from '../../lib/Timer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import VerticalLayout from '../../components/VerticalLayout';
import Wrapper from '../../components/Wrapper';
import TimerComponent from '../../components/TimerComponent';
import SplitList from '../../components/SplitList';
import SidebarLayout from '../../components/SidebarLayout';

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

  addSplit = () => {
    this.timer.split(Date.now());
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
      <Button isPrimary onClick={this.addSplit}>Split</Button> :
      <Button isPrimary onClick={this.startTime}>Start</Button>;

    return (<div>
      <Header />
      <Wrapper>
        <VerticalLayout>
          <TimerComponent {...this.props} />
          <SidebarLayout>
            <VerticalLayout centered>
              {playPauseButton}
              <Button onClick={this.pauseTime}>Pause</Button>
              <Button onClick={this.stopTime}>Stop</Button>
              <Button onClick={this.resetTime}>Reset</Button>
            </VerticalLayout>
            <SplitList splits={this.props.splits} />
          </SidebarLayout>
        </VerticalLayout>
      </Wrapper>
    </div>);
  }
}
