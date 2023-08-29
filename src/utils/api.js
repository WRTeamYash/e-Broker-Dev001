const GET_SETTINGS = "get_system_settings"
const USER_SIGNUP = "user_signup"
const UPDATE_PROFILE = "update_profile"
const GET_SLIDERS = "get_slider"
const GET_CATEGORES = "get_categories"
const GET_PROPETRES ="get_property"
const GET_ARTICLES ="get_articles"
const GET_COUNT_BY_CITIES_CATEGORIS ="get_count_by_cities_categoris"




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

// GET PROMOTED PROPETRS // FEATURED PROPETRS // GET MOST FAV
export const getAllProperties = (promoted, top_rated, id, category_id, most_liked,city, get_simiilar, offset, limit) => {

    return {
        url: `${GET_PROPETRES}`,
        method: "GET",
        params: {
            promoted: promoted,
            top_rated: top_rated,
            id, id,
            category_id: category_id,
            most_liked:most_liked,
            city:city,
            get_simiilar: get_simiilar,
            offset:offset,
            limit:limit

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
            id:id
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