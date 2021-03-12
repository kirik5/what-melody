import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {serverAPI} from "../api";

const initialState = {
    isAuthorized: false,
    authorizationInfo: {
        id: null,
        email: '',
        name: '',
    },
    status: 'idle'
};

export const fetchAuthorization = createAsyncThunk('authorization/fetchAuthorization', async (info) => {
    const response = await serverAPI.authorising(info);
    return response.data;
});

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        addActiveQuestionNumber(state) {
            state.numberOfActiveQuestion += 1;
        },
        resetGame() {
            return initialState;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAuthorization.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAuthorization.fulfilled, (state, action) => {
                state.authorizationInfo.id = action.payload.id;
                state.authorizationInfo.email = action.payload.email;
                state.isAuthorized = true;
                state.status = 'idle';
            })
            .addCase(fetchAuthorization.rejected, (state) => state)
    },
});

export const {addActiveQuestionNumber, resetGame} = authorizationSlice.actions;

export default authorizationSlice.reducer;

export const getIsAuthorized = state => state.authorization.isAuthorized;

