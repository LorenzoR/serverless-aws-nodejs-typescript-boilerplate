import { TransactionStates } from '../../../consts';
import LastTransaction from '../../../models/lastTransaction';
import Trader from '../index';

describe('trader service', () => {
    it('it can get difference from last transaction and current price', async () => {
        expect.hasAssertions();

        const transaction = new LastTransaction();
        transaction.Code = 'BTC';
        transaction.Amount = 1;
        transaction.Price = 46887.31;
        transaction.CurrentState = TransactionStates.Buy;
        transaction.Timestamp = 1610441417973; // Tue Jan 12 2021 19:50:33 GMT+1100 (Australian Eastern Daylight Time)

        expect(Trader.getCurrentDiffForTransaction(transaction, transaction.Price * 2)).toBe(100);
        expect(Trader.getCurrentDiffForTransaction(transaction, transaction.Price * 3)).toBe(200);
        expect(Trader.getCurrentDiffForTransaction(transaction, transaction.Price / 2)).toBe(-50);
    });
});
