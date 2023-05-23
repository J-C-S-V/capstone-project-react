import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const url = 'https://api.jikan.moe/v4/top/anime?page=2';
// const url = 'https://api.jikan.moe/v4/genres/anime';
const url = 'https://api.jikan.moe/v4/top/anime?filter=favorite';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    // Esto lo que retorna es un array, por eso hay
    // que usar en el map item.name o item.id u otra cosa pueh
    console.log('data', data);
    return data.data;
  },
);

const initialState = {
  card: [],
  isLoading: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCards.fulfilled]: (state, action) => {
      state.card = action.payload;
    },
    [fetchCards.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCards.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default cardsSlice.reducer;
