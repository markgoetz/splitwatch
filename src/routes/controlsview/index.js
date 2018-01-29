import { h, Component } from 'preact';
import style from './style';
import Timer from '../../lib/Timer';
import TimerComponent from '../../components/TimerComponent/index';

export default class ControlsView extends Component {
    componentDidMount() {
        this.timer = new Timer(this.props.startTime, this.props.baseTime);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.baseTime != this.props.baseTime) {
            this.timer.setBaseTime(nextProps.baseTime);
        }
    }

    startTime = () => {
        this.timer.start(Date.now());
    }

    pauseTime = () => {
        this.timer.pause(Date.now());
    }

    stopTime = () => {
        this.timer.stop(Date.now());
    }

    render() {
        const playPauseButton = this.props.isPlaying ?
            <button onClick={this.pauseTime}>Pause</button> :
            <button onClick={this.startTime}>Play</button>;

        return <div>
            <TimerComponent {...this.props} />
            { playPauseButton }
            <button onClick={this.stopTime}>Stop</button>
        </div>;
    }
}
