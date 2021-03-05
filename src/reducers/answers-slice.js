import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    answers: [],
};

const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        pushAnswer(state, action) {
            state.answers.push(action.payload);
        },
        clearAnswers() {
            return initialState;
        }
    }
});

export const {pushAnswer, clearAnswers} = answersSlice.actions;

export default answersSlice.reducer;


export const genreUserAnswers = state => state.genreAnswers.genreAnswers;