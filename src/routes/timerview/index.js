import { h } from 'preact';
import TimerComponent from '../../components/TimerComponent';
import SplitList from '../../components/SplitList';

export default class TimerView {
  render() {
    return (<div>
      <TimerComponent {...this.props} />
      <SplitList splits={this.props.splits} />
    </div>);
  }
}