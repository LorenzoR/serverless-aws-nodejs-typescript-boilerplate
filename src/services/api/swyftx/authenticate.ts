import { AxiosPromise } from 'axios';
import * as dotenv from 'dotenv';
import apiClient from './apiClient';

dotenv.config();

class Authenticate {
    static getApiKey(): string {
        return process.env.SWYFTX_API_KEY || 'bY7P0tEfH7zV_rVbUdUD_ZD0ssDQWVaUy74KeqVQTaaq7';
    }

    static getHardCodedToken(): string {
        return 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJrVTRRelF6TlRaQk5rTkNORGsyTnpnME9EYzNOVEZGTWpaRE9USTRNalV6UXpVNE1UUkROUSJ9.eyJodHRwczovL3N3eWZ0eC5jb20uYXUvLWp0aSI6IjJkNzA4ZGE3LTM3MGYtNGVhMy1hNjk0LTE3ZGRiNmRiNjQ3MyIsImh0dHBzOi8vc3d5ZnR4LmNvbS5hdS8tbWZhX2VuYWJsZWQiOmZhbHNlLCJodHRwczovL3N3eWZ0eC5jb20uYXUvLWNvdW50cnlfbmFtZSI6IkF1c3RyYWxpYSIsImh0dHBzOi8vc3d5ZnR4LmNvbS5hdS8tY2l0eV9uYW1lIjoiU3lkbmV5IiwiaXNzIjoiaHR0cHM6Ly9zd3lmdHguYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVkZWNlOTA4ZmY1MjQwMGViMTQ3NGIzYyIsImF1ZCI6Imh0dHBzOi8vYXBpLnN3eWZ0eC5jb20uYXUvIiwiaWF0IjoxNTk5Mzc2MzcyLCJleHAiOjE1OTk5ODExNzIsImF6cCI6IkVRdzNmYUF4T1RoUllUWnl5MXVsWkRpOERIUkFZZEVPIiwic2NvcGUiOiJhcHAuYWNjb3VudC50YXgtcmVwb3J0IGFwcC5hY2NvdW50LmJhbGFuY2UgYXBwLmFjY291bnQuc3RhdHMgYXBwLmFjY291bnQucmVhZCBhcHAucmVjdXJyaW5nLW9yZGVycy5yZWFkIGFwcC5hZGRyZXNzLnJlYWQgYXBwLmZ1bmRzLnJlYWQgYXBwLm9yZGVycy5yZWFkIGFwcC5hcGkucmVhZCBvZmZsaW5lX2FjY2VzcyIsImd0eSI6WyJyZWZyZXNoX3Rva2VuIiwicGFzc3dvcmQiXX0.yBWsKAavANCQsGfXZIsrl1ANXMx4tCXWxMu9nUlbG8WGuN36iH0NH7P02CaHyDtD22ygwv6aSueH4_V8NzfFLMdqy4y49hpbhq4_-JPLV7tA_O7f0zgnDO74NGfJ8NnhR2H1HodOM9XAEiR_EVVwYPNj8MUHNW6pvXTeorBcSwpTVtrAC3ExV7ftqKpK5FwRK2XLcltIjRyfFQALMMxu7WFlR8EaotpF_e-XAe7LlvqSMr3ZaSA4qxmRr_2SQM6cI6gpRA2KFxYfoa7NNsHn4u_VI90WX4TRKdZzSJRGm9k905_LosF9TlvL8tP06tfWwhzVEGN8GVtC55GEY6_7vg';
    }

    static refreshToken(apiKey: string): AxiosPromise<any> {
        const url = 'https://api.swyftx.com.au/auth/refresh/';
        const data = {
            apiKey,
        };
        return apiClient.post(url, data, {
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/json',
            },
        });
    }
}

export default Authenticate;
