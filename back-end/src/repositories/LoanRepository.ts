import { sequelize } from '../database';
import { Loan } from '../models/Loan';


class LoanRepository {
    private loan: Loan;
    
    constructor() {
        this.loan = new Loan(sequelize);
    }

    public async getAll(): Promise<Array<any>> {
        return this.loan.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number): Promise<any> {
        return this.loan.init().findByPk(id, {
            raw: true
        }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(loan: any): Promise<any> {
        return this.loan.init().create(loan).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, loan: any): Promise<any> {
        return this.loan.init().findByPk(id).then(data => {
            return data.update(loan);
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number): Promise<any> {
        return this.loan.init().findByPk(id).then(data => {
            return data.destroy();
        }).catch(error => {
            return error;
        });
    }
}


export { LoanRepository };