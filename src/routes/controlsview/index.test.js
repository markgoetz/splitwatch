import { h } from 'preact';
import ControlsView from './index';
import { shallow } from 'preact-render-spy';

describe('ControlsView', () => {
  test('renders when playing', () => {
    const context = shallow(<ControlsView isPlaying startTime={1000} baseTime={3000} />);
    expect(context).toMatchSnapshot();
  });

  test('renders when paused', () => {
    const context = shallow(<ControlsView startTime={1000} baseTime={3000} />);
    expect(context).toMatchSnapshot();
  });
});