import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CardsReducer from "../reducer/cardsReducer";

const combine = combineReducers({
  cardData: CardsReducer,
});

export const store = configureStore({
  reducer: combine,
});
