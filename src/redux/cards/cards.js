import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCardsData = createAsyncThunk('card/getCardsData', async () => {
  const response = await axios(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician|Blue-Eyes%20White%20Dragon|Legendary%20Six%20Samurai%20-%20Shi%20En|Ojama%20King|Red-Eyes%20Black%20Dragon|Superheavy%20Samurai%20Big%20Benkei',
  );
  return response.data;
});

export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    value: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getCardsData.pending]: (state) => {
      state.status = 'loading';
    },
    [getCardsData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload.data.map((cards) => ({
        id: cards.id,
        name: cards.name,
        img: cards.card_images[0].image_url_small,
        arch: cards.archetype,
      }));
    },
  },
});

export default cardSlice.reducer;
