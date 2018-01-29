import { h, Component } from 'preact';
import TimerComponent from '../../components/TimerComponent';

export default class TimerView {
    render() {
        return <div>
            <TimerComponent {...this.props} />
        </div>;
    }
}