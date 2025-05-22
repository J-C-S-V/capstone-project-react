import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://api.jikan.moe/v4/top/anime?filter=favorite";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data.data;
});

const initialState = {
  card: [],
  cardModal: [],
  isLoading: false,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    grabItemId: (state, action) => {
      const cardItem = state.card.find(
        (item) => item.mal_id === action.payload
      );
      state.cardModal = cardItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.card = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { grabItemId } = cardsSlice.actions;

export default cardsSlice.reducer;
