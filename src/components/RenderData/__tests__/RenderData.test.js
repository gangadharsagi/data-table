import * as React from 'react';
import { RenderData } from '../RenderData';
import { mount } from 'enzyme';

describe('RenderData', () => {
  it('should render component', () => {
    const MountedRenderData = mount(
      <RenderData />,
    );
    const expected = MountedRenderData.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
