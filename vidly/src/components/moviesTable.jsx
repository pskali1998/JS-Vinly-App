import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  columns = [
    { path: "title", lable: "Title" },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "Like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "Delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
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
        <TableBody data={movies} columns={this.columns} />
        {/* {movies.map(movdata => (
          <tbody key={movdata._id}>
            <tr>
              <td>{movdata.title}</td>
              <td>{movdata.genre.name}</td>
              <td>{movdata.numberInStock}</td>
              <td>{movdata.dailyRentalRate}</td>
              <td>
                
              </td>
              <td>
                
              </td>
            </tr>
          </tbody>
        ))} */}
      </table>
    );
  }
}
export default MoviesTable;
