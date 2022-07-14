import { sequelize } from '../database';
import { Loan } from '../models/Loan';


class LoanRepository {
    private loan: Loan;
    
    constructor() {
        this.loan = new Loan(sequelize);
    }

    public async getAll() {
        return this.loan.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async get(query: any) {
        return this.loan.init().findOne(
            { where: query }
        ).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(loan: any) {
        return this.loan.init().create(loan).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, loan: any) {
        return this.loan.init().update(loan, { where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number) {
        return this.loan.init().destroy({ where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }
}


export { LoanRepository };