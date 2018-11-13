import React from 'react';
import connect from "react-redux/es/connect/connect";
import {getGenres} from "../thunks";
import {requestMoviesById} from "../thunks";


class Genres extends React.Component {
    constructor(props) {
        super(props);
        props.onGetGenres();

    }

  render() {

    const { genreList, onRequestMoviesById } = this.props;

    return (
        <div className="genres">
            {genreList.map((genre) => (
                <div key={genre.id} className="genre" onClick={() => onRequestMoviesById(genre.id)}>
                    {genre.name}
                </div>
            ))}
        </div>
    );
  }
}

export default connect(
    ({ genres }) => ({
        genres
    }),
    dispatch => ({
        onGetGenres: () => dispatch(getGenres()),
        onRequestMoviesById: (id) => dispatch(requestMoviesById(id))
    })
)(Genres);
