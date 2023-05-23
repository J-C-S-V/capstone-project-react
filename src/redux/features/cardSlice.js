import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  card: 'Juank',
};

const cardsSlice = createSlice({
  name: 'cards', // Esto no sirve de mucho
  initialState,
  reducers: {},
});

export default cardsSlice.reducer;
