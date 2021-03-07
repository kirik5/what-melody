import {createSlice} from "@reduxjs/toolkit";

const initialState = [false, false, false, false];

const genreAnswersSlice = createSlice({
    name: 'genreAnswers',
    initialState,
    reducers: {
        changeGenreAnswers(state, action) {
            state[action.payload] = !state[action.payload];
        },
        genreAnswersClear() {
            return initialState;
        }
    }
});

export const {changeGenreAnswers, genreAnswersClear} = genreAnswersSlice.actions;

export default genreAnswersSlice.reducer;

export const genreUserAnswers = state => state.genreAnswers;