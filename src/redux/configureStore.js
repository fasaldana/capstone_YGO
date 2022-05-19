import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cards/cards';
import archReducer from './cards/archetype';

const store = configureStore({
  reducer: {
    cards: cardReducer,
    archetype: archReducer,
  },
});

export default store;
