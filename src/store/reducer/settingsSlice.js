import { createSelector, createSlice } from "@reduxjs/toolkit"
import { store } from "../store";
import { apiCallBegan } from "../actions/apiActions";
import { getSettingApi } from "@/utils/api";


const initialState ={
    data: null,
    loading: false
}

export const settingsSlice = createSlice({
    name:"Settings",
    initialState,
    reducers: {
        settingsRequested: (settings, action) => {
            settings.loading = true;
        },
        settingsSucess: (settings, action) => {
            settings.data = action.payload.data;
            settings.loading = false;
        },
        settingsFailure: (settings, action) => {
            settings.loading = false;
        },
    }
})

export const { settingsRequested, settingsSucess, settingsFailure } = settingsSlice.actions;
export default settingsSlice.reducer;

// API CALLS

export const settingsLoaded =(type, user_id, onSuccess, onError, onStart) =>{
    store.dispatch(apiCallBegan({
        ...getSettingApi(type, user_id),
        displayToast: false,
        onStartDispatch: settingsRequested.type,
        onSuccessDispatch: settingsSucess.type,
        onErrorDispatch: settingsFailure.type,
        onStart,
        onSuccess,
        onError

    }))
}

// Slecttors

export const settingsData =createSelector(
    state => state.Settings,
    Settings => Settings.data
)