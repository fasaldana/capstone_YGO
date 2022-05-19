import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCardsByArch = createAsyncThunk('archetype/getCardsByArch', async (name) => {
  const response = await axios(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${name}`);
  return response.data;
});

export const archSlice = createSlice({
  name: 'archetype',
  initialState: {
    value: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getCardsByArch.pending]: (state) => {
      state.status = 'loading';
    },
    [getCardsByArch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload;
    },
  },
});

export default archSlice.reducer;
