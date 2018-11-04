import React from 'react';
import axios from 'axios';
import Card from './Card';
import { endpoints } from '../../config';
import GenreList from './GenreList';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
        movieList: [],
        genreList: [],
        requestedGenreId: 28,
        likedMoviesId: []
    };

    this.requestMoviesById(this.state.requestedGenreId);
    this.requestGenres();
  }

  requestMoviesById = (id) => {
    axios
      .get(endpoints.genreMovies(id))
      .then((res) => this.setMovieList(res.data.results))
      .catch((error) => console.log(error));
  };

  requestGenres = () => {
    axios
      .get(endpoints.genres())
      .then((res) => this.setGenresList(res.data.genres))
      .catch((error) => console.log(error));
  };

  setMovieList = (movieList) => {
    this.setState({
      movieList,
    })
  };


  setGenresList = (genreList) => {
    this.setState({
        genreList,
    })
  };

  setRequestedGenreId = (id) => {
      this.setState({
          requestedGenreId: id
      });
      this.requestMoviesById (id);
  }

  toggleLikeToArray = (likedId) => {
      if (this.state.likedMoviesId.indexOf(likedId) === -1) {
          this.setState({
              likedMoviesId: [...this.state.likedMoviesId, likedId]
          })
      }
      else {
          this.setState({
              likedMoviesId: this.state.likedMoviesId.filter((item) => item !== likedId)
          })
      }
  }

  render() {
    const { movieList, genreList } = this.state;
    return (
      <div>
          <div className="genresHead">
              {genreList.map((genres) => <GenreList genres={genres} setRequestedGenreId={this.setRequestedGenreId}/>)}
          </div>
          <div className="cards">
              {movieList.map((movie) => <Card movie={movie} onHeartClick={this.toggleLikeToArray} likedMoviesId={this.state.likedMoviesId} />)}
          </div>
      </div>
    );
  }
}
