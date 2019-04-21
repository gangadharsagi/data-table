import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * This component is used to render table data if table has length
 *
 * @param {array} data - data passes for rendering body rows
 * @param {array} cols - cols is used to render columns for table
 * @returns {*} - returns the stateless component
 */
export const RenderData = ({ data, cols }) =>
  data.map(row =>
    <tr key={row.id}>
      {cols.map(col =>
        <td key={col.name}>
          {row[col.name]}
        </td>,
      )}
    </tr>,
  );

RenderData.propTypes = {
  data: PropTypes.array,
  cols: PropTypes.array,
};

RenderData.defaultProps = {
  data: [],
  cols: [],
};
