import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
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
