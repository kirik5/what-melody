import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    countOfMistakes: 0,
    maxMistakes: 3,
};

const mistakesSlice = createSlice({
    name: 'mistakes',
    initialState,
    reducers: {
        addMistakes(state) {
            state.countOfMistakes += 1;
        },
        resetMistakes() {
            return initialState;
        }
    },
});

export const {addMistakes, resetMistakes} = mistakesSlice.actions;

export default mistakesSlice.reducer;

export const getMaxMistakes = state => state.mistakes.maxMistakes;

export const getMistakes = state => state.mistakes.countOfMistakes;