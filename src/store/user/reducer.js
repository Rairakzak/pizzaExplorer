const intialState = {
  name: "Rakan",
  id: 42,
  favorites: [{ id: 67283 }, { id: 357311 }],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "user/toggleFavorite": {
      const id = action.payload;
      const favorites = state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id];
      return {
        ...state,
        favorites,
      };
    }

    default:
      return state;
  }
};
export default reducer;
