const GET_SETTINGS = "get_system_settings"
const USER_SIGNUP = "user_signup"


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

    return {
        url: `${USER_SIGNUP}`,
        method: 'POST',
        data: {
            name: name,
            email: email,
            mobile: mobile,
            type: type,
            address: address,
            firebase_id: firebase_id,
            logintype: logintype,
            profile: profile
        },
        authorizationHeader: false,

    }
}