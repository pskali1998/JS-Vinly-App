import React from "react";
import Like from "./common/like";
const MoviesTable = props => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
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
};

export default MoviesTable;
