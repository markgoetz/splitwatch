import { h, Component } from 'preact';
import style from './style';
import renderTime from '../../lib/renderTime';

export default class Timer extends Component {
	state = {
		startTime: null,
		baseTime: 0,
		isPlaying: false,
		elapsedTime: 0,
	};

	// gets called when this route is navigated to
	componentDidMount() {
		window.requestAnimationFrame(this.updateTime);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	startTime = () => {
		this.setState({
			startTime: Date.now(),
			isPlaying: true,
		});
	}

	pauseTime = () => {
		this.setState({
			isPlaying: false,
			baseTime: Date.now() - this.state.startTime + this.state.baseTime,
		});
	}

	stopTime = () => {
		this.setState({
			isPlaying: false,
			startTime: Date.now(),
			baseTime: 0,
		})
	}

	render() {
		const playPauseButton = this.state.isPlaying ?
			<button onClick={this.pauseTime}>Pause</button> :
			<button onClick={this.startTime}>Play</button>;

		return <div>
			<div>Timer!</div>
			<div>{ renderTime(this.state.elapsedTime) }</div>
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
