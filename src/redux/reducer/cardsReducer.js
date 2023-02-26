import {
  CARD_SELECTED,
  GET_CARDS_ERROR,
  GET_HIPHOP_CARDS,
  GET_POP_CARDS,
  GET_ROCK_CARDS,
  IS_LOADING_OFF,
  IS_PLAY_CARD,
  PLAY_CARD,
  SEARCH_RESULT,
} from "../action/ActionIndex";

const initialState = {
  cards: {
    rock: [],
    pop: [],
    hiphop: [],
  },
  selectedCard: {},
  playCard: {},
  isPlayCard: false,
  hasError: false,
  isLoading: true,
  searchResult: "",
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
        selectedCard: action.payload,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };
    case PLAY_CARD:
      return {
        ...state,
        playCard: action.payload,
      };
    case IS_PLAY_CARD:
      return {
        ...state,
        isPlayCard: true,
      };
    default:
      return state;
  }
};

export default CardsReducer;
