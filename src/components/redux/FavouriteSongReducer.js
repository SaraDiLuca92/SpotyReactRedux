import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteSongs: [],
};

const favoriteSongSlice = createSlice({
  name: "favoriteSongs",
  initialState,
  reducers: {
    addFavoriteSong: (state, action) => {
      state.favoriteSongs.push(action.payload);
    },
    removeSongFromFavorites: (state, action) => {
      state.favoriteSongs = state.favoriteSongs.filter(
        (song) => song.id !== action.payload.id
      );
    },
  },
});

export const { addFavoriteSong, removeSongFromFavorites } =
  favoriteSongSlice.actions;

export default favoriteSongSlice.reducer;
