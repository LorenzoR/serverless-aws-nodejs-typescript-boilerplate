import LastTransaction from '../models/lastTransaction';

interface UserRepositoryInterface {
    getByCode(code: string): Promise<LastTransaction>;
    put(transaction: LastTransaction): Promise<boolean>;
}

export default UserRepositoryInterface;
