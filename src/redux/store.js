import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/cardSlice';
import modalReducer from './features/modalSlice';

const store = configureStore({
  reducer: {
    card: cardReducer, // Juank
    modal: modalReducer,
  },
});

export default store;
