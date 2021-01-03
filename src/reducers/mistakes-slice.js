import {createSlice} from "@reduxjs/toolkit";

// const ADD_MISTAKES = 'ADD_MISTAKES';
// const RESET_MISTAKES = 'RESET_MISTAKES';

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

// export const mistakesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_MISTAKES:
//             return {
//                 ...state,
//                 countOfMistakes: state.countOfMistakes + 1,
//             };
//         case RESET_MISTAKES:
//             return initialState;
//         default:
//             return state;
//     }
// };
//
// export const addMistakesActionCreator = () => (
//     {
//         type: ADD_MISTAKES,
//     }
// );
//
// export const resetMistakesActionCreator = () => (
//     {
//         type: RESET_MISTAKES,
//     }
// );