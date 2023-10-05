import { getCategorieApi, getAllProperties, getSliderApi, update_profile, getArticlesApi, getCountByCitysCategories, addFavourite, ContactUs, getFav,getPackages,getPaymentSettings,createPaymentIntent,confirmPayment, getFacilities, postProperty } from "@/utils/api";
import { store } from "../store";
import { apiCallBegan } from "./apiActions";

// update profile
export const UpdateProfileApi = (userid, name, email, mobile, type, address, firebase_id, logintype, profile, latitude, longitude, about_me, facbook_id, twiiter_id, instagram_id, pintrest_id, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...update_profile(userid, name, email, mobile, type, address, firebase_id, logintype, profile, latitude, longitude, about_me, facbook_id, twiiter_id, instagram_id, pintrest_id),
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
export const GetFeturedListingsApi = (promoted, top_rated, id, category_id, most_liked, city, get_simiilar, offset, limit, current_user, property_type, max_price, min_price, posted_since, state, country, search, userid, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getAllProperties(promoted, top_rated, id, category_id, most_liked, city, get_simiilar, offset, limit, current_user, property_type, max_price, min_price, posted_since, state, country, search, userid),
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

// contact us
export const ContactUsApi = (first_name, last_name, email, subject, message, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...ContactUs(first_name, last_name, email, subject, message),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
};

// // GET_FAV_PROPERTY
export const GetFavPropertyApi = (offset, limit, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getFav(offset, limit),
        displayToast: false,
        onStart,
        onSuccess,
        onError,

    }))
}

// get packages
export const getPackagesApi = (onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getPackages(),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}

// get payement settings

export const getPaymentSettingsApi = (onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getPaymentSettings(),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}

// createPaymentIntent
export const createPaymentIntentApi = (description,name,address1,postalcode,city,state,country,amount,currency,card,packageID,onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...createPaymentIntent(description,name,address1,postalcode,city,state,country,amount,currency,card,packageID),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}

//confirmPayment
export const confirmPaymentApi = (paymentIntentId,onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...confirmPayment(paymentIntentId),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}



// GET FACILITIES API
export const GetFacilitiesApi = (onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...getFacilities(),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}

export const PostProperty = (userid,package_id, title, description, city, state, country, latitude, longitude, address, price, category_id, property_type, video_link, parameters,title_image,threeD_image,gallery_images, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...postProperty(userid,package_id, title, description, city, state, country, latitude, longitude, address, price, category_id, property_type, video_link, parameters,title_image,threeD_image,gallery_images),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
}