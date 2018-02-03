import { h } from 'preact';
import Header from './index';
import { shallow } from 'preact-render-spy';

describe('Header Component', () => {

  test('Header renders correctly', () => {
    const context = shallow(<Header />);
    expect(context).toMatchSnapshot();
  });
});