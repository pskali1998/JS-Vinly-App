import React from "react";
import Like from "./common/like";
const MoviesTable = props => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
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
