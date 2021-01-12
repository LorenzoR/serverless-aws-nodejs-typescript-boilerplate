import api from '../account';
import authApi from '../authenticate';

const apiKey = authApi.getApiKey();

describe('balance service', () => {
    it('it can get balance', async () => {
        expect.hasAssertions();

        const tokenResponse = await authApi.refreshToken(apiKey);

        const response = await api.getBalance(tokenResponse.data.accessToken);

        expect(response.data.length).toBeGreaterThan(0);

        console.log('response', response.data);

        response.data.forEach((data) => {
            expect(data.assetId).toBeGreaterThan(0);
            expect(data).toHaveProperty('availableBalance');
            // expect(data).toHaveProperty('assetCode');
        });
    });
});
