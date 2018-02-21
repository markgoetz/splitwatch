import { h } from 'preact';
import SidebarLayout from './index';
import { shallow } from 'preact-render-spy';

describe('Sidebar Layout Component', () => {
  test('renders correctly with two children', () => {
    const context = shallow(<SidebarLayout>
      <div>Test 1!</div>
      <div>Test 2!</div>
    </SidebarLayout>);
    expect(context).toMatchSnapshot();
  });
});