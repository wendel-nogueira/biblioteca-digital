import { sequelize } from '../database';
import { Associate } from '../models/Associate';


class AssociateRepository {
    private associate: Associate;
    
    constructor() {
        this.associate = new Associate(sequelize);
    }

    public async getAll(): Promise<Array<any>> {
        return this.associate.init().findAll({
            raw: true
        }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number): Promise<any> {
        return this.associate.init().findByPk(id, {
            raw: true
        }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(associate: any): Promise<any> {
        return this.associate.init().create(associate).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, associate: any): Promise<any> {
        return this.associate.init().findByPk(id).then(data => {
            return data.update(associate);
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number): Promise<any> {
        return this.associate.init().findByPk(id).then(data => {
            return data.destroy();
        }).catch(error => {
            return error;
        });
    }
}


export { AssociateRepository };