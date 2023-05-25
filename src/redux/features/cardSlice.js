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
    console.log('data', data.data);
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
  reducers: {
    grabItemId: (state, action) => {
      console.log('grabItemId', action.payload);
      // console.log('grabItemId');
    },
  },
  extraReducers: {
    [fetchCards.fulfilled]: (state, action) => {
      state.card = action.payload;
    },
    [fetchCards.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCards.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { grabItemId } = cardsSlice.actions;

export default cardsSlice.reducer;
