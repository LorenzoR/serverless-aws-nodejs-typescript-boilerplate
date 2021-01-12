import api from '../markets';
import authApi from '../authenticate';

const apiKey = authApi.getApiKey();

describe('markets service', () => {
    it('it can get basic info about asset', async () => {
        expect.hasAssertions();

        const tokenResponse = await authApi.refreshToken(apiKey);

        const response = await api.getBasicInfo('BTC', tokenResponse.data.accessToken);

        expect(response.data.length).toBeGreaterThan(0);
    });

    it('it can get market assets', async () => {
        expect.hasAssertions();

        const tokenResponse = await authApi.refreshToken(apiKey);

        try {
            const response = await api.getMarketAssets(tokenResponse.data.accessToken);
            expect(response.data.length).toBeGreaterThan(0);
        } catch (error) {
            console.error('error', error);
        }

        // expect(response.data.length).toBeGreaterThan(0);
    });

    it('it can get live rates', async () => {
        expect.hasAssertions();

        const tokenResponse = await authApi.refreshToken(apiKey);

        try {
            const response = await api.getLiveRates('1', tokenResponse.data.accessToken);

            console.log('response', response.data);
        } catch (error) {
            console.error('error', error);
        }

        // expect(response.data.length).toBeGreaterThan(0);
    });
});
