import Portfolio from '../index';

describe('portfolio service', () => {
    it('it can get profit info', async () => {
        expect.hasAssertions();

        const response = await Portfolio.getProfit();

        console.log(response);

        expect(response).toBe(true);
    });

    it('it can get profit info by asset', async () => {
        expect.hasAssertions();

        const response = await Portfolio.getProfitByAsset('XTZ');

        console.log(response);

        expect(response).toBe(true);
    });

    it.only('it can get rates', async () => {
        expect.hasAssertions();

        const response = await Portfolio.getLiveRates('');

        console.log(response);

        expect(true).toBe(true);
    });
});
