import { store } from "@/store/store"

const GET_SETTINGS = "get_system_settings"
const USER_SIGNUP = "user_signup"
const UPDATE_PROFILE = "update_profile"
const GET_SLIDERS = "get_slider"
const GET_CATEGORES = "get_categories"
const GET_PROPETRES = "get_property"
const GET_ARTICLES = "get_articles"
const GET_COUNT_BY_CITIES_CATEGORIS = "get_count_by_cities_categoris"
const ADD_FAVOURITE = "add_favourite"
const GET_LANGUAGES = "get_languages"
const CONTACT_US = "contct_us"
const GET_FAV = "get_favourite_property"
const GET_PACKAGES = "get_package";
const GET_PAYMENT_SETTINGS = "get_payment_settings";
const CREATEPAYMENT = "createPaymentIntent";
const CONFIRMPAYMENT = "confirmPayment"
const POST_PROPERTY = "post_property"
const GET_FACILITITES = "get_facilities"
const GET_LIMITS = "get_limits"
const GET_PAYMENT_DETAILS = "get_payment_details";
const UPDATE_POST_PROPERTY = "update_post_property";
const DELETE_PROPERTY = "delete_property"

// is login user check
export const getUserID = () => {
    let user = store.getState()?.User_signup
    if (user) {
        try {
            return user?.data?.data?.id
        } catch (error) {
            return null;
        }
    } else {
        return null
    }

}



// GET SETTINGS
export const getSettingApi = (type, user_id) => {
    return {
        url: `${GET_SETTINGS}`,
        method: "POST",
        data: {
            type: type,
            user_id: user_id,
        },
        authorizationHeader: false,

    }
}

// USER SIGNUP
export const user_signupApi = (name, email, mobile, type, address, firebase_id, logintype, profile, fcm_id) => {
    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("mobile", mobile);
    data.append("firebase_id", firebase_id);
    data.append("address", address);
    data.append("logintype", logintype);
    data.append("type", type);
    data.append("profile", profile);
    data.append("fcm_id", fcm_id);
    return {
        url: `${USER_SIGNUP}`,
        method: 'POST',
        data,
        authorizationHeader: false,

    }
}
// UPDATE PROFILE
export const update_profile = (userid, name, email, mobile, type, address, firebase_id, logintype, profile, latitude, longitude, about_me, facbook_id, twiiter_id, instagram_id, pintrest_id) => {
    let data = new FormData();
    data.append("userid", userid);
    data.append("name", name);
    data.append("email", email);
    data.append("mobile", mobile);
    data.append("firebase_id", firebase_id);
    data.append("address", address);
    data.append("logintype", logintype);
    data.append("type", type);
    data.append("profile", profile);
    data.append("latitude", latitude);
    data.append("longitude", longitude);
    data.append("about_me", about_me);
    data.append("facbook_id", facbook_id);
    data.append("twiiter_id", twiiter_id);
    data.append("instagram_id", instagram_id);
    data.append("pintrest_id", pintrest_id);
    // data.append("fcm_id", fcm_id);
    return {
        url: `${UPDATE_PROFILE}`,
        method: 'POST',
        data,
        authorizationHeader: true,

    }
}

// GET Slider 

export const getSliderApi = () => {

    return {
        url: `${GET_SLIDERS}`,
        method: "GET",
        params: {

        },
        authorizationHeader: false,

    }
}

// GET CATEGORIES

export const getCategorieApi = () => {

    return {
        url: `${GET_CATEGORES}`,
        method: "GET",
        params: {

        },
        authorizationHeader: false,

    }
}

// get Propertyes 
export const getAllProperties = (promoted, top_rated, id, category_id, most_liked, city, get_simiilar, offset, limit, current_user, property_type, max_price, min_price, posted_since, state, country, search, userid) => {

    return {
        url: `${GET_PROPETRES}`,
        method: "GET",
        params: {
            promoted: promoted,
            top_rated: top_rated,
            id, id,
            category_id: category_id,
            most_liked: most_liked,
            city: city,
            get_simiilar: get_simiilar,
            offset: offset,
            limit: limit,
            current_user: current_user,
            property_type: property_type,
            max_price: max_price,
            min_price: min_price,
            posted_since: posted_since,
            state: state,
            country: country,
            search: search,
            userid: userid
        },
        authorizationHeader: false,

    }
}

// GET ARTICLES
export const getArticlesApi = (id) => {

    return {
        url: `${GET_ARTICLES}`,
        method: "GET",
        params: {
            id: id
        },
        authorizationHeader: false,

    }
}

// GET_COUNT_BY_CITIES_CATEGORIS
export const getCountByCitysCategories = () => {
    return {
        url: `${GET_COUNT_BY_CITIES_CATEGORIS}`,
        method: "GET",
        params: {

        },
        authorizationHeader: false,

    }
}

// ADD_FAVOURITE
export const addFavourite = (property_id, type) => {
    return {
        url: `${ADD_FAVOURITE}`,
        method: "POST",
        data: {
            property_id: property_id,
            type: type
        },
        authorizationHeader: true,

    }
}

// GET_LANGUAGES

export const getLanguages = (language_code, web_language_file) => {
    return {
        url: `${GET_LANGUAGES}`,
        method: "GET",
        params: {
            language_code: language_code,
            web_language_file: web_language_file
        },
        authorizationHeader: false,

    }
}


// CONTACT US 
export const ContactUs = (first_name, last_name, email, subject, message) => {
    let data = new FormData();
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("email", email);
    data.append("subject", subject);
    data.append("message", message);
    return {
        url: `${CONTACT_US}`,
        method: 'POST',
        data,
        authorizationHeader: false,

    }
}

// GET_FAV_PROPERTY

export const getFav = (offset, limit) => {
    return {
        url: `${GET_FAV}`,
        method: "GET",
        params: {
            offset: offset,
            limit: limit
        },
        authorizationHeader: true,

    }
}

// GET_PACKAGES

export const getPackages = () => {
    let getuserid = getUserID();
    return {
        url: `${GET_PACKAGES}`,
        method: "GET",
        params: {
            current_user: getuserid
        },
        authorizationHeader: false,
    }
}

// GET_PAYMENT_SETTINGS
export const getPaymentSettings = () => {
    return {
        url: `${GET_PAYMENT_SETTINGS}`,
        method: "GET",
        params: {},
        authorizationHeader: true,
    }
}

// CREATEPAYMENT
export const createPaymentIntent = (description, name, address1, postalcode, city, state, country, amount, currency, card, packageID) => {
    let data = new FormData();
    data.append("description", description);
    data.append("shipping[name]", name);
    data.append("shipping[address][line1]", address1);
    data.append("shipping[address][postal_code]", postalcode);
    data.append("shipping[address][city]", city);
    data.append("shipping[address][state]", state);
    data.append("shipping[address][country]", country);
    data.append("amount", amount);
    data.append("currency", currency);
    data.append("payment_method_types[]", card);
    data.append("package_id", packageID);
    return {
        url: `${CREATEPAYMENT}`,
        method: "POST",
        data,
        authorizationHeader: true,
    }
}

// CONFIRMPAYMENT
export const confirmPayment = (paymentIntentId) => {
    let data = new FormData();
    data.append("paymentIntentId", paymentIntentId);

    return {
        url: `${CONFIRMPAYMENT}`,
        method: "POST",
        data,
        authorizationHeader: true,
    }
}
// POST PROPERTY
export const postProperty = (userid, package_id, title, description, city, state, country, latitude, longitude, address, price, category_id, property_type, video_link, parameters, facilities, title_image, threeD_image, gallery_images) => {
    let data = new FormData();

    // Append the property data to the FormData object
    data.append('userid', userid);
    data.append('package_id', package_id);
    data.append('title', title);
    data.append('description', description);
    data.append('city', city);
    data.append('state', state);
    data.append('country', country);
    data.append('latitude', latitude);
    data.append('longitude', longitude);
    data.append('address', address);
    data.append('price', price);
    data.append('category_id', category_id);
    data.append('property_type', property_type);
    data.append('video_link', video_link);

    // Append the parameters array if it is an array
    if (Array.isArray(parameters)) {
        parameters.forEach((parameter, index) => {
            data.append(`parameters[${index}][parameter_id]`, parameter.parameter_id);
            data.append(`parameters[${index}][value]`, parameter.value);
        });
    }
    // Append the facilities array if it is an array
    if (Array.isArray(facilities)) {
        facilities.forEach((facility, index) => {
            data.append(`facilities[${index}][facility_id]`, facility.facility_id);
            data.append(`facilities[${index}][distance]`, facility.distance);
        });
    }
    data.append('title_image', title_image);
    data.append('threeD_image', threeD_image);

    // Check if gallery_images is defined and an array before using forEach
    if (Array.isArray(gallery_images)) {
        gallery_images.forEach((image, index) => {
            data.append(`gallery_images[${index}]`, image);
        });
    }


    return {
        url: `${POST_PROPERTY}`,
        method: 'POST',
        data,
        authorizationHeader: true,
    };
};


// GET_COUNT_BY_CITIES_CATEGORIS
export const getFacilities = () => {
    return {
        url: `${GET_FACILITITES}`,
        method: "GET",
        params: {

        },
        authorizationHeader: false,

    }
}

// GET_COUNT_BY_CITIES_CATEGORIS
export const getLimits = (id) => {
    return {
        url: `${GET_LIMITS}`,
        method: "GET",
        params: {
            id: id
        },
        authorizationHeader: true,

    }
}

// get payment detaisl
export const getPaymentDetials = () => {
    return {
        url: `${GET_PAYMENT_DETAILS}`,
        method: "GET",
        params: {},
        authorizationHeader: true,
    }
}


// UPDATE POST PROPERTY
export const updatePostProperty = (action_type, id, package_id, title, description, city, state, country, latitude, longitude, address, price, category_id, property_type, video_link, parameters, facilities, title_image, threeD_image, gallery_images) => {
    let data = new FormData();

    // Append the property data to the FormData object
    data.append('action_type', action_type);
    data.append('id', id);
    data.append('package_id', package_id);
    data.append('title', title);
    data.append('description', description);
    data.append('city', city);
    data.append('state', state);
    data.append('country', country);
    data.append('latitude', latitude);
    data.append('longitude', longitude);
    data.append('address', address);
    data.append('price', price);
    data.append('category_id', category_id);
    data.append('property_type', property_type);
    data.append('video_link', video_link);

    // Append the parameters array if it is an array
    if (Array.isArray(parameters)) {
        parameters.forEach((parameter, index) => {
            data.append(`parameters[${index}][parameter_id]`, parameter.parameter_id);
            data.append(`parameters[${index}][value]`, parameter.value);
        });
    }
    // Append the facilities array if it is an array
    if (Array.isArray(facilities)) {
        facilities.forEach((facility, index) => {
            data.append(`facilities[${index}][facility_id]`, facility.facility_id);
            data.append(`facilities[${index}][distance]`, facility.distance);
        });
    }
    data.append('title_image', title_image);
    data.append('threeD_image', threeD_image);

    // Check if gallery_images is defined and an array before using forEach
    if (Array.isArray(gallery_images)) {
        gallery_images.forEach((image, index) => {
            data.append(`gallery_images[${index}]`, image);
        });
    }


    return {
        url: `${UPDATE_POST_PROPERTY}`,
        method: 'POST',
        data,
        authorizationHeader: true,
    };
};


// DELETE_PROPERTY
export const deleteProperty = (id) => {
    let data = new FormData();
    data.append("id", id);

    return {
        url: `${DELETE_PROPERTY}`,
        method: "POST",
        data,
        authorizationHeader: true,
    }
}

