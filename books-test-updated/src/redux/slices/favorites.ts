import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LocalBooksCollection, LocalBook } from "../../models/books";

const initialState: LocalBooksCollection = {
  books: new Array<LocalBook>(),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<LocalBook>) => {
      state.books.push(action.payload);
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      if (state.books) {
        state.books = state.books.filter((e) => {
          return e.id !== action.payload;
        });
      }
    },
  },
});

export const { addFavorite, removeFromFavorite } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.books;
export default favoritesSlice.reducer;
