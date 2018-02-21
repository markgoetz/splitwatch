import { h } from 'preact';
import LastSplit from './index';
import { shallow } from 'preact-render-spy';

describe('LastSplit', () => {
  test('renders correctly with no splits', () => {
    const context = shallow(<LastSplit />);
    expect(context).toMatchSnapshot();
  });

  test('renders correctly with a split', () => {
    const context = shallow(<LastSplit split={300} />);
    expect(context).toMatchSnapshot();
  });
});