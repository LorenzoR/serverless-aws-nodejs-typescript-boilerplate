import api from '../orders';
import authApi from '../authenticate';

const apiKey = authApi.getApiKey();

describe('orders service', () => {
    it('it can get list of all orders', async () => {
        expect.hasAssertions();
        const tokenResponse = await authApi.refreshToken(apiKey);

        const response = await api.getAll(tokenResponse.data.accessToken);

        // console.log('response', response.data.orders);

        expect(response.data.orders.length).toBeGreaterThan(0);
    });

    it('it can get list of orders for asset', async () => {
        expect.hasAssertions();
        const tokenResponse = await authApi.refreshToken(apiKey);

        const response = await api.getList('XTZ', tokenResponse.data.accessToken);

        expect(response.data.orders.length).toBeGreaterThan(0);
        console.log('response', response.data.orders);
    });
});
