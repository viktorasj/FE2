import axios from 'axios';
import { endpoints } from '../config';
import { setMovies } from './actions';
import { setGenres } from "./actions";
import { addIdToHearted } from "./actions";
import { removeIdFromHearted } from "./actions";


export const getMovies = () => (dispatch) => {
  // thunk - dispatch actions when needed
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => {
      dispatch(setMovies(res.data.results))
    })
    .catch((error) => console.log(error));
};

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => {
            dispatch(setGenres(res.data.genres))
        })
        .catch((error) => console.log(error));
};

export const requestMoviesById = (id) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(id))
        .then((res) => {
            dispatch(setMovies(res.data.results))
        })
        .catch((error) => console.log(error));
};

export const likeMovie = (id) => dispatch => {
    dispatch(addIdToHearted(id));
};

export const unlikeMovie = (id) => dispatch => {
    dispatch(removeIdFromHearted(id));
};


