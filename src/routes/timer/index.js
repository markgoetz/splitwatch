import { h, Component } from 'preact';
import style from './style';
import renderTime from '../../lib/renderTime';
import Timer from '../../lib/Timer';

export default class TimerComponent extends Component {
	state = {
		elapsedTime: 0,
	};

	// gets called when this route is navigated to
	componentDidMount() {
		window.requestAnimationFrame(this.updateTime);
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
			<div>{ renderTime(this.state.elapsedTime, 1) }</div>
			{ playPauseButton }
			<button onClick={this.stopTime}>Stop</button>
		</div>;
	}

	updateTime = () => {
		this.setState({
			elapsedTime: (this.props.isPlaying) ?
				Date.now() - this.props.startTime + this.props.baseTime :
				this.props.baseTime
		});
		window.requestAnimationFrame(this.updateTime);
	}
}
