import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const movieSearch = createSlice({
    name: 'searchMovieValue',
    initialState,
    reducers: {
      searchValue: (state, action) => {
        state.value = action.payload
      }
    }
});

export const { searchValue } = movieSearch.actions

export default movieSearch.reducer