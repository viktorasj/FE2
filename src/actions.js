export const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    movies,
  };
};

export const setGenres = (genres) => {
  return {
        type: 'SET_GENRES',
        genres,
    };
};

export const addIdToHearted = (id) => {
    return {
        type: 'ADD_LIKE',
        id,
    };
};

export const removeIdFromHearted = (id) => {
    return {
        type: 'REMOVE_LIKE',
        id,
    };
};

