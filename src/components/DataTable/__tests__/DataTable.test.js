import 'jsdom-global/register';
import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import {DataTable} from "../DataTable";
import {COLS} from "../../../constants/COLS";
import {DATA} from "../../../constants/DATA";
import {RenderData} from "../../RenderData";
Enzyme.configure({ adapter: new Adapter() });

describe('DataTable', () => {
  it('should render component', () => {
    const mockProps = {
      cols: COLS,
      data: DATA,
    };
    const MountedRating = shallow(
      <DataTable {...mockProps}/>,
    );
    const expected = MountedRating.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
