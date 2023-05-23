import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.jikan.moe/v4/top/anime?filter=bypopularity';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    // Esto lo que retorna es un array, por eso hay
    // que usar en el map item.name o item.id u otra cosa pueh
    console.log('data', data.data);
    return data.data;
  },
);

const initialState = {
  card: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCards.fulfilled]: (state, action) => {
      state.card = action.payload;
    },
  },
});

export default cardsSlice.reducer;
