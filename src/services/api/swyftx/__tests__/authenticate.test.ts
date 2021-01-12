import api from '../authenticate';

const apiKey = api.getApiKey();

describe('authenticate service', () => {
    it('it can refresh a token', async () => {
        expect.hasAssertions();

        const response = await api.refreshToken(apiKey);

        expect(response.data).toHaveProperty('accessToken');
        expect(response.data).toHaveProperty('scope');
    });
});
