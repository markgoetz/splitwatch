import { h, Component } from 'preact';
import renderTime from '../../lib/renderTime';

import styles from './style.css';

export default class TimerComponent extends Component {
    state = {
        elapsedTime: 0,
    };

    // gets called when this route is navigated to
    componentDidMount() {
        window.requestAnimationFrame(this.updateTime);
    }

    updateTime = () => {
        this.setState({
            elapsedTime: (this.props.isPlaying) ?
                Date.now() - this.props.startTime + this.props.baseTime :
                this.props.baseTime
        });
        window.requestAnimationFrame(this.updateTime);
    }

    render() {
        return <div class={styles.timer}>
            {renderTime(this.state.elapsedTime, 1)}
        </div>;
    }
}