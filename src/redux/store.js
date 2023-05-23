import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/cardSlice';

const store = configureStore({
  reducer: {
    card: cardReducer, // Juank
  },
});

export default store;
