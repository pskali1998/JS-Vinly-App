import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", lable: "Title" },
    { path: "genre", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    { key: "Like" },
    { key: "Delete" }
  ];
  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          onSort={onSort}
          sortColumn={sortColumn}
          columns={this.columns}
        />
        {movies.map(movdata => (
          <tbody key={movdata._id}>
            <tr>
              <td>{movdata.title}</td>
              <td>{movdata.genre.name}</td>
              <td>{movdata.numberInStock}</td>
              <td>{movdata.dailyRentalRate}</td>
              <td>
                <Like liked={movdata.liked} onClick={() => onLike(movdata)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movdata)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}
export default MoviesTable;
