import { combineReducers } from 'redux';

const initialState = {
    list: [],
    genres: [],
    likedMovies: []

};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, list: action.movies };

    case 'ADD_LIKE':
      return {...state, likedMovies: [ ...state.likedMovies, action.id ]};
    case 'REMOVE_LIKE':
      return {...state, likedMovies: state.likedMovies.filter((arrayId) => arrayId !== action.id)};

    default:
      return state;
  }
};

const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return { ...state, genres: action.genres };

        default:
            return state;
    }
};


export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer
});
