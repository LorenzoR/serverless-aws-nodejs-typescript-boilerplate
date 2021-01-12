import axios, { AxiosPromise } from 'axios';

class Markets {
    static getBasicInfo(assetCode: string, token: string): AxiosPromise<any> {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const url = `https://api.swyftx.com.au/markets/info/basic/${assetCode}/`;
        return axios.get(url, config);
    }

    static getLiveRates(assetId: string, token: string): AxiosPromise<any> {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const url = `https://api.swyftx.com.au/live-rates/${assetId}/`;
        return axios.get(url, config);
    }

    static getMarketAssets(token: string): AxiosPromise<any> {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const url = 'https://api.swyftx.com.au/markets/assets/';
        return axios.get(url, config);
    }
}

export default Markets;
