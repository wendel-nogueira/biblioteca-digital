import { sequelize } from '../database';
import { Reserve } from '../models/Reserve';


class ReserveRepository {
    private reserve: Reserve;
    
    constructor() {
        this.reserve = new Reserve(sequelize);
    }

    public async getAll() {
        return this.reserve.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async get(query: any) {
        return this.reserve.init().findOne(
            { where: query }
        ).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(reserve: any) {
        return this.reserve.init().create(reserve).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, reserve: any) {
        return this.reserve.init().update(reserve, { where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number) {
        return this.reserve.init().destroy({ where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }
}


export { ReserveRepository };