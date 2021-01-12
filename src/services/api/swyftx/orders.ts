import axios, { AxiosPromise } from 'axios';
import { OrderResponse } from '../../../models/swyftx';

interface GetListResponse {
    orders: {
        primary_asset: number;
        secondary_asset: number;
    }[],
}

class Orders {
    static getAll2(token: string): AxiosPromise<OrderResponse> {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const url = 'https://api.swyftx.com.au/orders';
        return axios.get(url, config);
    }

    static getAll(token: string): AxiosPromise<OrderResponse> {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const url = 'https://api.swyftx.com.au/orders?allOrders=false&from=1575464400000&limit=-1&to=1607173199999';
        return axios.get(url, config);
    }

    static getList(assetCode: string, token: string): AxiosPromise<GetListResponse> {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const url = `https://api.swyftx.com.au/orders/${assetCode}?limit=-1`;
        return axios.get(url, config);
    }
}

export default Orders;
