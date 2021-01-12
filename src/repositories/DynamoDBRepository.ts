import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB from 'aws-sdk/clients/dynamodb';

import RepositoryInterface from './RepositoryInterface';

import LastTransaction from '../models/lastTransaction';

class DynamoDBRepository implements RepositoryInterface {
    private mapper: DataMapper;

    constructor(stage: string) {
        console.log('Stage', stage);
        let dynamoDB;

        if (stage === 'local') {
            dynamoDB = new DynamoDB({
                region: 'localhost',
                endpoint: 'http://localhost:8000',
                accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
                secretAccessKey: 'DEFAULT_SECRET', // needed if you don't have aws credentials at all in env
            });
        } else {
            dynamoDB = new DynamoDB({
                region: 'ap-southeast-2',
            });
        }

        this.mapper = new DataMapper({
            client: dynamoDB,
            tableNamePrefix: `${stage}-`, // Table prefix to keep dev and prod tables separate
        });
    }

    // Get by code
    public async getByCode(code: string): Promise<LastTransaction> {
        try {
            const response = await this.mapper.get(Object.assign(new LastTransaction(), { Code: code }));

            return response;
        } catch (error) {
            return null;
        }
    }

    // Put user
    public async put(transaction: LastTransaction): Promise<boolean> {
        const toSave = Object.assign(new LastTransaction(), transaction);

        try {
            await this.mapper.put(toSave);

            return true;
        } catch (error) {
            console.error('DynamoDBRepository::put()', error);
            return false;
        }
    }
}

export default DynamoDBRepository;
