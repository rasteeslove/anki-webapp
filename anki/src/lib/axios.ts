import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from 'config';
import { storage } from 'utils/storage';

function authRequestInterceptor(config: AxiosRequestConfig) {
    const accessToken = storage.getAccessToken();
    if (accessToken) {
        config.headers!.authorization = `Bearer ${accessToken}`;
    }
    config.headers!.Accept = 'application/json';
    return config;
}

const axios = Axios.create({
    baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // const message = error.response.data.message || error.message;
        return Promise.reject(error);
    }
);

export { axios };
