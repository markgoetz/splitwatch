import { h, Component } from 'preact';
import style from './style';
import renderTime from '../../lib/renderTime';
import { updateTimer } from '../../lib/data';

export default class Timer extends Component {
	state = {
		startTime: 0,
		baseTime: 0,
		isPlaying: false,
		elapsedTime: 0,
	};

	// gets called when this route is navigated to
	componentDidMount() {
		window.requestAnimationFrame(this.updateTime);
	}

	startTime = () => {
		this.setState({
			startTime: Date.now(),
			isPlaying: true,
		});
		updateTimer({ startTime: Date.now(), baseTime: this.state.baseTime });
	}

	pauseTime = () => {
		this.setState({
			isPlaying: false,
			baseTime: Date.now() - this.state.startTime + this.state.baseTime,
		});
		updateTimer({ startTime: this.state.startTime, baseTime: Date.now() - this.state.startTime + this.state.baseTime });
	}

	stopTime = () => {
		this.setState({
			isPlaying: false,
			startTime: Date.now(),
			baseTime: 0,
		})
		updateTimer({ startTime: Date.now(), baseTime: 0 });
	}

	render() {
		const playPauseButton = this.state.isPlaying ?
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
			elapsedTime: (this.state.isPlaying) ?
				Date.now() - (this.state.startTime) + this.state.baseTime :
				this.state.baseTime
		});
		window.requestAnimationFrame(this.updateTime);
	}
}
