/*\
This file provides a singleton API client for the whole app (axios)
and also handles JWT token refreshing.
\*/

import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_URL } from 'config';
import { storage } from 'utils/storage';
import { logOut } from 'utils/auth';

// Check whether an error is a token error.
const tokenError = (error: any) : boolean => {
    return (error.response.status === 401 &&
        error.response.data?.code === 'token_not_valid');
}

// Make API request to refresh access token
// and set it in localStorage if the request was successful
const refreshAccessToken = async () : Promise<void> => {
    const refreshBody = {
        'refresh': storage.getRefreshToken(),
    };
    return axios.post('/token/refresh/', refreshBody)
        .then((response: AxiosResponse) => {
            storage.setAccessToken(response.data.access);
            console.log('Access token refreshed successfully.');
        });
}

const axios = Axios.create({
    baseURL: API_URL,
});

// To be called on every API request.
// Request middleware ?
function requestInterceptor(config: AxiosRequestConfig) {
    const accessToken = storage.getAccessToken();
    if (accessToken) {
        config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    config.headers!.Accept = 'application/json';
    return config;
}

axios.interceptors.request.use(requestInterceptor);

// To be called on every successful response from API.
// Response middleware ?
function responseInterceptor(response: AxiosResponse) {
    return response;
}

// To be called on every error response from API.
// Response middleware ?
function errorInterceptor(error: any) {
    console.log('The API returned error response:');
    console.log(error);
    const originalRequest = error.config;
    if (tokenError(error)) {
        console.log('Refreshing access token...');
        storage.clearAccessToken();
        return refreshAccessToken()
            .then(() => axios.request(originalRequest))
            .catch((error) => {
                console.log('Refresh token expired')
                // refresh token expired => logout
                logOut();
                return Promise.reject(error);
            });
    } else {
        return Promise.reject(error);
    }
}

axios.interceptors.response.use(responseInterceptor, errorInterceptor);

export { axios };
