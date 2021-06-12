import {createSlice} from "@reduxjs/toolkit"
import {serverAPI} from "../api"
import {stopSubmit} from "redux-form"


const initialState = {
    isAuthorized: false,
    authorizationInfo: {
        id: null,
        email: '',
        name: '',
    },
    status: 'idle'
}


export const login = (mailPass) => async (dispatch) => {
    dispatch(loading())
    try {
        const response = await serverAPI.authorising(mailPass)
        dispatch(fulfilled(response.data))
        window.history.back()
    } catch (err) {
        dispatch(stopSubmit('singin', {
            _error: err,
        }))
        dispatch(failed(err))
    }
}


const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        loading(state) {
            state.status = 'loading'
        },
        fulfilled(state, action) {
            state.authorizationInfo.id = action.payload.id
            state.authorizationInfo.email = action.payload.email
            state.authorizationInfo.name = action.payload.name
            state.isAuthorized = true
            state.status = 'succeeded'
        },
        failed(state, action) {
            state.status = 'failed'
            state.error = action.payload
        },
        logout(state) {
            state.status = 'idle'
            state.error = null
            state.user = null
        }
    },
})


export const {loading, fulfilled, failed, logout} = authorizationSlice.actions

export default authorizationSlice.reducer

export const getIsAuthorized = state => state.authorization.isAuthorized
export const getIsLoading = state => state.authorization.status

