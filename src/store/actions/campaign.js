import { update_profile } from "@/utils/api";
import { store } from "../store";
import { apiCallBegan } from "./apiActions";

// update profile
export const UpdateProfileApi = (userid ,name, email, mobile, type, address, firebase_id, logintype, profile, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...update_profile(userid ,name, email, mobile, type, address, firebase_id, logintype, profile),
        displayToast: false,
        onStart,
        onSuccess,
        onError,
    }))
};