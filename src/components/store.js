import { configureStore } from "@reduxjs/toolkit";
import favoriteSongsReducer from "./redux/FavouriteSongReducer";

const store = configureStore({
  reducer: {
    favoriteSongs: favoriteSongsReducer,
  },
});

export default store;
