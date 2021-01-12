import LastTransaction from '../../models/lastTransaction';
import SwyftxAPI from '../api/swyftx';

const UPWARD_TREND_THRESHOLD = 1.5;
const DIP_THRESHOLD = -2.25;

const PROFIT_THRESHOLD = 1.25;
const STOP_LOSS_THRESHOLD = -2;

class Trader {
    private swyftxClient;

    contructor() {
        this.swyftxClient = SwyftxAPI;
    }

    static getCurrentDiffForTransaction(transaction: LastTransaction, currentPrice: number): number {
        if (!transaction) {
            throw new Error('getCurrentDiffForTransaction() :: Error :: No transaction');
        }

        if (!currentPrice && currentPrice !== 0) {
            throw new Error('getCurrentDiffForTransaction() :: Error :: No currentPrice');
        }

        return (currentPrice - transaction.Price) / transaction.Price * 100;
    }

    static shouldSell(percentageDiff: number): boolean {
        return percentageDiff >= PROFIT_THRESHOLD || percentageDiff <= STOP_LOSS_THRESHOLD;
    }

    static shouldBuy(percentageDiff: number): boolean {
        return percentageDiff >= UPWARD_TREND_THRESHOLD || percentageDiff <= DIP_THRESHOLD;
    }

    /*
    static async getCurrentDiffForTransactionBAK() {
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
    */
}

export default Trader;
