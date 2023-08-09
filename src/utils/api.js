const GET_SETTINGS = "get_system_settings"
const USER_SIGNUP = "user_signup"
const UPDATE_PROFILE = "update_profile"


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
export const update_profile = (userid ,name, email, mobile, type, address, firebase_id, logintype, profile) => {
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