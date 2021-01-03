import {createSlice} from "@reduxjs/toolkit";

// const SUB_TIME = 'SUB_TIME';
// const RESET_TIME = 'RESET_TIME';
// const SET_TIMER_ID = 'SET_TIMER_ID';

const initialState = {
    maxTime: 300,
    currentTime: 300,
    timerId: null
};

const timeSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        subTime(state) {
            state.currentTime -= 1;
        },
        setTimerId(state, action) {
            state.timerId = action.payload;
        },
        resetTimer() {
            return initialState;
        }
    }
});

export const {subTime, setTimerId, resetTimer} = timeSlice.actions;


export default timeSlice.reducer;

// export const timeSlice = (state = initialState, action) => {
//     switch (action.type) {
//         case SUB_TIME:
//             return {
//                 ...state,
//                 currentTime: state.currentTime - 1,
//             };
//         case SET_TIMER_ID:
//             return {
//                 ...state,
//                 timerId: action.timerId,
//             };
//         case RESET_TIME:
//             return initialState;
//         default:
//             return state;
//     }
// }
//
// export const subTimeActionCreator = () => (
//     {
//         type: SUB_TIME,
//     }
// );
//
// export const resetTimeActionCreator = () => (
//     {
//         type: RESET_TIME,
//     }
// );
//
// export const setTimerIdActionCreator = timerId => (
//     {
//         type: SET_TIMER_ID,
//         timerId: timerId,
//     }
// );

export const startTimer = (dispatch, getState) => {
    const timerTick = () => {
        if (getState().timer.currentTime > 0) {
            dispatch(subTime());
            let timerId = setTimeout(timerTick, 1000);

            dispatch(setTimerId(timerId));
        }
    };

    let timerId = setTimeout(timerTick, 1000);
    dispatch(setTimerId(timerId));
};