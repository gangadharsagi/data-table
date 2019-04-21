import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DataTable } from '../DataTable';
import { COLS } from '../../../constants/COLS';
import { DATA } from '../../../constants/DATA';

Enzyme.configure({ adapter: new Adapter() });

describe('DataTable', () => {
  it('should render component', () => {
    const mockProps = {
      cols: COLS,
      data: DATA,
    };
    const MountedDataTable = shallow(
      <DataTable {...mockProps} />,
    );
    const expected = MountedDataTable.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
