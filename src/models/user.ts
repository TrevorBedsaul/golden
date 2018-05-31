import { Charity } from '../models/charity';
import { Payment } from '../models/payment';
export class User {
    constructor() {

    }

    firstName: string;
    surName: string;
    username: string;
    password: string;
    charities: Array<Charity>;
    portfolio: Array<number>;
    transactionHistory: Array<Payment>;

}