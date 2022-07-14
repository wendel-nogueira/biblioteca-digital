import { sequelize } from '../database';
import { Associate } from '../models/Associate';


class AssociateRepository {
    private associate: Associate;
    
    constructor() {
        this.associate = new Associate(sequelize);
    }

    public async getAll() {
        return this.associate.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number) {
        return this.associate.init().findByPk(id).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(associate: any) {
        return this.associate.init().create(associate).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, associate: any) {
        return this.associate.init().update(associate, { where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number) {
        return this.associate.init().destroy({ where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }
}


export { AssociateRepository };