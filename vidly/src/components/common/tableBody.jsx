import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  //Interface me
  // array of object of all row elements :movdata
  // onLike: function
  // onDelete : function
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {console.log(data)}
        {console.log(columns)}
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{_.get(item, column.path)}</td>
            ))}{" "}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
