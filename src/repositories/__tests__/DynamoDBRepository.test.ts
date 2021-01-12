import { TransactionStates } from '../../consts';
import LastTransaction from '../../models/lastTransaction';
import DynamoDBRepository from '../DynamoDBRepository';

describe('DynamoDBRepository', () => {
    const dynamoDBRepository = new DynamoDBRepository('local');

    it('can insert a record', async () => {
        expect.hasAssertions();

        const transaction = new LastTransaction();
        transaction.Code = 'BTC';
        transaction.Amount = 1;
        transaction.Price = 46887.31;
        transaction.CurrentState = TransactionStates.Buy;
        transaction.Timestamp = 1610441417973; // Tue Jan 12 2021 19:50:33 GMT+1100 (Australian Eastern Daylight Time)

        const result = await dynamoDBRepository.put(transaction);

        expect(result).toBe(true);
    });

    it('can get a record', async () => {
        expect.hasAssertions();

        const bitcoinCode = 'BTC';
        const result = await dynamoDBRepository.getByCode(bitcoinCode);

        expect(result.Code).toBe(bitcoinCode);
    });
});
