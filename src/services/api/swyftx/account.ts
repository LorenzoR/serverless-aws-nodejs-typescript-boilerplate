import { AxiosPromise } from 'axios';
import apiClient from './apiClient';
import { Balance } from '../../../models/swyftx';

class Account {
    static getBalance(token: string): AxiosPromise<Balance[]> {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const url = 'https://api.swyftx.com.au/user/balance/';
        return apiClient.get(url, config);
    }
}

export default Account;
