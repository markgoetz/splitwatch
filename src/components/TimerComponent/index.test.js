import { h } from 'preact';
import TimerComponent from './index';
import { shallow } from 'preact-render-spy';

describe('TimerComponent', () => {

  test('Renders correctly on play', () => {
    const context = shallow(<TimerComponent isPlaying startTime={3000} baseTime={1000} />);
    expect(context).toMatchSnapshot();
  });

  test('Renders correctly on pause', () => {
    const context = shallow(<TimerComponent startTime={3000} baseTime={1000} />);
    expect(context).toMatchSnapshot();
  });
});