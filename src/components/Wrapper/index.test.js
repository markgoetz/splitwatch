import { h } from 'preact';
import Wrapper from './index';
import { shallow } from 'preact-render-spy';

describe('Wrapper', () => {

  test('Wrapper renders correctly', () => {
    const context = shallow(<Wrapper>
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </Wrapper>);
    expect(context).toMatchSnapshot();
  });
});