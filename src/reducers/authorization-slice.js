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
    // try {
    //     const response = await serverAPI.authorising(info);
    //     debugger;
    //     return response.data;
    // } catch {
    //     console.log('error...')
    // }

    return serverAPI.authorising(info)
        .then(response => response.data)
        .catch(err => console.error(err))
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
                if (action.payload) {
                    state.authorizationInfo.id = action.payload.id;
                    state.authorizationInfo.email = action.payload.email;
                    state.isAuthorized = true;
                    state.status = 'idle';
                }
            })
    },
});

export const {addActiveQuestionNumber, resetGame} = authorizationSlice.actions;

export default authorizationSlice.reducer;

export const getIsAuthorized = state => state.authorization.isAuthorized;

