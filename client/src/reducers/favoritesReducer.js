const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ),
      };
    default:
      return state;
  }
};


export default favoritesReducer;