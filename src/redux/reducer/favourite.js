import { MY_FAVORITE, REMOVE_FROM_FAVORITE } from "../action/ActionIndex";

const initialState = {
  favourites: [],
};

const FavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_FAVORITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favourites: state.favourites.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default FavouriteReducer;
