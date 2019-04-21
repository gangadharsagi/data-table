import * as React from 'react';
import { RenderData } from '../RenderData';
import { mount } from 'enzyme';

describe('RenderData', () => {
  it('should render component', () => {
    const MountedRatingItem = mount(
      <RenderData />,
    );
    const expected = MountedRatingItem.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
