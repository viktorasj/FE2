import React from 'react';
import axios from 'axios';
import Card from './Card';
import { endpoints } from '../../config';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
    };

    this.requestMovies();
  }

  requestMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((res) => this.setMovieList(res.data.results))
      .catch((error) => console.log(error));
  };

  setMovieList = (movieList) => {
    this.setState({
      movieList,
    })
  };

  render() {
    const { movieList } = this.state;

    return (
      <div className="cards">
        {movieList.map((movie) => <Card movie={movie} />)}
      </div>
    );
  }
}
