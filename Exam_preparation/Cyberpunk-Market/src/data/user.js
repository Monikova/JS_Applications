import { clearUserData, setUserData } from "../util.js";
import { post, get } from "./api.js";

const endpoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout',
};

export async function register(email, password) {
    const result = await post(endpoints.register, {email, password});

    setUserData({
        _id: result._id,
        email: result.email,
        accessToken: result.accessToken
    });
}

export async function login(email, password) {
    const result = await post(endpoints.login, {email, password});

    setUserData({
        _id: result._id,
        email: result.email,  
        accessToken: result.accessToken
    });
}

export async function logout() {
    const promise = get(endpoints.logout);
    clearUserData();

    await promise;
}