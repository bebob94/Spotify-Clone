import {
  CARD_SELECTED,
  GET_CARDS_ERROR,
  GET_HIPHOP_CARDS,
  GET_POP_CARDS,
  GET_ROCK_CARDS,
  IS_LOADING_OFF,
} from "../action/ActionIndex";

const initialState = {
  cards: {
    rock: [],
    pop: [],
    hiphop: [],
  },
  hasError: false,
  isLoading: true,
  cardSelected: null,
};

const CardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK_CARDS:
      return {
        ...state,
        cards: { ...state.cards, rock: action.payload },
      };
    case GET_POP_CARDS:
      return {
        ...state,
        cards: { ...state.cards, pop: action.payload },
      };
    case GET_HIPHOP_CARDS:
      return {
        ...state,
        cards: { ...state.cards, hiphop: action.payload },
      };
    case GET_CARDS_ERROR:
      return {
        ...state,
        hasError: true,
      };

    case IS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case CARD_SELECTED:
      return {
        ...state,
        cardSelected: action.payload,
      };
    default:
      return state;
  }
};

export default CardsReducer;
