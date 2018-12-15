import axios from 'axios';

import {SERVER_API_URL} from '../constants';

const TIMEOUT = 1000000; // 10000
const setupAxiosInterceptors = onUnauthenticated => {
    const onRequestSuccess = config => {
        const token = localStorage.getItem('jhi-authenticationToken') || sessionStorage.getItem('jhi-authenticationToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.timeout = TIMEOUT;
        config.url = `${SERVER_API_URL}${config.url}`;
        return config;
    };
    const onResponseSuccess = response => response;
    const onResponseError = err => {
        const status = err.status || err.response.status;
        if (status === 403 || status === 401) {
            onUnauthenticated();
        }
        return Promise.reject(err);
    };
    if (axios.interceptors) {
        axios.interceptors.request.use(onRequestSuccess);
        axios.interceptors.response.use(onResponseSuccess, onResponseError);
    }
};

export default setupAxiosInterceptors;
