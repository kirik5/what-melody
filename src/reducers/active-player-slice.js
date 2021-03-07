import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = [-1];

const activePlayerSlice = createSlice({
    name: 'activePlayer',
    initialState,
    reducers: {
        changeActivePlayer(state, action) {
            state[0] = action.payload;
        },
        allPlayersOff() {
            return initialState;
        }
    }
});

export const {changeActivePlayer, allPlayersOff} = activePlayerSlice.actions;

export default activePlayerSlice.reducer;

const numberOfActivePlayer = state => state.activePlayer[0];

export const newActivePlayer = (i) => (dispatch, getState) => {
    if (numberOfActivePlayer(getState()) === i) {
        dispatch(changeActivePlayer(-1))
    } else {
        dispatch(changeActivePlayer(i))
    }
};

export const isPlayerPlayingId = (id) => createSelector(
    state => state.activePlayer[0],
    number => number === id,
);