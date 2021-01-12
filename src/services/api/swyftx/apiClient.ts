import axios from 'axios';

// const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJrVTRRelF6TlRaQk5rTkNORGsyTnpnME9EYzNOVEZGTWpaRE9USTRNalV6UXpVNE1UUkROUSJ9.eyJodHRwczovL3N3eWZ0eC5jb20uYXUvLWp0aSI6IjQyMTI3MWRjLTYzOWYtNDI0OC05M2ZiLTM4NTZhYWM3Mzc4YiIsImh0dHBzOi8vc3d5ZnR4LmNvbS5hdS8tbWZhX2VuYWJsZWQiOmZhbHNlLCJodHRwczovL3N3eWZ0eC5jb20uYXUvLWNvdW50cnlfbmFtZSI6IkF1c3RyYWxpYSIsImh0dHBzOi8vc3d5ZnR4LmNvbS5hdS8tY2l0eV9uYW1lIjoiU3lkbmV5IiwiaXNzIjoiaHR0cHM6Ly9zd3lmdHguYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVkZWNlOTA4ZmY1MjQwMGViMTQ3NGIzYyIsImF1ZCI6Imh0dHBzOi8vYXBpLnN3eWZ0eC5jb20uYXUvIiwiaWF0IjoxNjA0ODIzODg0LCJleHAiOjE2MDU0Mjg2ODQsImF6cCI6IkVRdzNmYUF4T1RoUllUWnl5MXVsWkRpOERIUkFZZEVPIiwic2NvcGUiOiJhcHAuYWNjb3VudC50YXgtcmVwb3J0IGFwcC5hY2NvdW50LmJhbGFuY2UgYXBwLmFjY291bnQuc3RhdHMgYXBwLmFjY291bnQucmVhZCBhcHAucmVjdXJyaW5nLW9yZGVycy5yZWFkIGFwcC5hZGRyZXNzLnJlYWQgYXBwLmZ1bmRzLnJlYWQgYXBwLm9yZGVycy5yZWFkIGFwcC5hcGkucmVhZCBvZmZsaW5lX2FjY2VzcyIsImd0eSI6WyJyZWZyZXNoX3Rva2VuIiwicGFzc3dvcmQiXX0.dED1peqyL7gJCgBaPiKTsH-22WAdj293qaM5bPmbp2h1qBcJ8rMwYnIYBPERgBGAO9BImvomuA07Gg8RNPtu1BxG3-S1P5nZbduRejv9CcU1iSeVSzD7pxLpDr6LYS0_XnKmKJaMPt7V0q51o8dFtX3WuYoH09jBoUvlnGQuJ5Zcz_mck5ebkhZ5pyI-TCY6Zy6862lC745hsZurS4VyeVtRdOe6T6y7BHos9PBQ-D2DkaXpbwQtPj0Jwr_2kgoyrIL2GzgDHjsvyrzDYEpsXii6SWWu8ktnJYLzB4o9u1S3BbgdvpCXgnibDJFxytqSDm2LZmAsiYf1zeOJSE4zCA';

/*
// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    // config.headers['Authorization'] = `Bearer ${token}`;
    // config.headers['Access-Control-Allow-Origin'] = '*';
    // console.log('config', config);
    return config;
}, (error) => {
    // Do something with request error
    console.error('error', error);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Do something with response data
    // response.headers['Access-Control-Allow-Origin'] = '*';
    return response;
}, (error) => {
    // Do something with response error
    console.log('error', error);
    return Promise.reject(error);
});
*/

// Add a request interceptor
axios.interceptors.request.use((config) => config, (error) => {
    // Do something with request error
    console.error('error', error);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => response, (error) => {
    // Do something with response error
    console.log('error', error);
    return Promise.reject(error);
});

export default axios;
