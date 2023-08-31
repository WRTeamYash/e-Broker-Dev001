import { getCategorieApi, getAllProperties, getSliderApi, update_profile, getArticlesApi, getCountByCitysCategories, addFavourite } from "@/utils/api";
import { store } from "../store";
import { apiCallBegan } from "./apiActions";

// update profile
export const UpdateProfileApi = (userid, name, email, mobile, type, address, firebase_id, logintype, profile, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...update_profile(userid, name, email, mobile, type, address, firebase_id, logintype, profile),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
};


// GET SLIDER
export const GetSliderApi = (onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getSliderApi(),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
};
// GET CATEGORIES
export const GetCategorieApi = (onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getCategorieApi(),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
};
// GET PROPERTIES
export const GetFeturedListingsApi = (promoted, top_rated, id, category_id, most_liked, city, get_simiilar, offset, limit, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getAllProperties(promoted, top_rated, id, category_id, most_liked, city, get_simiilar, offset, limit),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
};
// GET_ARTICLES
export const GetAllArticlesApi = (id, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getArticlesApi(id),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}

// GET_COUNT_BY_CITIES_CATEGORIS
export const GetCountByCitysCategorisApi = (onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getCountByCitysCategories(),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}

// // ADD_FAVOURITE
export const AddFavourite = (property_id, type, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...addFavourite(property_id, type),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}

