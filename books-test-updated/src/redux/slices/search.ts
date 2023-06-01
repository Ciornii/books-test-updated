import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchModel {
  searchTerm: string;
}

const initialState: SearchModel = {
  searchTerm: "react",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
