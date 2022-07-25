import { sequelize } from '../database';
import { Reserve } from '../models/Reserve';


class ReserveRepository {
    private reserve: Reserve;
    
    constructor() {
        this.reserve = new Reserve(sequelize);
    }

    public async getAll(): Promise<Array<any>> {
        return this.reserve.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number): Promise<any> {
        return this.reserve.init().findByPk(id, {
            raw: true
        }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(reserve: any): Promise<any> {
        return this.reserve.init().create(reserve).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, reserve: any): Promise<any> {
        return this.reserve.init().findByPk(id).then(data => {
            return data.update(reserve);
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number): Promise<any> {
        return this.reserve.init().findByPk(id).then(data => {
            return data.destroy();
        }).catch(error => {
            return error;
        });
    }
}


export { ReserveRepository };