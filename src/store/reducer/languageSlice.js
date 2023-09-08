import { getLanguages } from "@/utils/api";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
import { apiCallBegan } from "../actions/apiActions";

const initialState = {
  languages: {},
  loading: false,
};

export const languageSlice = createSlice({
  name: "Language",
  initialState,
  reducers: {
    languagesRequested: (language, action) => {
      language.loading = true;
    },
    languagesSuccess: (language, action) => {
      console.log(action)
      language.languages = action.payload.data;

      language.loading = false;
    },
    languagesFailure: (language, action) => {
      language.loading = false;
    },
  },
});

export const { languagesRequested, languagesSuccess, languagesFailure } = languageSlice.actions;
export default languageSlice.reducer;

// API CALLS

export const languageLoaded = (language_code, web_language_file, onSuccess, onError, onStart) => {
  store.dispatch(apiCallBegan({
    ...getLanguages(language_code, web_language_file),
    displayToast: false,
    onStartDispatch: languagesRequested.type,
    onSuccessDispatch: languagesSuccess.type,
    onErrorDispatch: languagesFailure.type,
    onStart,
    onSuccess,
    onError

  }))
}


// Selectors

export const languageData = createSelector(
  state => state.Language,
  Language => Language.data
)