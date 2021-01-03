import questions from "../mocks/questions";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    numberOfActiveQuestion: -1,
    questions: questions,
};

const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        addActiveQuestionNumber(state) {
            state.numberOfActiveQuestion += 1;
        },
        resetGame(state) {
            return initialState;
        }
    },
});

export const {addActiveQuestionNumber, resetGame} = questionSlice.actions;

export default questionSlice.reducer;


// const ADD_NUMBER_OF_ACTIVE_QUESTION = 'ADD_NUMBER_OF_ACTIVE_QUESTION';
// const RESET_GAME = 'RESET_GAME';
//
// const initialState = {
//     numberOfActiveQuestion: -1,
//     questions: questions,
// };
//
// export const questionReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_NUMBER_OF_ACTIVE_QUESTION:
//             return {
//                 ...state,
//                 numberOfActiveQuestion: state.numberOfActiveQuestion + 1,
//             };
//         case RESET_GAME:
//             return initialState;
//         default:
//             return state;
//     }
// }
//
// export const nextQuestionActionCreator = () => (
//     {
//         type: ADD_NUMBER_OF_ACTIVE_QUESTION,
//     }
// );
//
// export const resetGameActionCreator = () => (
//     {
//         type: RESET_GAME,
//     }
// );
