import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    genreAnswers: new Array(4).fill(false),
};

const genreAnswersSlice = createSlice({
    name: 'genreAnswers',
    initialState,
    reducers: {
        changeGenreAnswers(state, action) {
            state.genreAnswers[action.payload] = !state.genreAnswers[action.payload];
        },
        genreAnswersClear() {
            return initialState;
        }
    }
});

export const {changeGenreAnswers, genreAnswersClear} = genreAnswersSlice.actions;

export default genreAnswersSlice.reducer;