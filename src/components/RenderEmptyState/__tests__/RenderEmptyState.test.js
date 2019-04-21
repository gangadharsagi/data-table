import 'jsdom-global/register';
import * as React from 'react';
import { RenderEmptyState } from '../RenderEmptyState';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('RenderEmptyState', () => {
  it('should render component', () => {
    const mockProps = {
      cols: {},
    };
    const MountedRenderEmptyState = mount(
      <RenderEmptyState {...mockProps} />,
    );
    const expected = MountedRenderEmptyState.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
