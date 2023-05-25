import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.jikan.moe/v4/top/anime?filter=favorite';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    // console.log('data', data.data);
    return data.data;
  },
);

const initialState = {
  card: [],
  cardModal: [],
  isLoading: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    grabItemId: (state, action) => {
      // console.log('grabItemId', action.payload);
      const cardItem = state.card.find((item) => item.mal_id === action.payload);
      state.cardModal = cardItem;
    },
  },
  extraReducers: {
    [fetchCards.fulfilled]: (state, action) => {
      state.card = action.payload;
      state.isLoading = false;
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
