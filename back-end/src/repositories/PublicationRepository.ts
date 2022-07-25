import { sequelize } from '../database';
import { Publication } from '../models/Publication';


class PublicationRepository {
    private publication: Publication;
    
    constructor() {
        this.publication = new Publication(sequelize);
    }

    public async getAll(): Promise<Array<any>> {
        return this.publication.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number): Promise<any> {
        return this.publication.init().findByPk(id, {
            raw: true
        }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(publication: any): Promise<any> {
        return this.publication.init().create(publication).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, publication: any): Promise<any> {
        return this.publication.init().findByPk(id).then(data => {
            return data.update(publication);
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number): Promise<any> {
        return this.publication.init().findByPk(id).then(data => {
            return data.destroy();
        }).catch(error => {
            return error;
        });
    }
}


export { PublicationRepository };