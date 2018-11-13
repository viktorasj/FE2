import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { getMovies } from '../thunks';
import { setMovies } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.onGetMovies();
  }

  render() {
    const { movieList, genreList } = this.props;

    return (
      <React.Fragment>
        <Genres genreList = {genreList}/>

        <div className="cards">
          {movieList.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => {
    return {
        movieList: state.movies.list,
        genreList: state.genres.genres
    };

  },
  (dispatch) => {
    return {
      onSetMovies: (movies) => dispatch(setMovies(movies)),
      onGetMovies: () => dispatch(getMovies()),
    };
  },
)(App);
