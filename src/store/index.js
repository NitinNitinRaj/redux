import { reset } from "./actions";
import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/SongSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/MovieSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addMovie, addSong, removeMovie, removeSong };
