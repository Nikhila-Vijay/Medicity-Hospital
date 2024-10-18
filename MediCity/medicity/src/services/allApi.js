import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"


// register API
export const registerApi = async (userDetails) => {
    return await commonApi("POST", `${BASE_URL}/user/register`, userDetails, "")
}

// login api
export const loginApi = async (userDetails) => {
    return await commonApi('POST', `${BASE_URL}/user/login`, userDetails, "")
}