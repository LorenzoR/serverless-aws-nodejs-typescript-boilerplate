import { attribute, hashKey, table } from '@aws/dynamodb-data-mapper-annotations';
import { TransactionStates } from '@src/consts';

type TransactionState = TransactionStates.Buy | TransactionStates.Sell;

@table('last-transaction')
class LastTransaction {
    @hashKey({
        type: 'String',
    })
    public Code: string;

    @attribute()
    public CurrentState: TransactionState;

    @attribute()
    public Price: number;

    @attribute()
    public Amount: number;

    @attribute()
    public Timestamp: number;
}

export default LastTransaction;
