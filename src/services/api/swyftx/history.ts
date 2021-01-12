import axios, { AxiosPromise } from 'axios';

class Markets {
    static getCurrencyDepositHistory(assetCode: string, token: string): AxiosPromise<any> {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const url = `https://api.swyftx.com.au/history/deposit/${assetCode}/?limit=-1&to=1607173199999`;
        return axios.get(url, config);
    }
}

export default Markets;
