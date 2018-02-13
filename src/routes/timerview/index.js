import { h } from 'preact';
import VerticalLayout from '../../components/VerticalLayout';
import TimerComponent from '../../components/TimerComponent';
import SplitList from '../../components/SplitList';

export default class TimerView {
  render() {
    return (<VerticalLayout align="left">
      <TimerComponent {...this.props} />
      <SplitList splits={this.props.splits} />
    </VerticalLayout>);
  }
}