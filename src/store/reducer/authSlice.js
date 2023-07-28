import { createSelector, createSlice } from "@reduxjs/toolkit";
import { user_signupApi } from "@/utils/api";
import { apiCallBegan } from "../actions/apiActions";
import { store } from "../store";

// initial state

const initialState = {
    data: null,
    loading: false,
}

// slice
export const authSlice = createSlice({
    name: 'User_signup',
    initialState,
    reducers: {
        signupRequested: (user_signup, action) => {
            user_signup.loading = true;

        },
        signupSucess: (user_signup, action) => {
            user_signup.action = action.payload.data;
            user_signup.loading = true;

        },
        signupFailure: (user_signup, action) => {
            user_signup.loading = false;

        }
    }
});
export const { signupRequested, signupSucess, signupFailure } = authSlice.actions;
export default authSlice.reducer;

//  API CALLS
export const signupLoaded = (name, email, mobile, type, address, firebase_id, logintype, profile, onSuccess, onError, onStart) =>{
store.dispatch(apiCallBegan({
    ...user_signupApi(name, email, mobile, type, address, firebase_id, logintype, profile),
    displayToast: false,
        onStartDispatch: signupRequested.type,
        onSuccessDispatch: signupSucess.type,
        onErrorDispatch: signupFailure.type,
        onStart,
        onSuccess,
        onError
}))
}

// Slecttors

export const userSignUpData =createSelector(
    state => state.User_signup,
    User_signup => User_signup.data
)
