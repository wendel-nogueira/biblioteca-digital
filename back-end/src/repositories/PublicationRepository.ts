import { sequelize } from '../database';
import { Publication } from '../models/Publication';


class PublicationRepository {
    private publication: Publication;
    
    constructor() {
        this.publication = new Publication(sequelize);
    }

    public async getAll() {
        return this.publication.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number) {
        return this.publication.init().findByPk(id).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(associate: any) {
        return this.publication.init().create(associate).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, associate: any) {
        return this.publication.init().update(associate, { where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number) {
        return this.publication.init().destroy({ where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }
}


export { PublicationRepository };