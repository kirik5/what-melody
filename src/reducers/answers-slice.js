import {createSelector, createSlice} from "@reduxjs/toolkit";


const initialState = [];

const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        pushAnswer(state, action) {
            state.push(action.payload);
        },
        clearAnswers() {
            return initialState;
        }
    }
});

export const {pushAnswer, clearAnswers} = answersSlice.actions;

export default answersSlice.reducer;

export const lengthOfRightAnswersArr = createSelector(
    state => state.answers.filter(it => it),
    answers => answers.length,
);
