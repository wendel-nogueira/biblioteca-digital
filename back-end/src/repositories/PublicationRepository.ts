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

    public async get(query: any) {
        return this.publication.init().findOne(
            { where: query }
        ).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(publication: any) {
        return this.publication.init().create(publication).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, publication: any) {
        return this.publication.init().update(publication, { where: { id: id } }).then(data => {
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