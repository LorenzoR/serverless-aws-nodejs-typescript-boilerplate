import api from '../history';
import authApi from '../authenticate';

const apiKey = authApi.getApiKey();

describe('history service', () => {
    it('it can get deposit history', async () => {
        expect.hasAssertions();

        const tokenResponse = await authApi.refreshToken(apiKey);

        const response = await api.getCurrencyDepositHistory('AUD', tokenResponse.data.accessToken);

        console.log('response', response.data);

        expect(response.data.length).toBeGreaterThan(0);
    });
});
