import * as React from "react";
import * as PropTypes from "prop-types";
import { RenderData } from "../RenderData/RenderData";
import { RenderEmptyState } from "../RenderEmptyState";

/**
 *This component is used to create Data Table with cols
 * and DATA length
 *
 * @param {Object} props - props as a param
 * @returns {*} -  returns stateless data table component
 */
export class DataTable extends React.Component {
    render() {
        return <table
            className="table table-bordered table-hover"
            width="100%"
        >
            <thead>
            <tr>
                {
                    this.props.cols.map(col =>
                        <th
                            key={col.name}
                        >
                            {col.header}
                        </th>
                    )
                }
            </tr>
            </thead>
            <tbody>
            {
                this.props.data && this.props.data.length > 0 ?
                    <RenderData
                        data={this.props.data}
                        cols={this.props.cols}
                    /> :
                    <RenderEmptyState />
            }
            </tbody>
        </table>;
    }
}

DataTable.propTypes = {
    data: PropTypes.array,
    cols: PropTypes.array
};

DataTable.defaultProps = {
    data: [],
    cols: [],
};
