import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activePlayer: -1,
};

const activePlayerSlice = createSlice({
    name: 'activePlayer',
    initialState,
    reducers: {
        changeActivePlayer(state, action) {
            state.activePlayer = action.payload;
        },
        allPlayersOff() {
            return initialState;
        }
    }
});

export const {changeActivePlayer, allPlayersOff} = activePlayerSlice.actions;

export default activePlayerSlice.reducer;

export const newActivePlayer = (i) => (dispatch, getState) => {
    if (getState().activePlayer.activePlayer === i) {
        dispatch(changeActivePlayer(-1))
    } else {
        dispatch(changeActivePlayer(i))
    }
};