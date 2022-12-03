import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: []
};

export const movieLibSlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addMovie(state, action) {
            !state.list.includes(action.payload) && state.list.push(action.payload)
        },
        // clearLibrary(state) {state = []}
        
    }
    
})

export const { addMovie } = movieLibSlice.actions;

export default movieLibSlice.reducer;