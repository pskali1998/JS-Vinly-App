import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
class NewCompo extends Component {
  state = {
    objmov: [], // need to define the both backend entities as empty as it take time for backend to render the value and we don't want these property to be undifined for that part
    genres: [], // to make more robust our application
    pageSize: 4,
    currentPage: 1
  };
  // intialize here all property renderd from backend instance will only be rendered if and only if it recive data from backend
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ objmov: getMovies(), genres });
  }
  handleDelete = currmovie => {
    const newMov = this.state.objmov.filter(m => m._id !== currmovie._id);
    //  console.log(newMov);
    this.setState({ objmov: newMov });
    //console.log(this.state.objmov)
  };
  handleLike = movie => {
    //console.log("Like event raised",movie);
    const movies = [...this.state.objmov];
    //console.log(movies);
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ objmov: movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    // Adding the message list :
    // Obj Destructuring into moviesNo
    const { length: moviesNo } = this.state.objmov;
    const { pageSize, currentPage, objmov, selectedGenre } = this.state;
    if (moviesNo === 0) return <p>No Movies Left</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? objmov.filter(m => m.genre._id === selectedGenre._id)
        : objmov;
    const movies = paginate(filtered, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Movies No are {filtered.length} .</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default NewCompo;
