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
export const user_signupApi = (name, email, mobile, type, address, firebase_id, logintype, profile) => {
    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("mobile", mobile);
    data.append("firebase_id", firebase_id);
    data.append("address", address);
    data.append("logintype", logintype);
    data.append("type", type);
    data.append("profile", profile);
    return {
        url: `${USER_SIGNUP}`,
        method: 'POST',
        data,
        authorizationHeader: false,

    }
}
// UPDATE PROFILE
export const update_profile = (userid, name, email, mobile, type, address, firebase_id, logintype, profile) => {
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

export const getCategorieApi = (user_id) => {

    return {
        url: `${GET_CATEGORES}`,
        method: "GET",
        params: {

        },
        authorizationHeader: false,

    }
}

// get Propertyes 
export const getAllProperties = (promoted, top_rated, id, category_id, most_liked, city, get_simiilar, offset, limit, current_user, property_type, max_price, min_price, posted_since, state, country, search) => {

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
            search: search
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
