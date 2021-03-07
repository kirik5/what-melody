import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    maxTime: 30,
    currentTime: 30,
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

export const startTimer = () => (dispatch, getState) => {
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

export const getCurrentTime = state => state.timer.currentTime;

