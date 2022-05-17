import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cards/cards';

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export default store;
