import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const ADMIN_URL = `${BASE_URL}/admin`;

const authInterceptor = (req) => {
    const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
    if(accessToken){
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
}

export const API = axios.create({
    baseURL: BASE_URL,
});

export const ADMIN_API = axios.create({
    baseURL: ADMIN_URL,
});

API.interceptors.request.use(authInterceptor);

