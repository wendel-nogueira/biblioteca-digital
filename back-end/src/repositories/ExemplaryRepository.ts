import { sequelize } from '../database';
import { Exemplary } from '../models/Exemplary';


class ExemplaryRepository {
    private exemplary: Exemplary;
    
    constructor() {
        this.exemplary = new Exemplary(sequelize);
    }

    public async getAll() {
        return this.exemplary.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number) {
        return this.exemplary.init().findByPk(id).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(exemplary: any) {
        return this.exemplary.init().create(exemplary).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, exemplary: any) {
        return this.exemplary.init().update(exemplary, { where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number) {
        return this.exemplary.init().destroy({ where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }
}


export { ExemplaryRepository };