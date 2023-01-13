import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: []
};

const movieLibSlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addMovie(state, action) {
            if (state.list.find(item => item.id === action.payload.id)) {alert('This movie is already in your Library')}
            else { state.list.push(action.payload); alert('Done') }
            
            
        },
        clearLibrary(state) { state.list = [] },
        deleteMovie(state, action) {
            state.list = state.list.filter(item => item.id !== action.payload.id);
            alert('Deleted')
         },
        checkLibrary (state, action) {state.list.some(item => item.id === action.payload.id)}
        
    }
    
})

export const { addMovie, clearLibrary, deleteMovie, checkLibrary } = movieLibSlice.actions;

export default movieLibSlice.reducer;