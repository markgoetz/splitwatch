import { h } from 'preact';
import VerticalLayout from '../../components/VerticalLayout';
import TimerComponent from '../../components/TimerComponent';
import SplitList from '../../components/SplitList';
import Wrapper from '../../components/Wrapper';

export default class TimerView {
  render() {
    return (<Wrapper align="left">
      <VerticalLayout align="left">
        <TimerComponent {...this.props} />
        <SplitList splits={this.props.splits} />
      </VerticalLayout>
    </Wrapper>);
  }
}