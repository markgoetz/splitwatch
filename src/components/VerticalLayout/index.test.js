import { h } from 'preact';
import VerticalLayout from './index';
import { shallow } from 'preact-render-spy';

describe('Vertical Layout', () => {

  test('Vertical layout renders correctly', () => {
    const context = shallow(<VerticalLayout>
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </VerticalLayout>);
    expect(context).toMatchSnapshot();
  });

  test('Vertical layout renders correctly when centered', () => {
    const context = shallow(<VerticalLayout centered>
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </VerticalLayout>);
    expect(context).toMatchSnapshot();
  });
});