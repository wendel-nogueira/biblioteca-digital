import { sequelize } from '../database';
import { Exemplary } from '../models/Exemplary';


class ExemplaryRepository {
    private exemplary: Exemplary;
    
    constructor() {
        this.exemplary = new Exemplary(sequelize);
    }

    public async getAll(): Promise<Array<any>> {
        return this.exemplary.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number): Promise<any> {
        return this.exemplary.init().findByPk(id, {
            raw: true
        }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(exemplary: any): Promise<any> {
        return this.exemplary.init().create(exemplary).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, exemplary: any): Promise<any> {
        return this.exemplary.init().findByPk(id).then(data => {
            return data.update(exemplary);
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number): Promise<any> {
        return this.exemplary.init().findByPk(id).then(data => {
            return data.destroy();
        }).catch(error => {
            return error;
        });
    }
}


export { ExemplaryRepository };