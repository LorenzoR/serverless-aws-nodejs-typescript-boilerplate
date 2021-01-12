import SwyftxAPI from '../api/swyftx';
import { OrderResponse } from '../../models/swyftx';

class Portfolio {
    static async getProfit2() {
        const apiKey = SwyftxAPI.authenticate.getApiKey();
        const tokenResponse = await SwyftxAPI.authenticate.refreshToken(apiKey);
        const token = tokenResponse.data.accessToken;
        // const balance = await SwyftxAPI.account.getBalance(token);
        const orders = await SwyftxAPI.orders.getAll(token);

        console.log('orders', orders.data.orders);
        console.log('orders length', orders.data.orders.length);

        const secondaryAssets = new Set<string>();

        orders.data.orders.forEach(order => secondaryAssets.add(order.secondary_asset));

        secondaryAssets.forEach((asset) => {
            const ordersByAsset = Portfolio.getOrdersForAsset(orders.data.orders, asset);
            return ordersByAsset;
        });

        return true;
    }

    static async getProfit() {
        const apiKey = SwyftxAPI.authenticate.getApiKey();
        const tokenResponse = await SwyftxAPI.authenticate.refreshToken(apiKey);
        const token = tokenResponse.data.accessToken;

        const makertAssets = await SwyftxAPI.markets.getMarketAssets(token);

        const balance = await SwyftxAPI.account.getBalance(token);

        const liveRates = await SwyftxAPI.markets.getLiveRates('1', token);

        // console.log('balance', balance.data);
        // console.log('liveRates', liveRates.data);

        let total = 0;

        const balanceResponse = [];

        balance.data.forEach((b) => {
            const asset = makertAssets.data.find((m) => m.id === b.assetId);
            console.log('asset', asset);
            // console.log('a balance', balance);
            const rate = liveRates.data[b.assetId];
            // console.log('rate', rate);
            // console.log('parseInt(rate.bidPrice, 10)', parseFloat(rate.bidPrice));
            // console.log('parseInt(o.availableBalance, 10)', parseFloat(o.availableBalance));
            const AUDValue = parseFloat(rate.midPrice) * parseFloat(b.availableBalance);
            total += AUDValue;
            // console.log('total', total);
            balanceResponse.push({
                ...b,
                AUDValue,
                asset: {
                    code: asset.code,
                    name: asset.name,
                    rate,
                },
            });
        });

        let totalDeposited = 0;

        /*
        const orders = await SwyftxAPI.orders.getAll(token);

        orders.data.orders.forEach((o: any) => {
            totalSpent += parseFloat(o.audValue) + parseFloat(o.feeAudValue);
        });

        console.log('totalSpent', totalSpent);
        */
        const deposits = await SwyftxAPI.history.getCurrencyDepositHistory('AUD', token);

        deposits.data.forEach((o: any) => {
            totalDeposited += parseFloat(o.audValue);
        });

        const profit = total - totalDeposited;

        console.log('profit', profit);
        console.log('profit %', profit * 100 / totalDeposited);

        return {
            total,
            totalDeposited,
            profit,
            profitPercentage: profit * 100 / totalDeposited,
            balance: balanceResponse,
            makertAssets: makertAssets.data,
            deposits: deposits.data,
        };
    }

    // TODO. Move
    static async getOrders(assetCode: string) {
        const apiKey = SwyftxAPI.authenticate.getApiKey();
        const tokenResponse = await SwyftxAPI.authenticate.refreshToken(apiKey);
        const token = tokenResponse.data.accessToken;

        const orders = await SwyftxAPI.orders.getList(assetCode, token);

        const liveRates = await SwyftxAPI.markets.getLiveRates('1', token);
        let rate = null;

        if (orders.data?.orders?.length) {
            rate = liveRates.data[orders.data.orders[0].secondary_asset];
        }

        return {
            orders: orders.data.orders,
            rate,
        };
    }

    static async getProfitByAsset(assetCode: string) {
        const apiKey = SwyftxAPI.authenticate.getApiKey();
        const tokenResponse = await SwyftxAPI.authenticate.refreshToken(apiKey);
        const token = tokenResponse.data.accessToken;

        const balance = await SwyftxAPI.account.getBalance(token);

        const liveRates = await SwyftxAPI.markets.getLiveRates('1', token);

        // console.log('balance', balance.data);
        // console.log('liveRates', liveRates.data);

        let total = 0;
        const assetId = 79;

        const asset = balance.data.find(o => o.assetId === assetId);

        const rate = liveRates.data[assetId];
        total += asset ? parseFloat(rate.midPrice) * parseFloat(asset.availableBalance) : 0;

        let totalSpent = 0;

        /*
        const orders = await SwyftxAPI.orders.getAll(token);

        orders.data.orders.forEach((o: any) => {
            totalSpent += parseFloat(o.audValue) + parseFloat(o.feeAudValue);
        });

        console.log('totalSpent', totalSpent);
        */
        const orders = await SwyftxAPI.orders.getList(assetCode, token);

        orders.data.orders.forEach((o: any) => {
            totalSpent += parseFloat(o.audValue) + parseFloat(o.feeAudValue);
        });

        const profit = total - totalSpent;

        console.log('profit', profit);
        console.log('profit %', profit * 100 / totalSpent);

        return true;
    }

    static async getLiveRates(assetCode?: string) {
        // TODO. Write this
        if (assetCode) {
            console.log('bye!');
            return null;
        }

        const apiKey = SwyftxAPI.authenticate.getApiKey();
        const tokenResponse = await SwyftxAPI.authenticate.refreshToken(apiKey);
        const token = tokenResponse.data.accessToken;

        const marketAssetsResponse = await SwyftxAPI.markets.getMarketAssets(token);
        const audCode = 'AUD';
        const audAsset = marketAssetsResponse.data.find((asset) => asset.code === audCode);

        if (!audAsset) {
            throw new Error(`Can't find asset with code ${audCode}`)
        }

        const liveRatesResponse = await SwyftxAPI.markets.getLiveRates(audAsset.id, token);
        const rates = []; // liveRatesResponse.data;

        Object.keys(liveRatesResponse.data).forEach((key) => {
            const asset = marketAssetsResponse.data.find((o) => o.id.toString() === key);

            if (!asset) {
                throw new Error(`Can't find asset with code ${key}`)
            }

            rates.push({
                code: asset.code,
                name: asset.name,
                ...liveRatesResponse.data[key],
            });
        });

        return rates;
    }

    private static getOrdersForAsset(orders: OrderResponse['orders'], asset: string) {
        return orders.filter(o => o.secondary_asset === asset);
    }
}

export default Portfolio;
